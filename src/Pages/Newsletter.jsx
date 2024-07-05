// NewsletterForm.jsx
import "../App.css";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", email); // Mock submission, replace with actual logic
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <h2>Subscribe to Our Newsletter</h2>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
