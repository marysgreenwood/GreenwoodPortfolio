import React, { useState } from "react";
import emailjs from "emailjs-com";

const styles = {
  formStyle: { marginLeft: "2rem", marginTop: "1rem" },
  thankYouStyle: { margin: "1rem", paddingLeft: "1rem", width: "col-lg-3" },
};
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_7dmb6sr";
      const templateId = "template_bnajgof";
      const publicKey = "Sh2-psiqmm5aj_rzm";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div id="contact-form">
      <form>
        <div class="form-group" style={styles.formStyle}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group" style={styles.formStyle}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group" style={styles.formStyle}>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          class="btn btn-primary"
          onClick={submit}
          style={styles.formStyle}
        >
          Send Message
        </button>
        <div style={styles.thankYouStyle}>
          <p className={emailSent ? "visible" : null}>
            Thank you for your message, we will be in touch in no time!
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
