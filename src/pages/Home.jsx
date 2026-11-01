import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { projects } from "../data/projects";
import Profile from "../assets/Profile.jpeg";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">FULL-STACK DEVELOPER · INDIA</p>
          <h1>Building Digital Experiences That Matter.</h1>
          <p className="hero-description">
            I design and develop thoughtful digital products that bring ideas
            to life through clean code and meaningful experiences.
          </p>
          <div className="hero-actions">
            <Button to="/projects">Explore My Work</Button>
            <Button to="/contact" variant="outline">Let's Talk</Button>
          </div>
        </motion.div>

        <div className="hero-portrait">
          <img
            src={Profile}
            alt="Developer portrait"
          />
        </div>

        <a href="#selected-work" className="scroll-indicator">
          Scroll to explore <ArrowDown size={16} />
        </a>
      </section>

      <section id="selected-work" className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW RECENT PROJECTS</p>
            <h2>Selected Works<span>.</span></h2>
          </div>
          <Link to="/projects" className="text-link">
            View all projects <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section container about-preview">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Turning complex problems into elegant, accessible digital solutions.
        </h2>
        <Button to="/about" variant="outline">More About Me</Button>
      </section>

      <section className="section container">
        <p className="eyebrow">WHAT I DO</p>
        <h2>Services<span>.</span></h2>
        <div className="services-grid">
          {[
            "Full-Stack Development",
            "Frontend Development",
            "Backend & API Development",
            "Website Optimization",
          ].map((service, i) => (
            <article key={service} className="service-item">
              <span>0{i + 1}</span>
              <h3>{service}</h3>
              <p>Building reliable, accessible, and scalable digital experiences.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}