import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/eaada180-cf59-11ed-bffe-d5e6f853e30c"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="contact"
    >
      <div className="contact-section">
        <label For="name">Name</label>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div className="contact-section">
        <label For="email">Email</label>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="contact-section">
        <label For="message">Message</label>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="contact-submit">
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;