import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let's create something meaningful.</h2>

        <Link to="/contact" className="text-link">
          Get in touch →
        </Link>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Adarsh. All rights reserved.
        </span>

        <div className="socials">
          <a href="https://github.com/adarsh-kumar-dubey-2323" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/adarsh-kr-dube-144980301/" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://www.instagram.com/adarsh_.dubey/" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
