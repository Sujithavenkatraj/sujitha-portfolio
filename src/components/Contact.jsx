import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "../data/portfolioData";

const contactItems = [
  { icon: FiMail, label: "Email", value: "sujitha@example.com", href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: "Phone", value: "+91 98765 43210", href: `tel:${personalInfo.phone}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/sujithav", href: personalInfo.linkedin },
  { icon: FiGithub, label: "GitHub", value: "github.com/sujithav", href: personalInfo.github },
  { icon: FiMapPin, label: "Location", value: personalInfo.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send (wire up to EmailJS / Formspree in production)
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-padding">
        <SectionHeader
          tag="09 / Contact"
          title="Get In Touch"
          subtitle="Have an opportunity or just want to chat? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl text-gray-800 dark:text-white mb-3">
              Let's work together
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-sm">
              I'm actively looking for internships and entry-level roles in AI, data science, and software development.
              If you have an interesting opportunity or project, let's connect!
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-3 rounded-xl glass text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-600 dark:text-gray-300">Available for internships — <span className="text-green-400 font-medium">immediate start</span></span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass card space-y-5"
          >
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
              { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">{label}</label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary-400/60 transition-colors text-sm"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about the opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary-400/60 transition-colors text-sm resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || sent}
              whileTap={{ scale: 0.97 }}
              className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sent ? (
                <><FiCheck /> Message Sent!</>
              ) : loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </motion.button>

            <p className="text-xs text-gray-400 text-center">
              I'll respond within 24 hours. You can also reach me directly on LinkedIn.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
