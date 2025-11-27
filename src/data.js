// src/data.js

export const profile = {
  name: "Akeyla Shareef",
  role: "Full Stack Developer",
  location: "Montreal, QC",
  // UPDATE THIS PATH ONCE YOU ADD YOUR PHOTO
  coverImage: "bg-gradient-to-b from-[#3e523f] to-[#121212]", 
};

// ICONS
export const techIcons = {
  // Languages
  "Swift": "https://cdn.simpleicons.org/swift/white",
  "C#": "https://cdn.simpleicons.org/dotnet/white", // Updated
  "Python": "https://cdn.simpleicons.org/python/white",
  "JavaScript": "https://cdn.simpleicons.org/javascript/white",
  "HTML": "https://cdn.simpleicons.org/html5/white",
  "CSS": "https://cdn.simpleicons.org/css/white",
  "SQL": "https://cdn.simpleicons.org/postgresql/white",
  
  // Frameworks
  "React": "https://cdn.simpleicons.org/react/white",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/white",
  "SwiftUI": "https://cdn.simpleicons.org/swift/white",
  "Android": "https://cdn.simpleicons.org/android/white",
  "JSP": "https://cdn.simpleicons.org/javascript/white",
  
  // Tools
  "Firebase": "https://cdn.simpleicons.org/firebase/white",
  "AWS": "https://cdn.simpleicons.org/Cloudflare/white",
  "MySQL": "https://cdn.simpleicons.org/mysql/white",
  "OpenAI API": "https://cdn.simpleicons.org/openai/white",
  "Docker": "https://cdn.simpleicons.org/docker/white",
  "Git": "https://cdn.simpleicons.org/git/white",
  "Redis": "https://cdn.simpleicons.org/redis/white",

  // Concepts
  "MVVM": "https://cdn.simpleicons.org/swift/white", 
  "Material Design": "https://cdn.simpleicons.org/materialdesign/white",
  "Servlets": "https://cdn.simpleicons.org/openjdk/white",
};

// HOME PAGE SKILLS
export const skills = [
  { id: 1, name: "React", icon: techIcons["React"] },
  { id: 2, name: "JavaScript", icon: techIcons["JavaScript"] },
  { id: 3, name: "Swift", icon: techIcons["Swift"] },
  { id: 4, name: "AWS", icon: techIcons["AWS"] },
];

// PROJECTS
export const projects = [
  { 
    id: 1, 
    title: "Relay", 
    tagline: "The 'Hinge' for Recruiters",
    type: "iOS • Swift", 
    year: "2025", 
    // Example of how your path will look later:
    img: "bg-gray-800", 
    description: "An iOS app that modernizes career fairs by replacing paper resumes with digital profiles. Candidates join digital queues via a 6-digit code, while recruiters review applicants using a rapid 'swipe-left/right' interface to streamline hiring decisions.",
    tech: ["iOS", "Swift", "SwiftUI", "Firebase", "MVVM"]
  },
  { 
    id: 2, 
    title: "Munch", 
    tagline: "AI-Powered Cooking Assistant",
    type: "React • AI", 
    year: "2024", 
    img: "bg-green-900", 
    description: "A smart recipe generator that curates meal options based on available ingredients, dietary restrictions, and allergies. Features a built-in health meter and cooking timer.",
    tech: ["React", "OpenAI API", "Node.js", "CSS"]
  },
  { 
    id: 3, 
    title: "TutorVerse", 
    tagline: "On-Demand Tutor Booking",
    type: "Android • Java", 
    year: "2025", 
    img: "bg-blue-900", 
    description: "A native Android application connecting students with tutors. Tutors can manage availability via a color-coded schedule grid, while students can book sessions and chat in real-time.",
    tech: ["Android", "Java", "Firebase", "Material Design"]
  },
  { 
    id: 4, 
    title: "Inventory Manager", 
    tagline: "Web-Based Stock System",
    type: "Java • MySQL", 
    year: "2024", 
    img: "bg-purple-900", 
    description: "A robust web application for tracking product stock, managing supplier relationships, and processing orders.",
    tech: ["Java", "JSP", "Servlets", "MySQL"]
  },
];