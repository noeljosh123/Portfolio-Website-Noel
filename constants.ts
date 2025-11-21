import { Project, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Noel Josh Casin",
  title: "Computer Scientist & Project Manager",
  email: "noeljoshcasin@gmail.com",
  phone: "0908-295-1640",
  location: "Mandaluyong, Philippines",
  socials: {
    linkedin: "https://www.linkedin.com/in/noel-josh-casin-aabb9538a/",
    github: "https://github.com/noeljosh123",
  }
};

export const EDUCATION: Education[] = [
  {
    school: "FEU Institute of Technology",
    location: "Manila, Philippines",
    degree: "Bachelor of Science in Computer Science",
    date: "Expected 2026",
    details: [
      "Thesis: RoaDry - Real-Time Flood Monitoring & Safe Route Optimization",
      "Relevant Coursework: OOP (Python, C++, Java), Data Structures, Algorithms, Machine Learning, Web Dev, Mobile App Dev."
    ]
  },
  {
    school: "San Felipe Neri Catholic School",
    location: "Mandaluyong, Philippines",
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    date: "2022",
    details: []
  }
];

export const PROJECTS: Project[] = [
  {
    id: "roadry",
    title: "RoaDry: Flood Monitoring & Route Optimization",
    role: "Project Manager & Lead Developer",
    date: "2024 – 2025",
    description: "A comprehensive mobile solution for Metro Manila utilizing crowdsourcing, web scraping, and graph-based algorithms to provide real-time flood data and safe routes.",
    tags: ["Dart", "Flutter", "Firebase", "Azure Vision AI", "Python (NLP)", "Dijkstra's Algo"],
    image: "https://picsum.photos/seed/roadry/800/600",
    featured: true,
    repoUrl: "https://github.com/yourusername/roadry", // Replace with actual URL
    demoUrl: "https://roadry-app.com", // Replace with actual URL
    achievements: [
      "Led a multidisciplinary team through full development lifecycle.",
      "Integrated Azure Vision AI for flood detection image processing.",
      "Developed NLP web scrapers to gather verified news data.",
      "Implemented Dijkstra’s algorithm for safe route calculation."
    ]
  },
  {
    id: "kwikslot",
    title: "KwikSlot: Cinema Booking System",
    role: "Full-Stack Developer",
    date: "2025",
    description: "A modern full-stack cinema booking platform featuring a complete booking flow, interactive seat mapping, and a comprehensive admin dashboard for real-time system management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Context API"],
    image: "https://picsum.photos/seed/kwikslot/800/600",
    featured: true,
    repoUrl: "https://github.com/yourusername/kwikslot", // Replace with actual URL
    demoUrl: "https://kwikslot-demo.vercel.app", // Replace with actual URL
    achievements: [
      "Implemented interactive seat mapping (8x10 grid) with VIP designation and real-time selection.",
      "Built a comprehensive admin dashboard with real-time metrics for bookings, revenue, and users.",
      "Designed a mobile-first responsive UI with dark theme aesthetics and smooth animations.",
      "Engineered robust state management using React Context API for auth, booking, and favorites."
    ]
  },
  {
    id: "fitcal",
    title: "FITCAL: Health Management App",
    role: "Lead Developer",
    date: "2024",
    description: "A web-based fitness tracking application integrating BMI calculation, calorie tracking, and workout planning.",
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    image: "https://picsum.photos/seed/fitcal/800/600",
    featured: true,
    repoUrl: "https://github.com/yourusername/fitcal", // Replace with actual URL
    demoUrl: "#",
    achievements: [
      "Designed secure, responsive user interface.",
      "Implemented full auth system and session management.",
      "Built core modules: PR Calculator, Progress Tracker, Workout Planner."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "Dart", "PHP", "JavaScript", "SQL", "TypeScript"]
  },
  {
    title: "Web & Mobile",
    skills: ["React", "HTML", "CSS", "Tailwind", "Flutter", "Mobile Programming", "Vite"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Firebase", "Git", "Azure Vision AI", "VS Code", "MySQL"]
  },
  {
    title: "Languages",
    skills: ["English (Fluent)", "Filipino (Fluent)", "Mandarin (Basic/Pinyin)"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Civil Service Eligibility", level: "Professional Level" },
  { name: "DevNet Associate Course" },
  { name: "PMI Project Management" },
  { name: "ITS Python" },
  { name: "CCNA: Introduction to Network" }
];