import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Contractify",
    description:
      "Developed Contractify, a contract management platform that efficiently handles 1000+ contracts using Next.js, Node.js, and MongoDB. Implemented cookie-based authentication to secure user sessions and prevent unauthorized access. Integrated real-time notifications, which improved user engagement and reduced contract response time by 40%.",
    tools: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "RestAPI",
      "Tailwind",
      "Express",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/BuildingProjects/Contractify",
    demo: "https://contractify-frontend.onrender.com/",
    image: crefin,
  },
  {
    id: 2,
    name: "IIITBH Notes App",
    description:
      "Created a resource-sharing platform for IIIT Bhagalpur students using ReactJS, Node.js, Express, and Firebase. The app organizes 200+ resources, helping 300+ students across batches. Reduced resource search time by 80% through efficient categorization and design.",
    tools: ["ReactJS", "Node.js", "Firebase", "Express", "CSS"],
    role: "Full Stack Developer",
    code: "https://github.com/BuildingProjects/iiitbh-notes",
    demo: "https://iiitbhnotes.netlify.app/",
    image: travel,
  },
  {
    id: 3,
    name: "Talk-A-Tive",
    description:
      "Built a real-time chat application supporting over 500 concurrent users using Node.js, MongoDB, and Socket.io. Developed interactive frontend features like live chat, streamlined UI, and efficient message rendering. Backend designed for scalability and efficient real-time communication.",
    tools: ["ReactJS", "Node.js", "MongoDB", "Socket.io", "CSS"],
    role: "Full Stack Developer",
    code: "https://github.com/Roshu2003/Talk-A-Tive",
    demo: "",
    image: ayla,
  },
  {
    id: 4,
    name: "PYC Coding Club Platform (Mentorship & Events)",
    description:
      "As the Lead of the PYC Coding Club, mentored 150+ members and organized sessions on competitive programming and DSA using C/C++. Designed and maintained interactive portals for problem-solving, coding events, and learning resources.",
    tools: ["C++", "DSA", "Git", "GitHub", "HTML", "CSS", "JS"],
    role: "Mentor & Platform Developer",
    code: "",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
