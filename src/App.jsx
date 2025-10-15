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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <main>
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
