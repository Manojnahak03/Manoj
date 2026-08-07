import React, { useState } from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "067c4fe3-2c6a-4de9-a096-b2d0b5efd442"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! 🚀");
        event.target.reset();
      } else {
        setResult("Failed to send message. Please try again.");
        console.error(data);
      }
    } catch (err) {
      console.error(err);

      setResult(
        "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <section className="contact" id="contact">

      {/* Heading */}
      <div className="contact-heading">

        <p>GET IN TOUCH</p>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <div className="contact-heading-line"></div>

        <h3>
          Have a project in mind or just want to say hello?
          I'd love to hear from you.
        </h3>

      </div>

      {/* Contact Content */}
      <div className="contact-section">

        {/* LEFT */}
        <div className="contact-left">

          <div className="contact-intro">

            <span className="contact-small-title">
              HAVE A PROJECT?
            </span>

            <h2>
              Let's build something
              <span> amazing.</span>
            </h2>

            <p>
              I am currently available to take on new projects,
              internships and development opportunities. Feel free
              to reach out and let's discuss your idea.
            </p>

          </div>

          {/* Contact Details */}
          <div className="contact-details">

            <a
              href="mailto:45manojnahak@gmail.com"
              className="contact-detail"
            >
              <div className="contact-icon">
                <img src={mail_icon} alt="Email" />
              </div>

              <div>
                <span>Email</span>
                <p>45manojnahak@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+918591430709"
              className="contact-detail"
            >
              <div className="contact-icon">
                <img src={call_icon} alt="Phone" />
              </div>

              <div>
                <span>Phone</span>
                <p>+91 85914 30709</p>
              </div>
            </a>

            <div className="contact-detail">

              <div className="contact-icon">
                <img
                  src={location_icon}
                  alt="Location"
                />
              </div>

              <div>
                <span>Location</span>
                <p>Thane, Maharashtra, India</p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={onSubmit}
          className="contact-right"
        >

          <div className="form-header">
            <span>DROP ME A MESSAGE</span>
            <h2>Start a conversation</h2>
          </div>

          {/* Name */}
          <div className="form-group">

            <label htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

          </div>

          {/* Email */}
          <div className="form-group">

            <label htmlFor="email">
              Your Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

          </div>

          {/* Message */}
          <div className="form-group">

            <label htmlFor="message">
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="contact-submit"
          >
            <span>Send Message</span>
            <span className="submit-arrow">↗</span>
          </button>

          {/* Status */}
          {result && (
            <p
              className={`form-status ${
                result.includes("successfully")
                  ? "success"
                  : ""
              }`}
            >
              {result}
            </p>
          )}

        </form>

      </div>

    </section>
  );
};

export default Contact;


