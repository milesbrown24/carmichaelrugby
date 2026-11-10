"use client";
import { useEffect, useState } from "react";
import { teams } from "../data/club";
export default function ContactForm() {
  const [localMessage, setLocalMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [team, setTeam] = useState("");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("team");
    if (teams.some((item) => item.id === requested)) setTeam(requested);
  }, []);
  async function onSubmit(event) {
    event.preventDefault();
    if (sending) return;
    if (["localhost", "127.0.0.1"].includes(window.location.hostname)) {
      setLocalMessage("This preview cannot send messages. Please email carmichaelhawks@gmail.com.");
      return;
    }
    const body = new URLSearchParams(new FormData(event.currentTarget));
    body.set("form-name", "hawks-inquiry");
    setSending(true);
    setLocalMessage("");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Question was not accepted");
      window.location.assign("/thanks/");
    } catch {
      setLocalMessage("Your question could not be sent. Please try again or email carmichaelhawks@gmail.com. Your message is still here.");
      setSending(false);
    }
  }
  return (
    <form
      name="hawks-inquiry"
      method="POST"
      action="/thanks/"
      onSubmit={onSubmit}
      className="contact-form"
      aria-busy={sending}
    >
      <input type="hidden" name="form-name" value="hawks-inquiry" />
      <p hidden>
        <label>
          Leave this blank
          <input name="bot-field" tabIndex="-1" autoComplete="off" />
        </label>
      </p>
      <div className="form-pair">
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        What’s on your mind?
        <select name="topic" defaultValue="New player question">
          <option>New player question</option>
          <option>Registration question</option>
          <option>Practice or schedule</option>
          <option>Financial assistance</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Player’s team (optional)
        <select
          name="team"
          value={team}
          onChange={(event) => setTeam(event.target.value)}
        >
          <option value="">Not sure yet / other question</option>
          {teams.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} — {item.ages}
            </option>
          ))}
        </select>
      </label>
      <label>
        Your question
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={5000}
          placeholder="What would you like to ask the club?"
        />
      </label>
      <p className="form-note">
        For player questions, an age or school year is enough. Please leave out
        medical or other sensitive details.
      </p>
      <button type="submit" className="button button-green" disabled={sending}>
        {sending ? "Sending…" : "Send question"} <span aria-hidden="true">↗</span>
      </button>
      {localMessage && (
        <p role="status" className="form-status">
          {localMessage}
        </p>
      )}
    </form>
  );
}
