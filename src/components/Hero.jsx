import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { personalInfo, stats } from "../data/portfolioData";

const floatingOrbs = [
  { size: 400, x: "70%", y: "10%", delay: 0 },
  { size: 300, x: "5%", y: "60%", delay: 2 },
  { size: 200, x: "80%", y: "70%", delay: 4 },
];

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-900">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-100" />

      {/* Gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          className="absolute rounded-full blur-3xl opacity-20 dark:opacity-30 pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: i % 2 === 0
              ? "radial-gradient(circle, #4f46e5, #7c3aed)"
              : "radial-gradient(circle, #8b5cf6, #4f46e5)",
          }}
        />
      ))}

      <div className="section-padding relative z-10 pt-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left — text content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-400 text-sm font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to Internships & Entry-Level Roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text text-glow">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 font-display font-medium min-h-[2em]"
          >
            <TypeAnimation
              sequence={[
                "AI & Data Science Engineer",
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Full-Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href={personalInfo.resumeUrl} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline"
            >
              <FiMail /> Contact Me
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline"
            >
              View Projects
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                  {inView ? <CountUp end={stat.value} duration={2.5} suffix="+" /> : "0+"}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-accent-400/20"
            />

            {/* Gradient border wrapper */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 shadow-2xl shadow-primary-500/30">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-800">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl font-display font-bold text-primary-400">SV</div>`;
                  }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-2xl text-sm font-medium text-white shadow-xl"
            >
              
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -left-4 glass px-4 py-2 rounded-2xl text-sm font-medium text-white shadow-xl"
            >
              
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600"
      >
        <FiArrowDown size={24} />
      </motion.div>
    </section>
  );
}
