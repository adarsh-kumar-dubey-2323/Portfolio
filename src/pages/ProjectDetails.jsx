import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section container page">
        <h1>Project not found.</h1>
        <Link to="/projects" className="text-link">Back to projects</Link>
      </section>
    );
  }

  return (
    <article className="section container page">
      <p className="eyebrow">{project.category} PROJECT</p>
      <h1 className="page-title">{project.title}<span>.</span></h1>
      <img className="detail-hero" src={project.image} alt={project.title} />

      <div className="detail-content">
        <div>
          <h2>Overview</h2>
          <p>{project.overview}</p>
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <aside>
          <h3>Technologies</h3>
          <div className="tags">
            {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <a href={project.demo} target="_blank" rel="noreferrer" className="text-link">
            Live Demo <ArrowUpRight size={18} />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub <ArrowUpRight size={18} />
          </a>
        </aside>
      </div>

      <Link to="/projects" className="text-link">← All Projects</Link>
    </article>
  );
}