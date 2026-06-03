import self from "../img/ak1.png";
import melolem from "../img/melolem.png";

export let colors = [
  "rgb(0,255,164)",
  "rgb(166,104,255)",
  "rgb(255,153,51)",
  "rgb(19,136,8)",
];

export const info = {
  firstName: "Akshaykumar",
  lastName: "Nayee",
  initials: "AK",
  linkedin: "https://www.linkedin.com/in/akshaynayee1/",
  instagram: "https://www.instagram.com/aakkii01",
  github: "https://github.com/Nayee001",

  position: [
    "Senior Front-End Engineer",
    "Angular Developer",
    "UI Engineer",
    "TypeScript Developer",
  ],

  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "🌍",
      text: "Based in the U.S.",
    },
    {
      emoji: "💻",
      text: "Senior Front-End Engineer",
    },
    {
      emoji: "🎓",
      text: "Master’s in Software Engineering",
    },
    {
      emoji: "⚡",
      text: "Angular | TypeScript | RxJS | NgRx",
    },
    {
      emoji: "📧",
      text: "akshaynayee2@gmail.com",
    },
  ],

  socials: [
    {
      link: "https://www.instagram.com/aakkii01",
      icon: "fa fa-instagram",
      label: "Instagram",
    },
    {
      link: "https://github.com/Nayee001",
      icon: "fa fa-github",
      label: "GitHub",
    },
    {
      link: "https://www.linkedin.com/in/akshaynayee1/",
      icon: "fa fa-linkedin",
      label: "LinkedIn",
    },
  ],

  bio:
    "Hi, I'm Akshaykumar Nayee! I'm a Front-End Software Engineer with 5+ years of experience building scalable enterprise web applications using Angular, TypeScript, RxJS, NgRx, and modern UI architectures. I specialize in developing responsive user interfaces, reusable component libraries, real-time dashboards, Nx monorepo solutions, and high-performance applications. I enjoy transforming complex business requirements into intuitive, maintainable, and business-driven front-end solutions.",

  skills: {
    proficientWith: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "NgRx",
      "Nx Workspace",
      "Ionic Framework",
      "Angular Material",
      "HTML5",
      "CSS3",
      "SCSS",
      "Bootstrap",
      "Responsive Web Design",
      "REST API Integration",
      "Reactive Forms",
      "Route Guards",
      "Lazy Loading",
      "Component Libraries",
      "Monorepo Architecture",
      "Git",
    ],

    exposedTo: [
      "Micro Frontends",
      "Design Systems",
      "WebSockets",
      "GraphQL",
      "Node.js",
      "Java Spring Boot",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },

  portfolio: [
    {
      title: "Enterprise Angular Dashboard",
      live: "https://www.melolem.com/",
      image: melolem,
    },
  ],
};
