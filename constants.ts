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
    challenge: "Metro Manila faces frequent urban flooding, yet existing navigation apps lack real-time, street-level flood data. Commuters are often left stranded or directed into hazardous areas during heavy rains.",
    solution: "RoaDry integrates community-driven reports with automated news scraping and Azure Vision AI to verify flood incidents. It uses a modified Dijkstra’s algorithm to calculate routes that actively avoid flooded nodes.",
    features: [
      "Crowdsourced flood reporting with geolocation",
      "AI-powered image verification using Azure Vision",
      "NLP-based web scraping for news validation",
      "Safe route calculation avoiding hazard zones",
      "Real-time push notifications for nearby alerts"
    ],
    tags: ["Dart", "Flutter", "Firebase", "Azure Vision AI", "Python (NLP)", "Dijkstra's Algo"],
    image: "https://picsum.photos/seed/roadry/800/600",
    featured: true,
    repoUrl: "https://github.com/yourusername/roadry", // Replace with actual URL
    demoUrl: "https://roadry-app.com", // Replace with actual URL
    achievements: [
      "Led a multidisciplinary team through full development lifecycle.",
      "Integrated Azure Vision AI for flood detection image processing.",
      "Developed NLP web scrapers to gather verified data from news outlets.",
      "Implemented Dijkstra’s algorithm for safe route calculation."
    ]
  },
  {
    id: "kwikslot",
    title: "KwikSlot: Cinema Booking System",
    role: "Full-Stack Developer",
    date: "2025",
    description: "A modern full-stack cinema booking platform featuring a complete booking flow, interactive seat mapping, and a comprehensive admin dashboard for real-time system management.",
    challenge: "Building a booking system requires handling complex state for seat selection, preventing double-bookings, and providing a seamless user experience across devices, all while managing real-time data.",
    solution: "KwikSlot utilizes a modular React architecture with Context API for global state management. The seat map is a dynamic grid component that handles selection logic and VIP pricing tiers efficiently.",
    features: [
      "Interactive 8x10 seat grid with VIP logic",
      "Real-time booking conflict resolution (simulation)",
      "Admin dashboard with revenue charts and user management",
      "Multi-step checkout flow with payment simulation",
      "Dark mode UI optimized for cinema context"
    ],
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
    challenge: "Fitness beginners often struggle with scattered tools for tracking nutrition, workouts, and body metrics. They need a unified, simple platform to visualize progress.",
    solution: "FITCAL provides a centralized dashboard where users can log daily meals, calculate BMI instantly, and plan weekly workout routines with a customizable schedule builder.",
    features: [
      "Automated BMI and TDEE Calculator",
      "Personal Record (PR) logger for lifts",
      "Weekly workout scheduler with drag-and-drop feel",
      "Calorie intake tracker with macro breakdown",
      "Secure user authentication and profile management"
    ],
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