import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulazione di invio form
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message:
          "Grazie! La tua prenotazione è stata ricevuta. Ti contatteremo presto per confermarla.",
      });

      // Reset form dopo l'invio
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: "",
      });

      // Reset message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Contatti</h2>
          <div className="separator"></div>
          <p>Prenota un tavolo o contattaci per informazioni</p>
        </div>

        <div className="contact-content">
          <div
            className="contact-info"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h4>Posizione</h4>
                <p>Via Monte Napoleone 12, 20121 Milano</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-text">
                <h4>Orari</h4>
                <p>
                  Lunedì - Venerdì: 12:00 - 15:00, 19:00 - 23:30
                  <br />
                  Sabato - Domenica: 12:00 - 23:30
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-text">
                <h4>Telefono</h4>
                <p>+39 02 1234 5678</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>info@kyosushi.it</p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.227307243631!2d9.191942!3d45.468763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a1e8f6b2e3%3A0x3a53b67f746d7b4b!2sVia%20Monte%20Napoleone%2C%2012%2C%2020121%20Milano%20MI!5e0!3m2!1sit!2sit!4v1644321456789!5m2!1sit!2sit"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Kyo Sushi location"
              ></iframe>
            </div>
          </div>

          <div
            className="contact-form"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3>Prenota un Tavolo</h3>

            {formStatus.message && (
              <div
                className={`form-message ${
                  formStatus.error ? "error" : "success"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome e Cognome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Orario
                    </option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                    <option value="22:30">22:30</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Persone</option>
                  <option value="3">3 Persone</option>
                  <option value="4">4 Persone</option>
                  <option value="5">5 Persone</option>
                  <option value="6">6 Persone</option>
                  <option value="7+">7+ Persone</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Note aggiuntive (opzionale)"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Prenota Ora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
