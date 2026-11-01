import { Link } from "react-router-dom";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Complete web applications built from frontend to backend.",
    deliverables: "Responsive UI, API, database, deployment",
  },
  {
    title: "Frontend Development",
    description: "Accessible, responsive interfaces with modern frameworks.",
    deliverables: "React components, responsive styling, animations",
  },
  {
    title: "Backend & API Development",
    description: "Secure and scalable server-side applications.",
    deliverables: "REST APIs, authentication, database integration",
  },
  {
    title: "Website Redesign",
    description: "Modernize existing websites for better usability and performance.",
    deliverables: "UX improvements, responsive redesign, optimization",
  },
];

export default function Services() {
  return (
    <section className="section container page">
      <p className="eyebrow">WHAT I CAN DO FOR YOU</p>
      <h1 className="page-title">Thoughtful solutions.<br />Built with purpose.</h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-item" key={service.title}>
            <span>0{index + 1}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p className="secondary">{service.deliverables}</p>
            <Link to="/contact" className="text-link">Discuss a project →</Link>
          </article>
        ))}
      </div>

      <div className="workflow">
        <p className="eyebrow">HOW I WORK</p>
        <h2>Discovery → Design → Development → Launch</h2>
      </div>

      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>How long does a project take?</summary>
        <p>Timeline depends on project scope. A typical website takes 2–4 weeks.</p>
      </details>
      <details>
        <summary>Can you work with an existing website?</summary>
        <p>Yes. I can improve, redesign, or extend an existing application.</p>
      </details>
    </section>
  );
}