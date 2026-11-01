import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Link to={`/projects/${project.slug}`}>
        <div className="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <span className="project-arrow"><ArrowUpRight /></span>
        </div>
        <div className="project-info">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}