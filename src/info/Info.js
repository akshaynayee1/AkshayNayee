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

  position: [
    "AI Software Engineer",
    "LLM & GenAI Systems",
    "RAG Pipelines Builder",
    "AI Agent Designer",
  ],

  gradient: `-webkit-linear-gradient(135deg, ${colors[0]}, ${colors[2]})`,
  baseColor: colors[0],

  miniBio: [
    {
      emoji: "📍",
      text: "Erie, PA, USA",
    },
    {
      emoji: "💼",
      text: "Software Engineer – AI & Backend @ Plaid",
    },
    {
      emoji: "🎓",
      text: "MS in Computer & Information Science · Gannon University",
    },
    {
      emoji: "🤖",
      text: "Python · FastAPI · AWS · LLMs · RAG",
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
    "I wrote my first line of code at 17 in a small town in Gujarat — just curious to see what would happen. That curiosity turned into a 4+ year career spanning fintech, IoT, and enterprise systems across two countries. Today I'm at Plaid, architecting AI financial intelligence platforms — RAG pipelines, fraud detection models, and LLM-driven forecasting that touch real financial decisions. I'm obsessed with the place where intelligence meets scale: LLMs that actually work in production, vector search that stays fast under load, and software that genuinely matters.",

  skills: {
    proficientWith: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "AWS (EC2, S3, Lambda, IoT Core, EKS)",
      "Docker",
      "Kafka",
      "CI/CD Pipelines",
      "OpenAI API",
      "Anthropic Claude",
      "RAG Pipelines",
      "Prompt Engineering",
      "Embeddings & Semantic Search",
      "Vector Databases (FAISS, Pinecone)",
      "AI Agents",
    ],
    exposedTo: [
      "LLaMA",
      "Fine-tuning",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "NumPy",
      "Pandas",
      "Neural Networks",
      "CNNs",
      "RNNs",
      "Transformers",
      "Apache Airflow",
      "ETL Pipelines & Streaming",
      "Git",
      "Linux",
    ],
  },

  experience: [
    {
      company: "Plaid Inc.",
      title: "Software Engineer – AI & Backend",
      duration: "Jun 2025 – Present",
      location: "Remote, USA",
      bullets: [
        "Architected and deployed an AI financial intelligence platform leveraging LLMs (Claude, LLaMA) for budgeting, investment forecasting, and anomaly detection — reducing manual analysis time significantly across product lines.",
        "Built RAG-based pipelines integrating embeddings and vector search (FAISS/Pinecone) to enhance contextual financial recommendations, improving retrieval relevance and user experience.",
        "Developed scalable microservices using FastAPI, Kafka, and Redis, improving system throughput and API response times by 27%.",
        "Designed and deployed fraud detection and risk scoring ML models, improving predictive accuracy by 21% and reducing false positive rate in transaction flagging.",
        "Built real-time analytics dashboards using React + TypeScript, enabling actionable insights for end users and financial analysts.",
        "Ensured secure architecture with OAuth2 and JWT authentication, meeting SOC2 and PCI-DSS compliance standards.",
        "Managed containerized deployments via Docker and AWS EKS with CI/CD pipelines, achieving and sustaining 99.9% uptime.",
      ],
    },
    {
      company: "Gannon University",
      title: "Software Engineer – AI & GRA Systems",
      duration: "Sep 2023 – May 2025",
      location: "Erie, PA",
      bullets: [
        "Developed a real-time IoT energy analytics platform integrating ML-based anomaly detection for predictive monitoring of device health and energy consumption patterns.",
        "Built cloud data pipelines ingesting streaming sensor data (ESP32/Arduino) via AWS IoT Core, Lambda, S3, and RDS — enabling scalable, low-latency data processing.",
        "Applied time-series analysis and ML models to improve anomaly detection accuracy by 29%, reducing false alerts and downtime for monitored systems.",
        "Designed real-time visualization dashboards for monitoring and analytics, enabling non-technical stakeholders to act on live data insights.",
      ],
    },
    {
      company: "Rishabh Software",
      title: "Software Engineer – Backend & Data Systems",
      duration: "Sep 2021 – Aug 2022",
      location: "Gujarat, India",
      bullets: [
        "Developed enterprise REST APIs using Spring Boot, improving operational efficiency and platform stability for 10,000+ users.",
        "Migrated legacy systems to MongoDB and Elasticsearch, reducing query response times by 80%+ and improving search performance across data-intensive workflows.",
        "Built React-based analytics dashboards enabling faster business decision-making through real-time data visualization.",
        "Strengthened backend systems with robust security, validation, and structured logging frameworks.",
      ],
    },
    {
      company: "Webbrains Technologies",
      title: "Software Engineer",
      duration: "Aug 2020 – Aug 2021",
      location: "Gujarat, India",
      bullets: [
        "Developed reliable backend systems for data-intensive financial applications with emphasis on security, scalability, and high availability.",
        "Automated ETL workflows, reducing manual reporting effort by 30%+ and improving data pipeline efficiency across business units.",
        "Collaborated cross-functionally to design and deliver scalable, secure system architecture aligned with business requirements.",
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
    { name: "Software Engineer", url: "https://www.hackerrank.com/certificates/e709ebf72e97" },
    { name: "Python", url: "https://www.hackerrank.com/certificates/94cc5bea47d7" },
  ],

};
