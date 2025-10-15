import { useMemo } from "react";
import { ExternalLink, Linkedin, Mail, Phone, Download, MapPin, GraduationCap, Briefcase, Trophy, Wrench, Github } from "lucide-react";

// NOTE: This single-file React component renders a polished, scrollable portfolio landing page.
// TailwindCSS is used for styling. Feel free to tweak colors/sections/content.

export default function PortfolioAshishRanjan() {
  const links = useMemo(
    () => ({
      email: "f20212135@goa.bits-pilani.ac.in",
      phone: "+91 7620462326",
      linkedin: "https://www.linkedin.com/in/ashish-ranjan-67a9b122a",
      portfolio: "#portfolio",
      resume: "#resume" // replace with a real file/url when ready
    }),
    []
  );

  const education = [
    {
      school: "BITS Pilani Goa Campus",
      degree: "M.Sc. (Hons.) Physics & B.E. (Hons.) Mechanical Engineering",
      time: "2021 – 2026",
      details: ["Dual degree with strong foundations in math, statistics, and engineering design."]
    },
    {
      school: "ST LAWRENCE ACD, Shahpur Karnaja Bikram, Patna",
      degree: "Class XII – Science (78.2%)",
      time: "2020",
      details: []
    },
    {
      school: "DAV Public School, Cantt Rd Khagaul Campus, Patna",
      degree: "Class X – 86.4%",
      time: "2018",
      details: []
    }
  ];

  const experience = [
    {
      title: "DevOps Intern | Observability & Azure",
      org: "CNH ITC – Gurugram",
      time: "Jul 2025 – Present",
      bullets: [
        "Engineered cross‑tenant Azure DevOps pipelines enabling triggers between tenants and multi‑tenant governance.",
        "Built end‑to‑end observability for Azure services (metrics, logs, traces) with automated, secure data movement.",
        "Analyzed Azure cost variations across tenants by workload/service usage; delivered insights for optimization."
      ],
    },
    {
      title: "Founder",
      org: "Independent E‑commerce Venture (Remote)",
      time: "Jan 2024 – Mar 2024",
      bullets: [
        "Achieved ₹18k MRR via targeted Meta ad campaigns for lifestyle niches.",
        "Owned operations: product curation, branding, Shopify setup, and customer support.",
        "Produced insights and financial reports to guide spend, fulfillment, and growth."
      ],
    },
    {
      title: "Financial & Data Analyst Intern",
      org: "Mr. Bangur Hospital – Kolkata",
      time: "Jun 2023 – Jul 2023",
      bullets: [
        "Ran weekly audits for emergency fund distribution; ensured 100% compliance with clinical teams.",
        "Performed budget tracking/expense analysis in Excel to improve fund efficiency.",
        "Delivered data‑driven reports for critical‑care resource decisions."
      ],
    },
  ];

  const projects = [
    {
      name: "Cross‑Market User Behavior Study",
      org: "Amazon Brazil–India Expansion – NEXTLEAP",
      time: "Apr 2025 – May 2025",
      bullets: [
        "Queried Amazon Brazil transactions in PostgreSQL to map behavior trends to Indian audiences.",
        "Advanced SQL (joins/CTEs/windows) to surface patterns and preferences across categories.",
        "Proposed GTM recommendations for targeting, localization, and onboarding."
      ],
      tags: ["PostgreSQL", "SQL", "Market Research", "GTM"]
    },
    {
      name: "Customer Funnel Optimization",
      org: "Flipkart Retention Project – NEXTLEAP",
      time: "Mar 2025 – Apr 2025",
      bullets: [
        "Analyzed 30k+ service calls to find churn indicators using sentiment/time metrics.",
        "Built Power BI dashboards for SLAs, agent effectiveness, and engagement.",
        "Outlined actionable retention strategies in a consulting simulation."
      ],
      tags: ["Power BI", "Analytics", "Churn", "Customer Success"]
    },
    {
      name: "Product Design & Data – Pet Food Launch",
      org: "LAW NGO – Patna (Remote)",
      time: "Sep 2023 – Feb 2024",
      bullets: [
        "Ran user interviews + market research; positioned packaging/branding.",
        "Maintained inventory logs and product data sheets for forecasting.",
        "Created guides and design decks for supply chain and delivery."
      ],
      tags: ["Product Design", "Research", "Branding", "Ops"]
    },
    {
      name: "Infrastructure‑Led Research Scaling",
      org: "Cluster Dev Project – BITS Pilani",
      time: "Aug 2024 – Nov 2024",
      bullets: [
        "Deployed a 7‑node Linux cluster for simulation‑heavy research.",
        "Configured OpenMPI + cloud APIs for distributed workloads.",
        "Automated anomaly detection and audit scripts to optimize runtime."
      ],
      tags: ["Linux", "OpenMPI", "Cloud", "Automation"]
    },
  ];

  const leadership = [
    {
      role: "Design Head",
      org: "Interbits",
      time: "Mar 2023 – May 2023",
      bullets: [
        "Led branding for Open Day 2023; delivered jersey & medal designs.",
        "Owned vendor communications and merchandise budgeting."
      ],
    },
    {
      role: "Core Member",
      org: "AnD (Arts & Decoration), BITS Goa",
      time: "Jan 2022 – Dec 2022",
      bullets: [
        "Scaled from crew to core; led decor for Waves, Quark, Spree.",
        "Managed inventory and an 80‑member student crew."
      ],
    },
    {
      role: "Core Member",
      org: "IEEE Student Chapter, BITS Goa",
      time: "Aug 2022 – Dec 2023",
      bullets: [
        "Co‑organized large coding competition with Coding Ninjas (1000+ participants).",
        "Handled planning, promotion, and logistics."
      ],
    },
  ];

  const volunteering = [
    {
      role: "Guider",
      org: "Nirmaan Organization",
      time: "Jun 2021 – Nov 2021",
      bullets: [
        "Mentored underprivileged students and led outreach initiatives."
      ],
    }
  ];

  const skills = [
    "SQL", "Python", "Excel", "Power BI", "Tableau (basics)", "Dash‑boarding & Data Modeling",
    "A/B Testing", "Experiment Design", "Statistics & Hypothesis Testing",
    "ETL & Data Cleaning", "Git", "PowerPoint Storytelling", "Management", "Customer Research"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Ashish Ranjan</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#experience" className="hover:text-gray-700">Experience</a>
            <a href="#projects" className="hover:text-gray-700">Projects</a>
            <a href="#education" className="hover:text-gray-700">Education</a>
            <a href="#skills" className="hover:text-gray-700">Skills</a>
            <a href="#leadership" className="hover:text-gray-700">POR</a>
            <a href="#volunteering" className="hover:text-gray-700">Volunteering</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 hover:bg-gray-100">
              <Linkedin size={16} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 hover:bg-gray-100">
              <Mail size={16} /> <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600 bg-white shadow-sm">
                <MapPin size={14} /> India · Open to SRE/DevOps, Data, Product Design
              </div>
              <h1 className="mt-4 text-4xl/tight md:text-5xl font-semibold tracking-tight">
                Building reliable systems, actionable dashboards & human‑centered products.
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl">
                I’m Ashish Ranjan — a dual‑degree student at BITS Pilani (Goa) and a DevOps & Data enthusiast.
                I design observability stacks, optimize costs, and turn data into product decisions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-2xl px-4 py-2 bg-gray-900 text-white hover:bg-black inline-flex items-center gap-2">
                  Explore Projects <ExternalLink size={16} />
                </a>
                <a href={links.resume} className="rounded-2xl px-4 py-2 border inline-flex items-center gap-2 hover:bg-gray-100">
                  <Download size={16} /> Download Resume
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl px-4 py-2 border inline-flex items-center gap-2 hover:bg-gray-100">
                  <Linkedin size={16} /> Connect
                </a>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="inline-flex items-center gap-2"><Phone size={16}/> {links.phone}</div>
                <div className="inline-flex items-center gap-2"><Mail size={16}/> {links.email}</div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm text-gray-600"><Briefcase size={18}/> Current</div>
                <h3 className="mt-2 text-xl font-semibold">DevOps Intern — Observability & Azure</h3>
                <p className="text-gray-600">CNH ITC · Gurugram · Jul 2025 – Present</p>
                <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li>Cross‑tenant pipelines & governance (Azure DevOps).</li>
                  <li>Metrics · Logs · Traces · Secure data transfers.</li>
                  <li>Azure cost analysis & optimization insights.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          <div className="mt-6 grid gap-6">
            {experience.map((exp, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.org}</p>
                  </div>
                  <div className="text-sm text-gray-600">{exp.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                  {exp.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="rounded-3xl border p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-gray-600">{p.org}</p>
                  </div>
                  <span className="text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1">{p.time}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                  {p.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, k) => (
                    <span key={k} className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
          <div className="mt-6 grid gap-6">
            {education.map((e, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{e.school}</h3>
                    <p className="text-gray-600">{e.degree}</p>
                  </div>
                  <div className="text-sm text-gray-600">{e.time}</div>
                </div>
                {e.details?.length ? (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                    {e.details.map((d, j) => (<li key={j}>{d}</li>))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills & Technologies</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="rounded-full border px-3 py-1 text-sm bg-gray-50">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP / POR */}
      <section id="leadership" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Positions of Responsibility</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {leadership.map((l, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{l.role}</h3>
                    <p className="text-gray-600">{l.org}</p>
                  </div>
                  <div className="text-sm text-gray-600">{l.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                  {l.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEERING */}
      <section id="volunteering" className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Extra‑Curriculars & Volunteering</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {volunteering.map((v, i) => (
              <div key={i} className="rounded-3xl border p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{v.role}</h3>
                    <p className="text-gray-600">{v.org}</p>
                  </div>
                  <div className="text-sm text-gray-600">{v.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                  {v.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3 text-gray-700"><Linkedin size={18}/> LinkedIn</div>
              <p className="mt-2 text-sm text-gray-600 break-all">{links.linkedin}</p>
            </a>
            <a href={`mailto:${links.email}`} className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3 text-gray-700"><Mail size={18}/> Email</div>
              <p className="mt-2 text-sm text-gray-600 break-all">{links.email}</p>
            </a>
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-gray-700"><Phone size={18}/> Phone</div>
              <p className="mt-2 text-sm text-gray-600">{links.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-white/60">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Ashish Ranjan · BITS Pilani
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#experience" className="hover:text-gray-800">Experience</a>
            <a href="#projects" className="hover:text-gray-800">Projects</a>
            <a href="#education" className="hover:text-gray-800">Education</a>
            <a href="#skills" className="hover:text-gray-800">Skills</a>
            <a href="#leadership" className="hover:text-gray-800">POR</a>
            <a href="#volunteering" className="hover:text-gray-800">Volunteering</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
