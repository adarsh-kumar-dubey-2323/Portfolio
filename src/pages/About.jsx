import Profile from "../assets/Profile.jpeg";


export default function About() {
  return (
    <section className="section container page">
      <p className="eyebrow">WHO I AM</p>
      <h1 className="page-title">A developer with a passion for thoughtful design.</h1>

      <div className="about-layout">
        <img
          src={Profile}
          alt="Portrait"
        />
        <div>
          <h2>About Me</h2>
          <p>
            I'm a software engineer focused on building modern web applications
            with React, Node.js, and MongoDB. I enjoy turning ideas into
            useful, intuitive products.
          </p>
          <h2>Skills</h2>
          <p>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</p>
          <p>Backend: Node.js, Express, REST APIs, Java</p>
          <p>Database: MongoDB, MySQL</p>
          <p>Tools: Git, GitHub, Vite, VS Code</p>
          <h2>Education</h2>
          <p>Computer Science and Engineering</p>
          <a className="text-link" href="/resume.pdf" download="Adarsh_Kumar_Dubey_Resume.pdf">
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}