import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "067c4fe3-2c6a-4de9-a096-b2d0b5efd442"); // your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        event.target.reset();
      } else {
        setResult("Failed to submit form. Please try again.");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      setResult("An error occurred. Try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects. Feel free to send
            me a message.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>45manojnahak@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91-8591430709</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Sadguru Nagar, Diva East</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />

          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" required />

          <label htmlFor="">Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>

          <button type="submit" className="contact-submit">Submit</button>
          {result && <p className="form-status">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
