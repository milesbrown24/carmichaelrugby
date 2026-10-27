import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json",
};
const server = createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405);
    return res.end("Local preview does not accept form submissions.");
  }
  try {
    const url = new URL(req.url, "http://localhost");
    let filename = path.resolve(root, "." + decodeURIComponent(url.pathname));
    if (filename !== root && !filename.startsWith(root + path.sep)) {
      res.writeHead(403);
      return res.end();
    }
    try {
      if ((await stat(filename)).isDirectory()) {
        if (!url.pathname.endsWith("/")) {
          res.writeHead(308, { Location: url.pathname + "/" + url.search });
          return res.end();
        }
        filename = path.join(filename, "index.html");
      }
    } catch {
      filename = path.join(root, "404.html");
      res.statusCode = 404;
    }
    const body = await readFile(filename);
    res.setHeader(
      "Content-Type",
      types[path.extname(filename)] || "application/octet-stream",
    );
    res.end(req.method === "HEAD" ? undefined : body);
  } catch {
    res.writeHead(404);
    res.end("Page not found");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log("Local: http://127.0.0.1:" + port),
);
