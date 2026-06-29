import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolioData";

const categories = [
  { key: "all", label: "All Projects" },
  { key: "ml", label: "Machine Learning" },
  { key: "data", label: "Data Science" },
  { key: "web", label: "Web Dev" },
];

function ProjectCard({ project, i }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass card group overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary-900/40 to-accent-900/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : null}
        {/* Overlay with icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <FiCode size={48} className="text-primary-400" />
        </div>
        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full bg-primary-500/80 text-white backdrop-blur-sm">
            ★ Featured
          </span>
        )}
      </div>

      <h3 className="font-display font-bold text-lg text-gray-800 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-3 border-t border-white/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl glass hover:border-primary-400/50 text-sm text-gray-400 hover:text-primary-400 transition-all"
        >
          <FiGithub size={16} /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-primary-500/10 text-primary-400 text-sm hover:bg-primary-500/20 transition-all border border-primary-500/20"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-padding">
        <SectionHeader
          tag="03 / Projects"
          title="My Projects"
          subtitle="Real-world solutions built with AI, data science, and modern web technologies."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat.key
                  ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white border-transparent shadow-md shadow-primary-500/30"
                  : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-primary-400 hover:text-primary-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sujithav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
