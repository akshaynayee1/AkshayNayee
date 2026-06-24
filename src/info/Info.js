import resumePdf from "../pdf/Akshay.pdf";

export let colors = [
  "#7c3aed",
  "#8b5cf6",
  "#a78bfa",
  "#6d28d9",
];

export const info = {
  firstName: "Akshay",
  lastName: "Nayee",
  initials: "AK",
  linkedin: "https://www.linkedin.com/in/akshaynayee1/",
  instagram: "https://www.instagram.com/aakkii01",
  github: "https://github.com/akshaynayee1",
  resumePdf: resumePdf,

  position: [
    "AI Software Engineer",
    "Software Engineer",
    "LLM & RAG Systems Builder",
    "Full Stack Engineer",
  ],

  gradient: `-webkit-linear-gradient(135deg, ${colors[0]}, ${colors[2]})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "📍",
      text: "PA, USA",
    },
    {
      emoji: "💼",
      text: "Software Engineer @ Plaid",
    },
    {
      emoji: "🎓",
      text: "MS in Computer Science · Gannon University",
    },
    {
      emoji: "🤖",
      text: "Python · FastAPI · React · AWS · GenAI",
    },
    {
      emoji: "✉️",
      text: "akshaynayee2@gmail.com",
    },
  ],

  socials: [
    {
      link: "https://github.com/akshaynayee1",
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
    "I wrote my first line of code at 17 in a small town in Gujarat — just curious to see what would happen. That curiosity turned into a career spanning two countries, three companies, and thousands of commits. Today I'm at Plaid, building AI-driven financial infrastructure that touches millions of people. I'm obsessed with the place where intelligence meets scale: LLMs that actually work in production, distributed systems that don't break at 3am, and software that genuinely matters.",

  skills: {
    proficientWith: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Angular",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "Stripe",
      "AWS (Lambda, EC2, S3)",
      "Docker",
      "Kubernetes",
      "OpenAI GPT-4",
      "RAG Pipelines",
      "Prompt Engineering",
      "Vector Databases",
      "LLM Applications",
      "GitHub Actions",
      "GraphQL",
      "Microservices",
    ],
    exposedTo: [
      "LLaMA 3.1",
      "Claude Sonnet 4",
      "Gemini 2.0 Flash",
      "Hugging Face",
      "TensorFlow",
      "Scikit-learn",
      "MLflow",
      "Apache Spark",
      "PySpark",
      "Apache Airflow",
      "Terraform",
      "ArgoCD",
      "gRPC",
      "GCP",
      "Azure",
      "Elasticsearch",
    ],
  },

  experience: [
    {
      company: "Plaid",
      title: "Software Engineer",
      duration: "June 2025 – Present",
      location: "Remote, USA",
      bullets: [
        "Designed microservices-based backend systems with Python, FastAPI, PostgreSQL, and AWS, improving service scalability by 40% while maintaining 99.9% availability.",
        "Built AI-powered financial recommendation and analytics engines leveraging LLMs and behavioral insights, increasing recommendation relevance by 30%.",
        "Developed event-driven data pipelines handling 1M+ financial transactions monthly with sub-second response times.",
        "Optimized API performance, reducing average response latency by 45% and improving system throughput by 35%.",
        "Implemented CI/CD pipelines using GitHub Actions, Docker, Kubernetes, and AWS, reducing deployment time by 60%.",
      ],
    },
    {
      company: "Gannon University",
      title: "Graduate Research Assistant",
      duration: "Jan 2024 – May 2025",
      location: "PA, USA",
      bullets: [
        "Led development of AI-powered analytics platforms for smart energy management and IoT monitoring, processing 100,000+ sensor events daily.",
        "Designed ML models for predictive maintenance, anomaly detection, and fault classification, improving accuracy by 35%.",
        "Built real-time dashboards and monitoring platforms using Angular, Python, FastAPI, and cloud-native architectures.",
        "Improved platform reliability to 99.5% uptime through automated monitoring, alerting, and fault recovery.",
      ],
    },
    {
      company: "Gannon University",
      title: "Student Research Assistant",
      duration: "Sept 2023 – Jan 2024",
      location: "PA, USA",
      bullets: [
        "Developed software tools and automation workflows supporting university research initiatives.",
        "Built data collection, processing, and visualization systems using Python, FastAPI, SQL, and cloud technologies.",
      ],
    },
    {
      company: "Rishabh Software",
      title: "Associate Software Engineer",
      duration: "Sep 2021 – Jul 2023",
      location: "Gujarat, India",
      bullets: [
        "Developed and maintained full-stack web applications using React, Angular, Django REST Framework, and PostgreSQL across fintech and healthcare projects.",
        "Designed RESTful and GraphQL APIs focused on clean contracts, scalability, and efficient data access.",
        "Implemented Elasticsearch and Redis caching layers to improve application responsiveness.",
        "Created batch data workflows using PySpark and Airflow to process large volumes of structured data.",
      ],
    },
    {
      company: "Webbrains Technologies",
      title: "Full Stack Engineer",
      duration: "Aug 2020 – Aug 2021",
      location: "Gujarat, India",
      bullets: [
        "Developed full-stack web applications using Angular, Node.js, JavaScript, PostgreSQL, and RESTful APIs.",
        "Built responsive UI components, reducing development effort and improving user experience across projects.",
        "Reduced page load times by 35% through frontend optimization and database query tuning.",
      ],
    },
  ],

  education: [
    {
      level: "Masters",
      degree: "Master of Computer and Information Science in Software Engineering",
      school: "Gannon University",
      location: "PA, USA",
      duration: "Aug 2023 – May 2025",
    },
    {
      level: "Bachelors",
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Gujarat Technological University",
      location: "India",
      duration: "July 2017 – July 2020",
    },
    {
      level: "Diploma",
      degree: "Diploma of Technology in Computer Engineering",
      school: "Gujarat Technological University",
      location: "India",
      duration: "June 2014 – June 2017",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", url: "https://www.credly.com/badges/3c04e1ec-8ffc-43e1-8a20-011252cc5e3b/linked_in_profile" },
    { name: "Python Django Full Stack", url: "https://www.udemy.com/certificate/UC-b3d1acf0-16a5-4b5f-9099-6ab89ffa8d6c/" },
    { name: "Programming for Everybody (Getting Started with Python)", url: "https://coursera.org/share/a0bebe3aebeefbe611bac31ca2d70897" },
  ],

};
