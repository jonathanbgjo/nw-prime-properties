import React from 'react';

const Contact = () => {
  return (
    <section className="contact-info">
      <div className="contact-details">
        <h3>Contact Information</h3>
        <p className="contact-name">Alex Jo</p>
        <p className="contact-phone">
          <span role="img" aria-label="phone">📞</span> 425-405-6800
        </p>
        <p className="contact-email">
          <span role="img" aria-label="email">📧</span> 
          <a href="mailto:alex@nwprime.com">alex@nwprime.com</a>
        </p>
      </div>
      <div className="cta">
        <p>Contact us today for more information!</p>
      </div>
    </section>
  );
};

export default Contact;