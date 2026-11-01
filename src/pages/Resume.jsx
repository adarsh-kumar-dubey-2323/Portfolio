
import { Link } from "react-router-dom";
import "./Resume.css";


const skills = [
  {
    title: "Languages",
    items: "Java, JavaScript, SQL, HTML5, CSS3",
  },
  {
    title: "Frontend",
    items:
      "React.js, Vite, Tailwind CSS, React Router, Context API, Responsive Web Development",
  },
  {
    title: "Backend",
    items: "Node.js, Express.js, REST APIs, Spring Boot, Hibernate/JPA, JDBC",
  },
  {
    title: "Databases",
    items: "MySQL, MongoDB, Firebase/Firestore",
  },
  {
    title: "CS Fundamentals",
    items: "Object-Oriented Programming, Data Structures and Algorithms, DBMS",
  },
  {
    title: "Tools & Deployment",
    items:
      "Git, Maven, npm, Postman, VS Code, IntelliJ IDEA, Vercel, Netlify, Hostinger",
  },
];

const projects = [
  {
    title: "Hotel Booking Web Application",
    tech: "React.js · JavaScript · Tailwind CSS · Context API · React Router",
    points: [
      "Built a responsive hotel booking web app with hotel listings, room details, amenities, image galleries, and booking-oriented UI.",
      "Implemented dynamic room-detail pages using React Router and URL parameters.",
      "Used React Context API for centralized hotel and room state.",
      "Created reusable Tailwind CSS components for consistent layouts across pages.",
      "Added interactive image galleries with selectable images and dynamic room information.",
      "Debugged state initialization, dynamic rendering, component imports, and URL-based room retrieval.",
    ],
  },
  {
    title: "YouTube Tag Generator",
    tech: "HTML · CSS · JavaScript · REST API",
    points: [
      "Developed a responsive web app that generates YouTube tags through an API-based workflow.",
      "Implemented search, request handling, and dynamic rendering of API responses in JavaScript.",
      "Integrated frontend logic with REST API services.",
      "Designed a clean, mobile-friendly interface focused on simple user interaction.",
    ],
  },
  {
    title: "Employee Payroll System",
    tech: "Java · Object-Oriented Programming",
    points: [
      "Built a Java payroll application using OOP principles.",
      "Implemented employee data and salary operations with classes and methods.",
      "Applied encapsulation, inheritance, abstraction, and polymorphism.",
      "Structured logic into reusable classes to strengthen Java problem-solving skills.",
    ],
  },
];

export default function Resume() {
  return (
    <div className="resume-page container">
      <header className="resume-header">
        <div>
          <p className="eyebrow">MY EXPERIENCE &amp; SKILLS</p>
          <h1>
            Resume<span>.</span>
          </h1>
          <h2>Adarsh Kumar Dubey</h2>
          <p className="resume-role">Full Stack Developer</p>
          <p className="resume-contact">
            India · <a href="tel:7355456550">7355456550</a> ·{" "}
            <a href="mailto:dubey1310adarsh@gmail.com">
              dubey1310adarsh@gmail.com
            </a>
          </p>
        </div>

        <a className="resume-download" href="/resume.pdf" download="Adarsh_Kumar_Dubey_Resume.pdf">
          Download PDF ↓
        </a>
      </header>

      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Computer Science undergraduate targeting Full Stack Developer,
          Software Engineer, Node.js Developer, and Java Developer roles.
          Hands-on experience building responsive web applications with
          React.js, JavaScript, Node.js, Express.js, Java, MySQL, and MongoDB.
          Strong foundation in Object-Oriented Programming, Data Structures and
          Algorithms, DBMS, and REST APIs. Comfortable integrating APIs,
          designing reusable UI components, working with relational and NoSQL
          databases, and debugging production-style issues. Currently expanding
          backend skills in Spring Boot, Hibernate/JPA, and JDBC for enterprise
          Java development.
        </p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="resume-skills">
          {skills.map((skill) => (
            <div className="resume-skill" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-projects">
          {projects.map((project) => (
            <article className="resume-project" key={project.title}>
              <h3>{project.title}</h3>
              <p className="resume-tech">{project.tech}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-target">
        <h2>Target Roles</h2>
        <p>
          Full Stack Developer · Software Engineer · Node.js Developer · Java
          Developer
        </p>
        <p>
          <strong>Primary stack:</strong> React.js, Node.js, Express.js,
          MongoDB, Java, Spring Boot, MySQL
        </p>
      </section>

      <footer className="resume-footer">
        <Link to="/contact">Get in touch →</Link>
      </footer>
    </div>
  );
}
