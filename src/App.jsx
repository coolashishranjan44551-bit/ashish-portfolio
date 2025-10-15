import { NavBar } from "./components/NavBar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Education } from "./sections/Education.jsx";
import { Skills } from "./sections/Skills.jsx";
import { Leadership } from "./sections/Leadership.jsx";
import { Volunteering } from "./sections/Volunteering.jsx";
import { Testimonials } from "./sections/Testimonials.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night-900 text-slate-100 antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),rgba(2,6,23,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.18),transparent_60%)]" />
        <div className="absolute inset-y-[-20%] left-1/2 h-[140%] w-[55%] -translate-x-1/2 rounded-full bg-gradient-to-br from-ashish-500/35 via-transparent to-emerald-400/20 blur-3xl" />
        <div className="absolute inset-0 opacity-60 mix-blend-soft-light bg-grid-glow bg-[length:120px_120px]" />
      </div>

      <NavBar />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Leadership />
        <Volunteering />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
