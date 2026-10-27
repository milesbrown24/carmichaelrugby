const photos = {
  action: {
    width: 1179,
    height: 1452,
    sizes: [480, 800, 1179],
    alt: "A Hawks player carrying the rugby ball with an opponent in pursuit",
  },
  celebration: {
    width: 1179,
    height: 654,
    sizes: [480, 800, 1179],
    alt: "Hawks teammates celebrating together with a trophy",
  },
  "trophy-team": {
    width: 1179,
    height: 654,
    sizes: [480, 800, 1179],
    alt: "The Hawks gathered for a team photo with their trophy",
  },
  team: {
    width: 1800,
    height: 1205,
    sizes: [480, 800, 1800],
    alt: "Hawks players and coaches together on the rugby field",
  },
  huddle: {
    width: 1400,
    height: 1121,
    sizes: [480, 800, 1400],
    alt: "Hawks teammates with their arms around one another in a team huddle",
  },
};

// Explicit responsive files work on static Netlify hosting without an image service.
export default function ClubPhoto({
  photo,
  className,
  priority = false,
  sizes = "(max-width: 640px) calc(100vw - 40px), 50vw",
}) {
  const image = photos[photo];
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={image.sizes
          .map((width) => `/images/hawks-${photo}-${width}.webp ${width}w`)
          .join(", ")}
        sizes={sizes}
      />
      <img
        src={`/images/hawks-${photo}.jpg`}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
