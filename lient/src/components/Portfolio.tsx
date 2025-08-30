import { useEffect, useState } from "react";
import FloatingNav from "./FloatingNav";
import Hero from "./Hero";
import Projects from "./Projects";
import Gallery from "./Gallery";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      <FloatingNav activeSection={activeSection} />
      <Hero />
      
      {/* Quick Stats */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-experience">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center" data-testid="stat-projects">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Robotics Projects</div>
            </div>
            <div className="text-center" data-testid="stat-publications">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">IEEE Publications</div>
            </div>
            <div className="text-center" data-testid="stat-students">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Gallery />
      <Experience />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Tousif Raza</h3>
              <p className="text-background/80">Robotics & AI Engineer | Building the Future with Innovation</p>
            </div>
            <div className="border-t border-background/20 pt-8">
              <p className="text-background/60">
                © {new Date().getFullYear()} Tousif Raza. Powered by passion for robotics and AI innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
