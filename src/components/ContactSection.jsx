import React from 'react';

const ContactSection = () => (
  <section id="contact" className="section">
    <h2>Request Custom Order</h2>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Contact" />
      <textarea placeholder="What would you like to have made?" rows="4" />
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default ContactSection;