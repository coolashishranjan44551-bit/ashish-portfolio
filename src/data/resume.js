export const contact = {
  name: "Ashish Ranjan",
  tagline: "Building reliable systems, dashboards & human-centred products",
  location: "India",
  focus: "Open to DevOps/SRE, Data & Product Ops roles",
  email: "f20212135@goa.bits-pilani.ac.in",
  phone: "+91 7620462326",
  linkedin: "https://www.linkedin.com/in/ashish-ranjan-67a9b122a",
  github: "https://github.com/coolashishranjan44551-bit",
  resume: "https://drive.google.com/",
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
    role: "DevOps Intern · Observability & Azure",
    time: "Jul 2025 – Present",
    bullets: [
      "Engineered cross-tenant Azure DevOps pipelines for compliant multi-tenant deployments.",
      "Unified metrics, logs and traces into actionable Azure dashboards with automated secure data flows.",
      "Delivered spend analyses that linked tenant usage patterns to cost-optimisation levers."
    ],
  },
  {
    company: "Independent E-commerce Venture (Remote)",
    role: "Founder",
    time: "Jan 2024 – Mar 2024",
    bullets: [
      "Launched lifestyle brand storefront and achieved ₹18k monthly recurring revenue via Meta ads.",
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
    title: "Cross-Market User Behaviour Study",
    org: "Amazon Brazil–India Expansion · NEXTLEAP",
    time: "Apr 2025 – May 2025",
    summary:
      "Mapped Amazon Brazil transaction patterns to Indian cohorts to guide localisation and GTM strategy.",
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
    summary:
      "Analysed 30k+ support calls to flag churn triggers and craft retention experiments.",
    bullets: [
      "Applied sentiment scoring and time-series metrics to rank resolution gaps and SLA breaches.",
      "Built Power BI dashboards for SLA, agent productivity, and engagement cohorts.",
      "Packaged recommendations and ran stakeholder-style reviews to simulate client delivery."
    ],
    stack: ["Power BI", "Analytics", "Customer Success", "Experimentation"],
    repo: "https://github.com/coolashishranjan44551-bit/funnel-analytics",
  },

  {
    title: "SQL Server & Azure Observability",
    org: "CNH ITC · Gurugram",
    time: "Jul 2025 – Present",
    summary:
      "Engineered end-to-end observability for 14+ SQL Servers with Prometheus/Grafana, extending into Azure logs.",
    bullets: [
      "Deployed Prometheus, Grafana, Loki/Promtail, and SQL Exporter (multi-target) with CI/CD; >50k logs/day automated.",
      "Delivered 6 dashboards, 45 panels, 12 recording rules for CPU, memory, waits, slow queries, and backup compliance.",
      "Standardised labels and alerts; improved capacity planning and incident MTTR with Azure-integrated analytics."
    ],
    stack: ["MSSQL", "Prometheus", "Grafana", "Loki/Promtail", "SQL Exporter", "Azure", "CI/CD"],
    // repo: "",
  },

  {
    title: "Synovial Fluid Microchannel Flow Study",
    org: "Mechanical Dept. · BITS Pilani",
    time: "Jan 2025 – May 2025",
    summary:
      "Simulated synovial-fluid flow in ~100 µm channels via coupled CFD–MD to study lubrication behaviour.",
    bullets: [
      "Explored shear rates of 10–1000 s⁻¹; assessed plasticity, elasticity, adhesion, and wettability of bio-gels.",
      "Ran multiscale models (~10⁶ particles) in LAMMPS and validated CFD in Ansys Fluent; ~10% deviation vs literature.",
      "Produced design insights for microscale biomedical lubrication and device geometry."
    ],
    stack: ["Ansys Fluent", "LAMMPS", "CFD", "Molecular Dynamics", "Python"],
    // repo: "",
  },

  {
    title: "Projection Lithography Device Development",
    org: "Sparkle · BITS Pilani · Physics Dept.",
    time: "Aug 2024 – Dec 2024",
    summary:
      "Designed an optical lithography setup using reverse-microscope principles with 3D-printed precision mounts.",
    bullets: [
      "CAD of lens holders and joints with heat-melt adhesion considerations; ensured mechatronic alignment tolerances.",
      "Integrated mechanical-optical alignment; produced cost-optimised, serviceable assemblies.",
      "Secured ₹2 lakh Sparkle funding; contributed to microfabrication and optics research."
    ],
    stack: ["CAD", "3D Printing", "Optics", "Precision Mechanics"],
    // repo: "",
  },

  {
    title: "Lithography & Simulations Research Cluster",
    org: "Sparkle Project · BITS Pilani (Virtual Dynamics Lab)",
    time: "Aug 2024 – Feb 2025",
    summary:
      "Built a 7-node Linux cluster and workflows to scale vortex-dynamics simulations and lithography research.",
    bullets: [
      "Configured SSH/OpenMPI for distributed Fortran runs; automated provisioning with IaC and incident playbooks.",
      "Implemented anomaly-detection scripts; optimised runtime through profiling and resource tuning.",
      "Received ₹2 lakh Sparkle funding; documented reproducible pipelines for student researchers."
    ],
    stack: ["Linux", "OpenMPI", "Fortran", "IaC/Automation", "Monitoring"],
    // repo: "",
  },

  {
    title: "Multipurpose Agricultural Cultivator — Mechanical Design & FEA",
    org: "Mechanical Engineering · BITS Pilani",
    time: "Aug 2024 – Dec 2024",
    summary:
      "Lean, modular cultivator for smallholder farms; owned pulley-belt drive and chassis/tool-mount design.",
    bullets: [
      "Sized and verified pulley–belt transmission (power capacity, tensions, wrap angle, center distance).",
      "Designed frame & quick-swap tool interfaces in Fusion 360/SolidWorks; DFMA and serviceability focus.",
      "Ran ANSYS FEA (static/tensile); validated von Mises stress, deflection, and Factor of Safety; released drawings/BoM."
    ],
    stack: ["Fusion 360", "SolidWorks", "ANSYS", "DFMA"],
    // repo: "",
  },

  {
    title: "Product Design & Data Launch",
    org: "LAW (NGO) · Patna · Remote",
    time: "Sep 2023 – Feb 2024",
    summary:
      "Enabled a pet-food launch with research-driven branding, packaging, and ops alignment.",
    bullets: [
      "Conducted stakeholder interviews and market sizing; informed positioning and pricing decisions.",
      "Maintained inventory/demand logs; supported fulfilment forecasting and supply planning.",
      "Produced internal docs, product guides, and design decks for cross-team execution."
    ],
    stack: ["UX Research", "Branding", "Ops"],
    // repo: "",
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
    "Azure DevOps", "Observability", "Scripting", "SQL", "Python", "Power BI",
    "Tableau (basics)", "ETL & Data Cleaning", "Dashboards", "Statistics", "Experiment Design"
  ],
  tools: [
    "Git", "GitHub", "AWS", "PostgreSQL", "MySQL", "Excel", "PowerPoint Storytelling",
    "Fusion 360", "ANSYS", "Adobe Suite", "Figma", "FL Studio"
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
