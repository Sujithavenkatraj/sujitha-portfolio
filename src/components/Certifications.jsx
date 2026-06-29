import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiAward } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const [current, setCurrent] = useState(0);
  const total = certifications.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-padding">
        <SectionHeader
          tag="06 / Certifications"
          title="Certifications"
          subtitle="Verified credentials from globally recognized platforms and organizations."
        />

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass card flex flex-col sm:flex-row gap-6 items-center"
            >
              {/* Certificate image */}
              <div className="w-full sm:w-48 h-32 sm:h-36 rounded-xl overflow-hidden bg-gradient-to-br from-primary-900/40 to-accent-900/40 flex-shrink-0 flex items-center justify-center">
                {certifications[current].image ? (
                  <img
                    src={certifications[current].image}
                    alt={certifications[current].title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                ) : null}
                <FiAward size={40} className="text-primary-400 opacity-60" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="text-xs font-mono text-gray-400 mb-2">{certifications[current].date}</div>
                <h3 className="font-display font-bold text-xl text-gray-800 dark:text-white mb-2">
                  {certifications[current].title}
                </h3>
                <p className="text-primary-400 font-medium text-sm mb-4">{certifications[current].org}</p>
                <a
                  href={certifications[current].credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-primary-400 transition-colors border border-white/10 rounded-full px-4 py-2"
                >
                  <FiExternalLink size={14} /> View Credential
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-3 rounded-full glass hover:border-primary-400/50 hover:text-primary-400 transition-all text-gray-400">
              <FiChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {certifications.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-primary-500" : "w-2 h-2 bg-gray-300 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full glass hover:border-primary-400/50 hover:text-primary-400 transition-all text-gray-400">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Grid view */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setCurrent(i)}
              className={`glass p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                current === i ? "border-primary-500/50 bg-primary-500/5" : "border-transparent"
              }`}
            >
              <div className="text-xs font-mono text-gray-400 mb-1">{cert.date}</div>
              <h4 className="font-display font-semibold text-sm text-gray-800 dark:text-white mb-1 leading-snug">{cert.title}</h4>
              <p className="text-xs text-primary-400">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
