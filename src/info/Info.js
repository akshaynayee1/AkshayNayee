import self from "../img/ak1.png";
import melolem from "../img/melolem.png";
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
  github: "https://github.com/Nayee001",
  resumePdf: resumePdf,

  position: [
    "AI Software Engineer",
    "Software Engineer",
    "LLM & RAG Systems Builder",
    "Full Stack Engineer",
  ],

  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors[0]}, ${colors[2]})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "📍",
      text: "PA, USA",
    },
    {
      emoji: "💼",
      text: "Software Engineer",
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
    "Software Engineer with 4+ years of experience building AI-powered applications, scalable backend systems, and modern web platforms. Currently at Plaid, developing Kafka-based microservices and AI-driven services that process large-scale financial data. Experienced in Generative AI, LLM applications, Retrieval-Augmented Generation (RAG), cloud-native architectures, and full-stack development. Proven track record delivering production-grade solutions using Python, FastAPI, React, Angular, AWS, Docker, and Kubernetes.",

  skills: {
    proficientWith: [
      "Python",
      "FastAPI",
      "TypeScript",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Angular",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS (Lambda, EC2, S3)",
      "Docker",
      "Kubernetes",
      "OpenAI GPT-4",
      "RAG Pipelines",
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
      degree: "Master of Computer and Information Science in Software Engineering",
      school: "Gannon University",
      location: "PA, USA",
      year: "May 2025",
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Gujarat Technological University",
      location: "India",
      year: "July 2020",
    },
  ],

  certifications: [
    "AWS Certified Cloud Practitioner",
    "Lakehouse Architecture on Databricks",
    "Generative AI",
  ],

  portfolio: [
    {
      title: "AI Financial Insights Platform",
      live: "https://www.melolem.com/",
      image: melolem,
    },
  ],
};
