// ─── PERSONAL INFO ────────────────────────────────────────────────
export const personalInfo = {
  name: "Sujitha V",
  role: "Aspiring AI Engineer & Data Scientist",
  tagline: "Building intelligent solutions through Artificial Intelligence, Machine Learning, and Full-Stack Development.",
  email: "sujivenkat36@gmail.com",         
  phone: "+91 908706021",              
  linkedin: "https://www.linkedin.com/in/sujitha-venkatraj-979a08190/", 
  github: "https://github.com/Sujithavenkatraj",          
  location: "Tamil Nadu, India",
  resumeUrl: "/Sujitha_Resume_AI_emchanged.pdf",
  profilePhoto: "/profile pic.png",
  bio: `I am a passionate and driven Artificial Intelligence and Data Science undergraduate with a strong interest in building innovative, data-driven solutions. I enjoy solving real-world problems using Artificial Intelligence, Machine Learning, Data Analytics, and Web Development technologies.

I have hands-on experience in developing projects involving machine learning models, data analysis, and full-stack applications. I am a continuous learner who actively explores emerging technologies and strives to create meaningful solutions that positively impact society.

I believe in combining technical skills with creativity and problem-solving to deliver efficient and scalable solutions.`,
  careerObjective: `Aspiring AI & Data Science Engineer | Machine Learning Enthusiast | Problem Solver

Passionate about leveraging Artificial Intelligence, Data Science, and technology to build innovative solutions that solve real-world challenges and create meaningful impact.`,
};

// ─── SKILLS ───────────────────────────────────────────────────────
export const skillsData = {
  languages: [
    { name: "Python", level: 90, icon: "SiPython" },
    { name: "Java", level: 75, icon: "SiJava" },
    { name: "SQL", level: 82, icon: "SiMysql" },
    { name: "JavaScript", level: 72, icon: "SiJavascript" },
  ],

  technologies: [
    { name: "Machine Learning", level: 85, icon: "SiTensorflow" },
    { name: "Data Science", level: 83, icon: "SiPandas" },
    { name: "React.js", level: 75, icon: "SiReact" },
    { name: "HTML & CSS", level: 88, icon: "SiHtml5" },
    { name: "Tailwind CSS", level: 80, icon: "SiTailwindcss" },
    { name: "Git & GitHub", level: 82, icon: "SiGit" },
  ],

  tools: [
    { name: "Jupyter Notebook", level: 90, icon: "SiJupyter" },
    { name: "VS Code", level: 92, icon: "SiVisualstudiocode" },
    { name: "Power BI", level: 70, icon: "SiPowerbi" },
    { name: "MySQL", level: 80, icon: "SiMysql" },
    { name: "Google Colab", level: 90, icon: "SiGooglecolab" },
  ],
};

// ─── PROJECTS ────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Abyss – AI Resume & Portfolio Builder",
    description:
      "An AI-powered platform for ATS-optimized resume creation and portfolio generation. Features include keyword optimization, bias detection, AI-assisted content suggestions, PDF export, QR-code sharing, and domain-specific resume customization.",
    image: "/project-images/abyss.jpg",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Generative AI",
      "PDF Export"
    ],
    category: "web",
    github: "https://github.com/Sujithavenkatraj/abyss-Resume-Builder",
    demo: "",
    featured: true,
  },

  {
    id: 2,
    title: "MemoDoc",
    description:
      "A full-stack web application designed to automate event report generation for colleges. Reduced manual report-writing time from nearly two hours to under ten minutes through dynamic document generation and PDF export functionality.",
    image: "/project-images/memodoc.jpg",
    tags: [
      "React.js",
      "Django",
      "MongoDB",
      "PDF Export"
    ],
    category: "web",
    github: "https://github.com/Sujithavenkatraj/MemoDoc",
    demo: "https://drive.google.com/file/d/1PiQd9B8SX-jBLtRKqyW76IQmowWWB_oX/view?usp=sharing",
    featured: true,
  },

  {
    id: 3,
    title: "Lunara – AI Powered Women's Wellness Platform",
    description:
      "An AI-powered wellness application built using OutSystems Developer Cloud featuring an AI chatbot, menstrual health tracking, mood analysis, and symptom monitoring using GPT and Claude integration.",
    image: "https://drive.google.com/file/d/1nbfLD7mSvSijh44jEBRrVs6ASDvGiupR/view?usp=sharing",
    tags: [
      "OutSystems",
      "Generative AI",
      "AI Chatbot",
      "Healthcare"
    ],
    category: "ml",
    github: "",
    demo: "https://drive.google.com/file/d/19CDzsMOGqidH_5UvQxXrWFXGeW-MYAQ0/view?usp=sharing",
    featured: true,
  },

  {
    id: 4,
    title: "Patient Record Transfer (PRT)",
    description:
      "A secure healthcare record-sharing platform that enables seamless transfer of patient records across hospitals using Aadhaar-based identification and REST APIs. Awarded Runner-Up at the Code Ignite Hackathon.",
    image: "/project-images/prt.jpg",
    tags: [
      "Flutter",
      "REST API",
      "MySQL",
      "Healthcare"
    ],
    category: "web",
    github: "",
    demo: "",
    featured: true,
  },
];

// ─── CERTIFICATIONS ──────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: "Foundations: Data, Data, Everywhere",
    org: "Google | Coursera",
    date: "2025",
    image: "/certificates/google-data.jpg",
    credentialUrl: "",
  },
  {
    id: 2,
    title: "Artificial Intelligence Expert",
    org: "Udemy",
    date: "2025",
    image: "/certificates/ai-expert.jpg",
    credentialUrl: "",
  },
  {
    id: 3,
    title: "Data Analytics and Visualization with Python",
    org: "SRM Institute of Science and Technology",
    date: "2025",
    image: "/certificates/data-analytics-python.jpg",
    credentialUrl: "",
  },
  {
    id: 4,
    title: "Python Programming",
    org: "MSME PPDC",
    date: "2024",
    image: "/certificates/python.jpg",
    credentialUrl: "",
  },
  {
    id: 5,
    title: "Java Programming",
    org: "MSME PPDC",
    date: "2024",
    image: "/certificates/java.jpg",
    credentialUrl: "",
  },
  {
    id: 6,
    title: "Computer Hardware & Networking",
    org: "MSME PPDC",
    date: "2024",
    image: "/certificates/hardware-networking.jpg",
    credentialUrl: "",
  },
  {
    id: 7,
    title: "Start Writing Prompts Like a Pro",
    org: "Google | Coursera",
    date: "2025",
    image: "/certificates/prompt-engineering.jpg",
    credentialUrl: "",
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: "1st Place – Project Expo 2025",
    description:
      "Won First Place at Project Expo 2025 conducted by SRM Madurai College of Engineering and Technology for developing an innovative Hand Gesture Recognition System.",
    date: "2025",
    image: "https://drive.google.com/file/d/116b2neBpvNcSs5XpgkrYni6lJyeRVLSx/view?usp=sharing",
    category: "competition",
  },

  {
    id: 2,
    title: "Runner-Up – Code Ignite Hackathon",
    description:
      "Secured Runner-Up position and received a cash prize of ₹5,000 for developing the Patient Record Transfer (PRT) healthcare platform for secure inter-hospital record sharing.",
    date: "2026",
    image: "https://drive.google.com/file/d/1XQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZ/view?usp=sharing",
    category: "hackathon",
  },

  {
    id: 3,
    title: "AWS SuperHack 2025 Finalist",
    description:
      "Selected as a National Finalist among 5,000+ participants in AWS SuperHack 2025 for demonstrating innovative problem-solving and technical excellence.",
    date: "2025",
    image: "/awards/aws-superhack.jpg",
    category: "hackathon",
  },

  {
    id: 4,
    title: "IBM Naan Mudhalvan Hackathon Finalist",
    description:
      "Recognized as a Finalist among 10,000+ students in the IBM Naan Mudhalvan Hackathon for building innovative technology solutions.",
    date: "2025",
    image: "/awards/ibm-hackathon.jpg",
    category: "hackathon",
  },

  {
    id: 5,
    title: "Top 5% of Diploma Cohort",
    description:
      "Graduated with 91.4% in Diploma in Computer Engineering and secured a position among the Top 5% of the graduating cohort.",
    date: "2024",
    image: "/awards/academic-excellence.jpg",
    category: "academic",
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    type: "internship",
    title: "Data Analyst",
    org: "Adhoc Softwares",
    duration: "Dec 2024 – Aug 2025",
    description:
      "Analyzed structured datasets containing over 50,000 records using Python, Pandas, NumPy, and SQL to identify business trends and operational bottlenecks. Built interactive dashboards that enabled stakeholders to make data-driven decisions 40% faster.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Analysis",
      "Data Visualization"
    ],
  },

  {
    id: 2,
    type: "internship",
    title: "Python Developer Intern",
    org: "Tarcin Robotics",
    duration: "Feb 2025",
    description:
      "Developed Python automation scripts that reduced manual data-processing effort by 60%. Integrated third-party REST APIs and contributed to backend development and collaborative Git workflows.",
    skills: [
      "Python",
      "REST API",
      "Git",
      "Automation",
      "Backend Development"
    ],
  },

  {
    id: 3,
    type: "internship",
    title: "Frontend Development Intern",
    org: "Marcello Tech",
    duration: "Oct 2024",
    description:
      "Implemented responsive and accessible user interface components while following modern frontend development practices and performance optimization techniques.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development"
    ],
  },

  {
    id: 4,
    type: "internship",
    title: "Next Generation Data Networking Intern",
    org: "BSNL – Rajiv Gandhi Memorial Telecom Training Centre",
    duration: "May 2023 – Jun 2023",
    description:
      "Received hands-on training in networking fundamentals, routing, switching, IP addressing, and communication protocols through practical laboratory sessions.",
    skills: [
      "Networking",
      "OSI Model",
      "Routing",
      "Switching",
      "IP Addressing"
    ],
  },

  {
    id: 5,
    type: "internship",
    title: "IBM Cognos Analytics Intern",
    org: "Adroit Technologies Innovative Solutions Pvt. Ltd.",
    duration: "Virtual Internship",
    description:
      "Developed interactive dashboards and reports using IBM Cognos Analytics and gained practical experience in enterprise business intelligence, data modelling, and reporting pipelines.",
    skills: [
      "IBM Cognos",
      "Business Intelligence",
      "Data Visualization",
      "Data Modelling"
    ],
  },
];

// ─── EDUCATION ──────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    college: "SRM Madurai College of Engineering and Technology",
    cgpa: "8.51 / 10",
    duration: "2024 – 2027",
    location: "Sivagangai, Tamil Nadu, India",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Structures",
      "Database Management Systems"
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    college: "Government Polytechnic College for Women",
    cgpa: "91.4%",
    duration: "2021 – 2024",
    location: "Madurai, Tamil Nadu, India",
    highlights: [
      "Top 5% of Cohort",
      "Strong foundation in programming and computer fundamentals"
    ],
  },
];

// ─── STATS (Hero counters) ───────────────────────────────────────
export const stats = [
  { label: "Projects Completed", value: 8 },
  { label: "Certifications Earned", value: 7 },
  { label: "Internships Completed", value: 5 },
  { label: "Awards & Finalist Titles", value: 4 },
];
