import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-display font-bold gradient-text"
        >
          Sujitha V
        </motion.div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-gray-500">
          {["About","Skills","Projects","Experience","Education","Achievements","Contact"].map((item) => (
            <button
              key={item}
              onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-1 text-xs text-gray-600">
          <p className="flex items-center gap-1.5">
            Designed & Developed by{" "}
            <span className="gradient-text font-semibold">Sujitha V</span>
            with <FiHeart size={12} className="text-red-400" />
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
