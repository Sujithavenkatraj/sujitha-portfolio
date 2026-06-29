import { motion } from "framer-motion";

export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {tag && (
        <span className="inline-block font-mono text-xs tracking-widest uppercase text-primary-400 mb-3 px-4 py-1.5 rounded-full glass">
          {tag}
        </span>
      )}
      <h2 className="section-title gradient-text">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
