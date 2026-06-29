import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiAward as FiTrophy, FiCalendar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/portfolioData";

const categoryColors = {
  hackathon: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
  competition: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  academic: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
  research: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
};

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-padding">
        <SectionHeader
          tag="07 / Achievements"
          title="Achievements & Awards"
          subtitle="Recognition and milestones that reflect consistent excellence and impact."
        />

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, i) => {
            const clr = categoryColors[ach.category] || categoryColors.academic;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelected(ach)}
                className="glass card cursor-pointer group relative overflow-hidden"
              >
                {/* Award image */}
                <div className="h-40 rounded-xl overflow-hidden bg-gradient-to-br from-primary-900/30 to-accent-900/30 mb-4 flex items-center justify-center relative">
                  {ach.image ? (
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  ) : null}
                  <FiTrophy size={40} className="text-amber-400 opacity-50 absolute" />
                </div>

                <span className={`text-xs px-2.5 py-1 rounded-full ${clr.bg} ${clr.text} border ${clr.border} font-mono uppercase tracking-wider`}>
                  {ach.category}
                </span>

                <h3 className="font-display font-bold text-gray-800 dark:text-white text-sm mt-3 mb-2 leading-snug">
                  {ach.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-auto">
                  <FiCalendar size={12} /> {ach.date}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-center font-display font-semibold text-lg text-gray-600 dark:text-gray-400 mb-8">
            Achievement Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-transparent" />
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-6 relative"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md shadow-primary-500/30 z-10">
                  {i + 1}
                </div>
                <div className="glass p-4 rounded-xl flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display font-semibold text-sm text-gray-800 dark:text-white leading-snug">{ach.title}</h4>
                    <span className="text-xs font-mono text-gray-400 whitespace-nowrap">{ach.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass bg-white/10 dark:bg-dark-800/90 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-primary-900/40 to-accent-900/40 mb-4 flex items-center justify-center">
                {selected.image ? (
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                ) : (
                  <FiTrophy size={60} className="text-amber-400 opacity-70" />
                )}
              </div>
              <h3 className="font-display font-bold text-xl text-gray-800 dark:text-white mb-2">{selected.title}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-3">{selected.description}</p>
              <p className="text-xs font-mono text-gray-400 flex items-center gap-1.5"><FiCalendar size={12} /> {selected.date}</p>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 p-2 glass rounded-full hover:text-primary-400 transition-colors text-gray-400">
                <FiX size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
