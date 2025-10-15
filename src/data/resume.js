// src/data/resume.js

export const contact = {
  name: "Ashish Ranjan",
  tagline: "Designing observability, analytics & human-centred delivery",
  location: "India",
  focus: "Open to DevOps/SRE, Data & Product Ops roles",
  email: "f20212135@goa.bits-pilani.ac.in",
  phone: "+91 7620462326",
  linkedin: "https://www.linkedin.com/in/ashish-ranjan-67a9b122a",
  github: "https://github.com/coolashishranjan44551-bit",
  resume: "https://drive.google.com/",
  image: "/ashish-portrait.svg",
  imageAlt: "Illustrated portrait tile representing Ashish Ranjan",
};

// ================== EDUCATION ==================
export const education = [
  {
    school: "Birla Institute of Technology and Science (BITS) Pilani – Goa Campus",
    degree: "B.E. (Hons) Mechanical Engineering",
    time: "Nov 2021 – Jul 2026 (Expected)",
    details: [
      "Relevant coursework: Fluid Mechanics, Machine Design, Manufacturing Processes, Data Science, Statistics",
      "Minor: Data Analytics & Systems",
      "Activities: Interbits Design Head · AnD Core · IEEE Core Member"
    ],
  },
  {
    school: "CBSE – High School",
    degree: "Science Stream (PCM)",
    time: "2020 – 2021",
    details: [
      "Secured distinction in Physics, Chemistry & Mathematics",
      "Engaged in national-level science fairs and Olympiads",
    ],
  },
];


// ================== EXPERIENCE ==================
export const experience = [
  {
    company: "CNH ITC – Gurugram",
    role: "SQL Server & Azure Observability · DevOps Intern",
    time: "Jul 2025 – Present",
    bullets: [
      "Engineered observability across 14+ SQL Server estates with Prometheus, Grafana, Loki/Promtail and exporter pipelines.",
      "Delivered 6 dashboards, 45 panels and 12 alert rules covering CPU, memory, waits, query health and backup compliance.",
      "Automated ingestion of 50k+ Azure logs per day via CI/CD and the ASAP framework to extend operations analytics."
    ],
  },
  {
    company: "NEXTLEAP",
    role: "Data Analytics Fellow · Top Fellow",
    time: "Mar 2025 – Jul 2025",
    bullets: [
      "Ranked as a top fellow by unifying Flipkart, Amazon and PedalEase datasets into retention playbooks.",
      "Built Power BI dashboards for engagement, SLA and sentiment tracking tied to churn hypotheses.",
      "Surfaced localisation and GTM strategies by mining Amazon Brazil transactions with advanced SQL."
    ],
  },
  {
    company: "Customer-Centric Growth Discovery Project",
    role: "Business Development Analyst",
    time: "Sep 2023 – Feb 2024",
    bullets: [
      "Partnered with Love All With Trust to digitise growth processes and voice-of-customer insights.",
      "Tracked pricing, discovery and catalogue health metrics with Excel/Python dashboards for leadership reviews.",
      "Recommended SEM/SEO experiments and promo calendars that cut conversion drop-offs by 20%."
    ],
  },
  {
    company: "Independent E-commerce Venture (Remote)",
    role: "Founder",
    time: "Jan 2024 – Mar 2024",
    bullets: [
      "Launched a lifestyle storefront and achieved ₹18k monthly recurring revenue via Meta ads.",
      "Managed sourcing, Shopify experience, fulfilment and customer support loops end-to-end.",
      "Synthesised campaign data into recommendations and financial projections for growth planning."
    ],
  },
  {
    company: "Mr. Bangur Hospital – Kolkata",
    role: "Financial & Data Analyst Intern",
    time: "Jun 2023 – Jul 2023",
    bullets: [
      "Audited emergency fund utilisation with clinical teams ensuring 100% compliance.",
      "Tracked budgets and spend in Excel to surface savings opportunities.",
      "Built reporting packs that informed critical-care staffing and resource allocation."
    ],
  },
];

// ================== PROJECTS ==================
export const projects = [
  {
    title: "SQL Server & Azure Observability",
    org: "CNH ITC · Gurugram",
    time: "Jul 2025 – Present",
    summary: "Engineered end-to-end observability for 14+ SQL Servers with Prometheus/Grafana, extending into Azure logs.",
    bullets: [
      "Deployed Prometheus, Grafana, Loki/Promtail, and SQL Exporter (multi-target) with CI/CD; >50k logs/day automated.",
      "Delivered 6 dashboards, 45 panels, 12 recording rules for CPU, memory, waits, slow queries, and backup compliance.",
      "Standardised labels and alerts; improved capacity planning and incident MTTR with Azure-integrated analytics."
    ],
    stack: ["MSSQL", "Prometheus", "Grafana", "Loki/Promtail", "SQL Exporter", "Azure", "CI/CD"],
  },
  {
    title: "AI Knowledge Assistant — RAG Chatbot for Internal Docs",
    org: "CNH ITC · Gurugram",
    time: "Sep 2025 – Nov 2025",
    summary: "Converted a CLI RAG bot into a secure, web-embeddable chatbot with REST APIs and persistent FAISS retrieval.",
    bullets: [
      "Modularised ingestion/retrieval; persisted FAISS index; used HuggingFaceEndpointEmbeddings with Zephyr-7B.",
      "Built FastAPI endpoints (/upload, /chat, /health) with API key/OAuth auth and multi-tenant document collections.",
      "Shipped an HTML/JS chat widget with citations; containerised via Docker and added Celery for async indexing."
    ],
    stack: ["FastAPI", "LangChain", "FAISS", "Hugging Face", "HTML/JS", "Docker", "Celery", "OAuth"],
    repo: "https://github.com/coolashishranjan44551-bit/Gen-Ai",
  },
  {
    title: "Amazon Brazil–India Market Insights",
    org: "Amazon Brazil–India Expansion · NEXTLEAP",
    time: "Apr 2025 – May 2025",
    summary: "Mapped Amazon Brazil transaction patterns to Indian cohorts to guide localisation and GTM strategy.",
    bullets: [
      "Queried multi-million row datasets in PostgreSQL using joins, CTEs, and window functions.",
      "Modelled product-affinity segments; surfaced actionable GTM recommendations and seasonality insights.",
      "Presented customer-journey artefacts aligning marketing and onboarding teams."
    ],
    stack: ["PostgreSQL", "SQL", "Segmentation", "GTM"],
    repo: "https://github.com/coolashishranjan44551-bit/amazon-market-insights",
  },
  {
    title: "Customer Funnel Optimisation",
    org: "Flipkart Retention Project · NEXTLEAP",
    time: "Mar 2025 – Apr 2025",
    summary: "Analysed 30k+ support calls to flag churn triggers and craft retention experiments.",
    bullets: [
      "Applied sentiment scoring and time-series metrics to rank resolution gaps and SLA breaches.",
      "Built Power BI dashboards for SLA, agent productivity, and engagement cohorts.",
      "Packaged recommendations and ran stakeholder-style reviews to simulate client delivery."
    ],
    stack: ["Power BI", "Analytics", "Customer Success", "Experimentation"],
    repo: "https://github.com/coolashishranjan44551-bit/Flipkart_Dashbord_data_Anya",
  },
  {
    title: "Synovial Fluid Microchannel Flow Study",
    org: "Mechanical Dept., BITS Pilani",
    time: "Jan 2025 – May 2025",
    summary: "Simulated synovial fluid transport through ~100 μm microchannels at shear rates of 10–1000 s⁻¹.",
    bullets: [
      "Investigated plasticity, elasticity, adhesion and wettability of bio-gels for biomedical lubrication.",
      "Achieved ~10% deviation from experimental literature benchmarks by calibrating CFD and MD models.",
      "Coupled Ansys Fluent with LAMMPS to study ~10⁶ particles for multiscale fluid design insights."
    ],
    stack: ["Ansys Fluent", "LAMMPS", "CFD", "Molecular Dynamics"],
  },
  {
    title: "Multipurpose Agricultural Cultivator & Gearbox Design",
    org: "Mechanical Dept., BITS Pilani",
    time: "Oct 2024 – Feb 2025",
    summary: "Designed a <85 kg cultivator and a 4-speed helical gearbox inspired by Porsche 911, covering shafts, bearings, keys, and lubrication.",
    bullets: [
      "Designed a lightweight (<85 kg) cultivator for plowing, seeding, and weeding with an optimized steel weeder blade.",
      "Engineered a durable 4-speed helical gearbox (Porsche 911 baseline) including shaft, bearing, key, and lubrication analysis.",
      "Used Fusion 360, ANSYS, and manual calcs to validate joints/welds and ensure reliable mechanical performance."
    ],
    stack: ["Fusion 360", "ANSYS", "Excel", "Mechanical Design"],
  },
  {
    title: "Projection Lithography Device Development",
    org: "Sparkle · Physics Dept. BITS Pilani",
    time: "Aug 2024 – Dec 2024",
    summary: "Designed mechanical sub-systems for an optical lithography device leveraging reverse microscopy.",
    bullets: [
      "Modelled and 3D-printed joints and lens holders focusing on heat-melt adhesion and optical alignment.",
      "Integrated mech-optical interfaces to balance plastic properties, tolerance, and cost efficiency.",
      "Secured ₹2 lakh Sparkle funding to advance campus microfabrication research capabilities."
    ],
    stack: ["Fusion 360", "3D Printing", "Optics", "Mechanical Design"],
  },
];

// ================== LEADERSHIP ==================
export const leadership = [
  {
    org: "Interbits",
    role: "Design Head",
    time: "Mar 2023 – May 2023",
    bullets: [
      "Directed brand identity, jersey and medal design for Open Day 2023.",
      "Coordinated vendors and budgets to deliver merch at scale."
    ],
  },
  {
    org: "AnD (Arts & Decoration) · BITS Goa",
    role: "Core Member",
    time: "Jan 2022 – Dec 2022",
    bullets: [
      "Led large format decor builds for Waves, Quark and Spree festivals.",
      "Managed inventory operations and an 80-member student crew."
    ],
  },
  {
    org: "IEEE Student Chapter · BITS Goa",
    role: "Core Member",
    time: "Aug 2022 – Dec 2023",
    bullets: [
      "Partnered with Coding Ninjas to host 1000+ participant coding competition.",
      "Handled event planning, promotion and logistics alignment."
    ],
  },
];

// ================== VOLUNTEERING ==================
export const volunteering = [
  {
    org: "Nirmaan Organisation",
    role: "Guider",
    time: "Jun 2021 – Nov 2021",
    bullets: ["Mentored school students and organised community outreach camps."],
  },
];

// ================== SKILLS ==================
export const skills = {
  core: [
    "Azure DevOps", "Observability", "Prometheus", "Grafana", "Scripting", "SQL",
    "Python", "Power BI", "Tableau (basics)", "ETL & Data Cleaning", "Dashboards",
    "Statistics", "Experiment Design"
  ],
  tools: [
    "Git", "GitHub", "AWS", "PostgreSQL", "MySQL", "Excel", "PowerPoint Storytelling",
    "Fusion 360", "SolidWorks", "ANSYS", "OpenMPI", "Adobe Suite", "Figma", "FL Studio",
    "Azure DevOps", "Observability", "Scripting", "SQL", "Python", "Power BI",
    "Tableau (basics)", "ETL & Data Cleaning", "Dashboards", "Statistics", "Experiment Design"
  ],
  business: [
    "GTM Strategy", "Funnel Optimisation", "User Research", "Business Valuation (DCF)",
    "Stakeholder Management", "Vendor Negotiation"
  ],
};

// ================== TESTIMONIALS ==================
export const testimonials = [
  {
    quote: "Ashish brings a rare blend of analytical rigour and creative storytelling. His dashboards always ladder up to decisions.",
    name: "Mentor · NextLeap Fellowship",
  },
  {
    quote: "He translates ambiguous requirements into robust pipelines and documentation the team can instantly use.",
    name: "Engineering Lead · CNH ITC",
  },
];
