import { motion } from "framer-motion";
import { FiAward, FiMapPin, FiCalendar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-padding">
        <SectionHeader
          tag="05 / Education"
          title="Education"
          subtitle="Academic background that forms the foundation of my technical expertise."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass card group hover:border-primary-400/30 border border-transparent"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                  <FiAward size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-gray-800 dark:text-white text-lg leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-400 font-medium text-sm mb-2">{edu.college}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5"><FiCalendar size={12} /> {edu.duration}</span>
                    <span className="flex items-center gap-1.5"><FiMapPin size={12} /> {edu.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-display font-bold gradient-text">{edu.cgpa}</div>
                  <div className="text-xs text-gray-400 font-mono">CGPA / Score</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
