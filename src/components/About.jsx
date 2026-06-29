import { motion } from "framer-motion";
import { FiUser, FiTarget, FiBook } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { personalInfo, education } from "../data/portfolioData";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-padding">
        <SectionHeader
          tag="01 / About"
          title="About Me"
          subtitle="A passionate technologist building at the intersection of AI and data."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bio card */}
          <motion.div
            custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-2 card glass dark:glass"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
                <FiUser size={20} />
              </div>
              <h3 className="font-display font-semibold text-xl">Who I Am</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Location", personalInfo.location],
                ["Degree", "B.Tech AI & Data Science (Hons.)"],
                ["Status", "Open to Opportunities"],
                ["Languages", "English, Tamil, Telugu, Hindi"],
              ].map(([k, v]) => (
                <div key={k}>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{k}</span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career objective */}
          <motion.div
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="card glass dark:glass flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center text-accent-400">
                <FiTarget size={20} />
              </div>
              <h3 className="font-display font-semibold text-xl">Career Goal</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm flex-1">
              {personalInfo.careerObjective}
            </p>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {["Internship Ready", "ML Engineer", "Data Scientist"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education quick view */}
          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i + 2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="card glass dark:glass"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                  <FiBook size={18} />
                </div>
                <div className="text-xs font-mono text-gray-400">{edu.duration}</div>
              </div>
              <h4 className="font-display font-semibold text-base text-gray-800 dark:text-white mb-1 leading-snug">{edu.degree}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.college}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{edu.location}</span>
                <span className="text-sm font-bold gradient-text">{edu.cgpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
