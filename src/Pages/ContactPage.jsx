import NewsletterForm from "./Newsletter";
import "../App.css";

const ContactPage = () => {
  return (
    <div className="contact-page" id="contact">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Feel free to get in touch with us.</p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default ContactPage;
