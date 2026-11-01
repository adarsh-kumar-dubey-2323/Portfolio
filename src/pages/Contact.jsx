import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="section container page">
      <p className="eyebrow">GET IN TOUCH</p>

      <h1 className="page-title">
        Have a project
        <br />
        in mind<span>?</span>
      </h1>

      <div className="contact-layout">
        <div>
          <p>
            Have an idea, a project, or just want to connect?
            Send me a message and let's talk.
          </p>

          <a className="text-link" href="mailto:hello@example.com">
            dubey1310adarsh@gmail.com
          </a>

          <div className="socials">
            <a href="https://github.com/adarsh-kumar-dubey-2323" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/adarsh-kr-dube-144980301/" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/adarsh_.dubey/" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
