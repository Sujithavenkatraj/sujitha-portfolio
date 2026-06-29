import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiBook, FiUsers } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { experiences } from "../data/portfolioData";

const typeConfig = {
  internship: { icon: FiBriefcase, color: "text-blue-400", bg: "bg-blue-500/20", label: "Internship" },
  hackathon: { icon: FiCode, color: "text-purple-400", bg: "bg-purple-500/20", label: "Hackathon" },
  workshop: { icon: FiBook, color: "text-green-400", bg: "bg-green-500/20", label: "Workshop" },
  leadership: { icon: FiUsers, color: "text-amber-400", bg: "bg-amber-500/20", label: "Leadership" },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-padding">
        <SectionHeader
          tag="04 / Experience"
          title="Experience"
          subtitle="Internships, hackathons, workshops, and leadership activities that shaped my journey."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-400 to-transparent md:left-1/2" />

          {experiences.map((exp, i) => {
            const cfg = typeConfig[exp.type];
            const Icon = cfg.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex gap-6 mb-10 md:mb-0 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:items-start`}
              >
                {/* Mobile / desktop timeline dot */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6">
                  <div className={`w-12 h-12 rounded-full ${cfg.bg} flex items-center justify-center ${cfg.color} border-4 border-white dark:border-dark-900 shadow-lg`}>
                    <Icon size={20} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 glass card ml-2 md:ml-0 md:w-[calc(50%-3rem)] md:mt-0 mt-0 ${isLeft ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-bold text-gray-800 dark:text-white text-base">{exp.title}</h3>
                      <p className="text-primary-400 text-sm font-medium">{exp.org}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color} whitespace-nowrap`}>
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-400 mb-3">{exp.duration}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
