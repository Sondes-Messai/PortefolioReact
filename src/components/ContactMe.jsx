import React, { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    var url = "http://localhost:8080/email/send";
    axios
      .post(url, formData, {
        responseType: "json",
      })
      .then((res) => {});
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2> Me Contacter</h2>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md"> Prénom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md"> Nom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Teléphone</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            value={formData.subject}
            onChange={handleChange}
          >
            <option>Select One...</option>
            <option>Front-end</option>
            <option>Back-end</option>
            <option>Devops</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
