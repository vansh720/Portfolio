export const personalInfo = {
  name: "Vansh Narula",
  title: "Blending Intelligence with Interface",
  subtitle: "Crafting Digital Experiences",
  description: "AI & DS Enthusiast | Frontend Developer | DSA Lover Crafting smart, seamless, and scalable digital experiences.Passionate about creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with creative vision to bring ideas to life.",
  email: "narulavansh430@gmail.com",
  phone: "+91 7082086751",
  location: "Ambala Haryana, India",
  socialLinks: {
    github: "https://github.com/vansh720",
    linkedin: "https://www.linkedin.com/in/vansh-narula-033bb324a/",
    Instagram: "https://www.instagram.com/vanshnarula30/",
  }
};

export const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "DSA", level: 70, category: "Core CS" },
  { name: "C++", level: 80, category: "Core CS" },
  { name: "SQL", level: 90, category: "Databases" },
  { name: "MongoDB", level: 70, category: "Databases" },
  { name: "TailwindCSS", level: 90, category: "Frameworks" },
  { name: "Express.js", level: 85, category: "Frameworks" },
];

export const projects = [
  {
    id: 1,
    title: "Blog Platform ByteCraft",
    description: "Built a secure SaaS blog platform with React and Appwrite, featuring RBAC, rich text editing, and image uploads via TinyMCE and Cloudinary.",
    image: "./images/blog.jpg",
    technologies: ["React", "TailwindCSS", "Appwrite"],
    liveUrl: "https://byte-craft-teal.vercel.app/",
    githubUrl: "https://github.com/vansh720/ByteCraft",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexjohnson/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This portfolio website showcases my journey as a B.Tech student in Artificial Intelligence and Data Science with a strong interest in DSA, frontend development, and intelligent systems. Built using React.js and styled with Tailwind CSS, the site reflects my design sense, technical skills, and attention to user experience.",
    image: "./images/portfoliopic.png",
    technologies: ["ReactJs", "TailwindCSS","javaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "AutoZenith",
    description: "A basic car showroom website built using HTML, CSS, and JavaScript to strengthen foundational web development skills.",
    image: "./images/autozenith.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://auto-zenith.vercel.app/",
    githubUrl: "https://github.com/vansh720/AutoZenith",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    Institute: "Chandigarh Group of Colleges,Landran",
    position: "Btech Artificial Intelligence and Data Science",
    duration: "2022 - 2026",
    description: "Pursuing a comprehensive and future-focused engineering degree in Artificial Intelligence and Data Science, with a strong foundation in machine learning, deep learning, data mining, statistics, and software development. The program emphasizes both theoretical knowledge and practical application, preparing me to solve real-world problems using data-driven techniques and intelligent systems.",
    achievements: [
      "Consistently maintained a good academic record with a CGPA of 8.12",
      "Participated in technical fests, workshops, and inter-college coding competitions",
      "Participated in smart india hackathon 2023 and 2024, showcasing problem-solving skills and innovative thinking",
    ],
  },
  {
    id: 2,
    Institute: "Police DAV Public School",
    position: "12th Grade",
    duration: "2022",
    description: "Completed my senior secondary education with a focus on Science stream, where I developed a deeper understanding of analytical concepts, critical thinking, and problem-solving—especially in subjects that laid the foundation for my current journey in Artificial Intelligence and Data Science.",
    achievements: [
      "Secured 83.6% in CBSE Board Exams",
      "Participated in inter-house and inter-school competitions including debates, quizzes, and technical events",
      "Served as a responsible team member/leader in various school events and group projects",
    ],
  },
  {
    id: 3,
    Institute: "Police DAV Public School",
    position: "10th Grade",
    duration: "2020",
    description: "Completed my secondary education with a strong academic record and active participation in school activities. Developed a solid foundation in core subjects like Mathematics, Science, and English, which sparked my interest in technology and problem-solving.",
    achievements: [
      "Scored 78% in the CBSE Board Examinations",
      "Participated in inter-school debate and quiz competitions",
      "Actively participated in school drama events, showcasing creativity, stage confidence, and strong team collaboration during annual functions and inter-school competitions.",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Vishal Kumar",
    position: "College friend and fellow developer",
    content: "Vansh is one of the most dedicated and curious people I know — always eager to learn, solve problems, and build something meaningful.",
    avatar: "./images/vishal.jpg",
  },
  {
    id: 2,
    name: "Sidhant Sharma",
    position: "College friend and fellow developer",
    content: "Working with Vansh is always inspiring — his ability to combine logic with creativity makes him stand out as both a developer and a problem solver.",
    avatar: "./images/sidhant.jpg",
  },
  {
    id: 3,
    name: "Deepak Takshak",
    position: "College friend and fellow developer",
    content: "Vansh has a sharp mind for coding and a great eye for design — he’s the go-to person when you want things done right and on time.",
    avatar: "./images/deepak.jpg",
  },
];