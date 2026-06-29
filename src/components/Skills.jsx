import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillsData } from "../data/portfolioData";

const tabs = [
  { key: "languages", label: "Languages" },
  { key: "technologies", label: "Technologies" },
  { key: "tools", label: "Tools" },
];

function SkillBar({ name, level, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">{name}</span>
        <span className="text-xs font-mono text-primary-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
        <motion.div
          className="skill-bar h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 + 0.2, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("languages");

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-padding">
        <SectionHeader
          tag="02 / Skills"
          title="Technical Skills"
          subtitle="A snapshot of my technical toolkit, built through coursework, projects, and self-learning."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex glass rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === tab.key
                    ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-md"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-x-12 max-w-3xl mx-auto"
        >
          {skillsData[active].map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} i={i} />
          ))}
        </motion.div>

        {/* Tech stack pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-5">Full Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Python","Java","JavaScript","SQL","TensorFlow","scikit-learn","Pandas","NumPy",
              "React.js","HTML","CSS","Tailwind CSS","Git","GitHub","MySQL","Power BI",
              "Jupyter","Google Colab","VS Code","Flask","OpenCV",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm text-gray-600 dark:text-gray-300 border border-white/10 hover:border-primary-400/50 hover:text-primary-400 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
