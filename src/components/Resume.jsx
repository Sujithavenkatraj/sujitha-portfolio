import { motion } from "framer-motion";
import { FiDownload, FiEye, FiBook, FiCode, FiAward, FiBriefcase, FiStar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { personalInfo, education, skillsData, certifications, experiences } from "../data/portfolioData";

const ResumeCard = ({ icon: Icon, title, children, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
    className="glass card"
  >
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
      <div className="w-9 h-9 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
        <Icon size={18} />
      </div>
      <h3 className="font-display font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
    {children}
  </motion.div>
);

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-padding">
        <SectionHeader
          tag="08 / Resume"
          title="My Resume"
          subtitle="A comprehensive overview of my education, skills, and experience."
        />

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href={personalInfo.resumeUrl} download className="btn-primary justify-center">
            <FiDownload /> Download PDF Resume
          </a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
            <FiEye /> View Full Resume
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <ResumeCard icon={FiBook} title="Education" i={0}>
            {education.map((edu, i) => (
              <div key={i} className={i > 0 ? "mt-4 pt-4 border-t border-white/10" : ""}>
                <div className="text-xs font-mono text-gray-400 mb-1">{edu.duration}</div>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-white leading-snug">{edu.degree}</h4>
                <p className="text-primary-400 text-xs mt-0.5">{edu.college}</p>
                <span className="text-xs font-bold gradient-text">{edu.cgpa}</span>
              </div>
            ))}
          </ResumeCard>

          {/* Technical Skills */}
          <ResumeCard icon={FiCode} title="Technical Skills" i={1}>
            <div className="space-y-3">
              {Object.entries(skillsData).map(([cat, skills]) => (
                <div key={cat}>
                  <p className="text-xs font-mono text-gray-400 uppercase mb-1.5 capitalize">{cat}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.slice(0, 4).map((s) => (
                      <span key={s.name} className="text-xs px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeCard>

          {/* Certifications */}
          <ResumeCard icon={FiAward} title="Certifications" i={2}>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.id} className="flex items-start gap-2">
                  <span className="text-primary-400 mt-0.5">▸</span>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{cert.title}</p>
                    <p className="text-xs text-gray-400">{cert.org} · {cert.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ResumeCard>

          {/* Experience & Achievements */}
          <ResumeCard icon={FiBriefcase} title="Experience & Achievements" i={3}>
            <ul className="space-y-3">
              {experiences.map((exp) => (
                <li key={exp.id} className="flex items-start gap-2">
                  <span className="text-accent-400 mt-0.5">▸</span>
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{exp.title}</p>
                    <p className="text-xs text-gray-400">{exp.org} · {exp.duration}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ResumeCard>
        </div>
      </div>
    </section>
  );
}
