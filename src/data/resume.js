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
  image: "ashish-portrait.svg",
  imageAlt: "Illustrated portrait tile representing Ashish Ranjan",
};

export const education = [
  {
    school: "BITS Pilani Goa Campus",
    degree: "M.Sc. (Hons.) Physics & B.E. (Hons.) Mechanical Engineering",
    time: "2021 – 2026",
    bullets: [
      "Dual-degree curriculum combining rigorous engineering analytics, experimentation and design thinking."
    ],
  },
  {
    school: "ST LAWRENCE ACD, Shahpur Karnaja Bikram, Patna",
    degree: "Class XII · Science (78.2%)",
    time: "2020",
  },
  {
    school: "DAV Public School, Cantt Rd Khagaul Campus, Patna",
    degree: "Class X (86.4%)",
    time: "2018",
  },
];

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
      "Launched a lifestyle storefront and achieved ₹18k MRR through targeted Meta ad campaigns.",
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

export const projects = [
  {
    title: "Synovial Fluid Microchannel Flow Study",
    org: "Mechanical Dept., BITS Pilani",
    time: "Jan 2025 – May 2025",
    summary:
      "Simulated synovial fluid transport through ~100 μm microchannels at shear rates of 10–1000 s⁻¹.",
    bullets: [
      "Investigated plasticity, elasticity, adhesion and wettability of bio-gels for biomedical lubrication.",
      "Achieved ~10% deviation from experimental literature benchmarks by calibrating CFD and MD models.",
      "Coupled Ansys Fluent with LAMMPS to study ~10⁶ particles for multiscale fluid design insights."
    ],
    stack: ["Ansys Fluent", "LAMMPS", "CFD", "Molecular Dynamics"],
  },
  {
    title: "Projection Lithography Device Development",
    org: "Sparkle · Physics Dept. BITS Pilani",
    time: "Aug 2024 – Dec 2024",
    summary:
      "Designed mechanical sub-systems for an optical lithography device leveraging reverse microscopy.",
    bullets: [
      "Modelled and 3D printed joints plus lens holders focusing on heat-melt adhesion and optical alignment.",
      "Integrated mechanical-optical interfaces to balance plastic properties, tolerance and cost efficiency.",
      "Secured ₹2 lakh Sparkle funding to advance campus microfabrication research capabilities."
    ],
    stack: ["Fusion 360", "3D Printing", "Optics", "Mechanical Design"],
  },
  {
    title: "Lithography & Simulations Research Cluster",
    org: "Sparkle Project · BITS Pilani",
    time: "Aug 2024 – Feb 2025",
    summary:
      "Built a 7-node Linux cluster to accelerate lithography and vortex dynamics simulations.",
    bullets: [
      "Configured SSH and OpenMPI communication for distributed Fortran workloads and incident response workflows.",
      "Applied IaC practices and anomaly detection to boost reliability while optimising runtime bottlenecks.",
      "Earned ₹2 lakh Sparkle funding by demonstrating reproducible research performance gains."
    ],
    stack: ["Linux", "OpenMPI", "IaC", "Reliability"],
  },
  {
    title: "Customer Funnel Optimisation & Market Insights",
    org: "Flipkart & Amazon · NEXTLEAP",
    time: "Mar 2025 – May 2025",
    summary:
      "Combined Flipkart retention diagnostics with Amazon Brazil market research for GTM strategy.",
    bullets: [
      "Analysed 30k+ Flipkart support calls to pinpoint churn drivers and resolution bottlenecks.",
      "Built Power BI dashboards for sentiment, SLA and engagement monitoring with actionable experiments.",
      "Mapped Amazon Brazil purchasing behaviours to Indian cohorts using SQL joins, CTEs and windows."
    ],
    stack: ["Power BI", "PostgreSQL", "SQL", "Customer Analytics"],
    repo: "https://github.com/coolashishranjan44551-bit/funnel-analytics",
  },
  {
    title: "Multipurpose Agricultural Cultivator",
    org: "Mechanical Design & FEA Team Project",
    time: "Aug 2024 – Dec 2024",
    summary:
      "Engineered a lean, modular cultivator frame with quick-swap tooling for smallholder farms.",
    bullets: [
      "Led chassis and tool-mount design in Fusion 360/SolidWorks with version-controlled reviews across an 8-member team.",
      "Sized pulley–belt drives, computing power capacity, belt tension, wrap angles and maintenance-friendly layouts.",
      "Performed ANSYS FEA (static & tensile) to validate stress, deflection and Factor of Safety before fabrication.",
      "Delivered manufacturing drawings, BoMs and SOPs that reduced downstream service time."
    ],
    stack: ["Fusion 360", "SolidWorks", "ANSYS", "Manufacturing"],
  },
];

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

export const volunteering = [
  {
    org: "Nirmaan Organisation",
    role: "Guider",
    time: "Jun 2021 – Nov 2021",
    bullets: [
      "Mentored school students and organised community outreach camps."
    ],
  },
];

export const skills = {
  core: [
    "Azure DevOps", "Observability", "Prometheus", "Grafana", "Scripting", "SQL",
    "Python", "Power BI", "Tableau (basics)", "ETL & Data Cleaning", "Dashboards",
    "Statistics", "Experiment Design"
  ],
  tools: [
    "Git", "GitHub", "AWS", "PostgreSQL", "MySQL", "Excel", "PowerPoint Storytelling",
    "Fusion 360", "SolidWorks", "ANSYS", "OpenMPI", "Adobe Suite", "Figma", "FL Studio"
  ],
  business: [
    "GTM Strategy", "Funnel Optimisation", "User Research", "Business Valuation (DCF)",
    "Stakeholder Management", "Vendor Negotiation"
  ],
};

export const testimonials = [
  {
    quote:
      "Ashish brings a rare blend of analytical rigour and creative storytelling. His dashboards always ladder up to decisions.",
    name: "Mentor · NextLeap Fellowship",
  },
  {
    quote:
      "He translates ambiguous requirements into robust pipelines and documentation the team can instantly use.",
    name: "Engineering Lead · CNH ITC",
  },
];
