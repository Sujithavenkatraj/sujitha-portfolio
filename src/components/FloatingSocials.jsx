import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function FloatingSocials() {
  return (
    <div className="fixed left-4 bottom-1/2 translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {socials.map(({ icon: Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 + i * 0.1 }}
          whileHover={{ scale: 1.2, x: 4 }}
          className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300"
        >
          <Icon size={18} />
        </motion.a>
      ))}
      <div className="w-px h-16 bg-gradient-to-b from-primary-400 to-transparent mx-auto mt-1" />
    </div>
  );
}
