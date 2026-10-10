
const screenshotFiles = import.meta.glob(
  "../assets/projects/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" }
);

export const getProjectScreenshot = (filename) =>
  screenshotFiles[`../assets/projects/${filename}`] ?? null;

export const projects = [
  {
    id: "innovest",
    title: "Innovest",
    label: "Startup investment platform",
    description:
      "A full-stack platform connecting entrepreneurs and investors through startup pitches, fundraising requests, profiles, and real-time messaging.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.IO"],
    screenshot: "innovest.png",
    visual: "finance",
    category: "featured",
    githubUrl: "https://github.com/SadikRahman14/Innovest",
    liveUrl: "https://innovest-site.vercel.app/",
  },
  {
    id: "vien",
    title: "Vien",
    label: "E-commerce platform",
    description:
      "A full-stack shopping experience with product browsing, checkout, and a dedicated admin workspace for managing the store.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    screenshot: "vien.png",
    visual: "commerce",
    category: "featured",
    githubUrl: "https://github.com/SadikRahman14/Vien",
    liveUrl: "https://vien-sell.vercel.app/",
  },
  {
    id: "zero-gravity",
    title: "Zero Gravity",
    label: "3D space racing game",
    description:
      "A space-set browser racing game with custom-built tracks, a challenging AI rival, nitro boosts, and a two-player mode.",
    tech: ["Three.js", "JavaScript", "WebGL"],
    screenshot: "zero-gravity.png",
    visual: "space",
    category: "live",
    githubUrl: "https://github.com/SadikRahman14/Zero-Gravity",
    liveUrl: "https://zero-gravity-nine.vercel.app/",
  },
  {
    id: "linea",
    title: "Linea",
    label: "Real-time chat app",
    description:
      "A real-time messaging application with authentication, conversations, channel management, and file sharing.",
    tech: ["React", "Zustand", "Node.js", "MongoDB", "Socket.IO"],
    screenshot: "linea.png",
    visual: "chat",
    category: "live",
    githubUrl: "https://github.com/SadikRahman14/Linea",
    liveUrl: "https://linea-dep.onrender.com/auth",
  },
  {
    id: "transcribecode",
    title: "TranscribeCode",
    label: "Web utility",
    description:
      "A clone of typemonkey but for code writing.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    screenshot: "transcribecode.jpg",
    visual: "tool",
    category: "live",
    githubUrl: "https://github.com/SadikRahman14/Transcribe", 
    liveUrl: "https://transcribecode.netlify.app/",
  },
  {
    id: "world-cup-predictor",
    title: "World Cup 2026 Predictor",
    label: "Interactive football experience",
    description:
      "An predictor and bracket image generator specially for FIFA World Cup 2026",
    tech: ["React", "Tailwind CSS", "Netlify"],
    screenshot: "world-cup-predictor.png",
    visual: "sports",
    category: "live",
    githubUrl: "https://github.com/SadikRahman14/wc-2026-predictor",
    liveUrl: "https://wcup2026predictor.netlify.app/",
  },
  {
    id: "shanjeeban",
    title: "Shanjeeban",
    label: "Flutter mobile app",
    description:
      "A mobile health and donor-coordination app bringing together requests, notifications, and secure user access.",
    tech: ["Flutter", "Firebase", "Dart"],
    screenshot: "shanjeeban.png",
    visual: "mobile",
    category: "engineering",
    githubUrl: "https://github.com/SadikRahman14/Shanjeeban",
    liveUrl: null,
  },
  {
    id: "beacon",
    title: "Beacon",
    label: "ASP.NET web application",
    description:
      "An incident and asset-tracking web application with audit history, notifications, and role-based permissions.",
    tech: ["ASP.NET Core", "C#", ".NET"],
    screenshot: "beacon.png",
    visual: "enterprise",
    category: "engineering",
    githubUrl: "https://github.com/SadikRahman14/Beacon",
    liveUrl: null,
  },
  
  // ==========================================
  // CODEBASES & LEARNING NOTES
  // ==========================================

  {
    id: "nexora",
    title: "Nexora",
    label: "Backend codebase",
    description:
      "A Node.js and Express backend learning project exploring JWT authentication, MongoDB data modeling, uploads, likes, comments, playlists, and API testing.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Postman",
    ],
    visual: "backend",
    category: "repository",
    githubUrl: "https://github.com/SadikRahman14/Nexora",
    liveUrl: null,
  },
  {
    id: "approach-react-js",
    title: "ApproachReactJS",
    label: "React learning notes",
    description:
      "A hands-on React reference covering hooks, routing, Context API, Redux Toolkit, and mini-projects built while learning.",
    tech: [
      "React",
      "Hooks",
      "React Router",
      "Redux Toolkit",
    ],
    visual: "react",
    category: "repository",
    githubUrl:
      "https://github.com/SadikRahman14/ApproachReactJS",
    liveUrl: null,
  },
  {
    id: "approach-dsa",
    title: "ApproachDSA",
    label: "Algorithms & problem solving",
    description:
      "A Repo full of leetcode problems solved myself.",
    tech: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
    visual: "algorithms",
    category: "repository",
    githubUrl: "https://github.com/SadikRahman14/ApproachDSA",
    
    liveUrl: null,
  },

];

export const featuredProjects = projects.filter((p) => p.category === "featured");
export const liveProjects = projects.filter((p) => p.category === "live");
export const engineeringProjects = projects.filter((p) => p.category === "engineering");
// Change only this ID whenever you want a new Latest Project.
export const LATEST_PROJECT_ID = "zero-gravity";

export const latestProject =
  projects.find((project) => project.id === LATEST_PROJECT_ID) ??
  projects[0];

export const repositoryProjects = projects.filter(
  (project) => project.category === "repository"
);