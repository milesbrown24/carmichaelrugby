"use client";
import { useEffect, useState } from "react";
import { teams } from "../data/club";
export default function ContactForm() {
  const [localMessage, setLocalMessage] = useState("");
  const [team, setTeam] = useState("");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("team");
    if (teams.some((item) => item.id === requested)) setTeam(requested);
  }, []);
  function onSubmit(event) {
    if (["localhost", "127.0.0.1"].includes(window.location.hostname)) {
      event.preventDefault();
      setLocalMessage(
        "This preview cannot send messages. Please email carmichaelhawks@gmail.com. The form will use Netlify Forms after deployment.",
      );
    }
  }
  return (
    <form
      name="hawks-inquiry"
      method="POST"
      action="/thanks/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="contact-form"
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
      <button type="submit" className="button button-green">
        Send question <span aria-hidden="true">↗</span>
      </button>
      {localMessage && (
        <p role="status" className="form-status">
          {localMessage}
        </p>
      )}
    </form>
  );
}
