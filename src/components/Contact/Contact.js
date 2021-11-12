import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main-container d-flex justify-content-center align-items-center">
      <div className="contact-container">
        <div class="wrapper">
          <h2>CONTACT US</h2>
          <form action="" method="POST">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="First and Last"
                required
                minlength="3"
                maxlength="25"
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="email@domain.tld"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
              className="contact-text-area"
                name="Message"
                id="message"
                rows="5"
                placeholder="Type your message here...."
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="submit">
                <i class="far fa-paper-plane"></i>Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
