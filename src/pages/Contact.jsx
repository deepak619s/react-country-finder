export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="enter your name"
            name="username"
          />

          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="enter your email"
            name="email"
          />

          <textarea
            className="form-control"
            required
            autoComplete="off"
            rows="10"
            placeholder="enter your message"
            name="message"
          />

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
