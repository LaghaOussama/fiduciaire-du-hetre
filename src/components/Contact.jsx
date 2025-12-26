export default function Contact() {
  return (
    <>
      <div className="fiduclose-form-container">
        <form className="ficlose-form-group">
          <h1 className="fiduclose-hero-title">Contactez-nous</h1>
          <label className="fiduclose-form-label" for="fname">
            First name:
          </label>
          <input
            className="fiduclose-form-input"
            type="text"
            id="fname"
            name="fname"
          />
          <label className="fiduclose-form-label" for="lname">
            Last name:
          </label>
          <input
            className="fiduclose-form-input"
            type="text"
            id="lname"
            name="lname"
          />
          <label className="fiduclose-form-label" for="email">
            Email:
          </label>
          <input
            className="fiduclose-form-input"
            type="email"
            id="email"
            name="email"
          />
          <label className="fiduclose-form-label" for="subject">
            Subject:
          </label>
          <input
            className="fiduclose-form-input"
            type="text"
            id="subject"
            name="subject"
          />
          <label className="fiduclose-form-label" for="message">
            Message:
          </label>
          <textarea
            className="fiduclose-form-textarea"
            id="message"
            name="message"
          ></textarea>
          <button className="fiduclose-btn fiduclose-btn-primary fiduclose-btn-lg width-full">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
