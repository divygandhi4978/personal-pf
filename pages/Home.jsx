// page.js
import AboutMe from "@/components/AboutMe";
import Calenders from "@/components/Calenders";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Conclusion from "@/components/Conclusion";
import ContactForm from "@/components/ContactForm";
import Scroller from "@/components/Scroller";
import Current from "@/components/Current";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
// page.js
export default function Home() {
  const sections = [
    { id: "hero", component: <Hero />, z: "z-[10]" },
    { id: "about", component: <AboutMe />, z: "z-[20]" },
    { id: "tech", component: <TechStack />, z: "z-[30]" },
    { id: "activity", component: <Calenders />, z: "z-[40]" },
    { id: "current", component: <Current />, z: "z-[50]" },
    { id: "projects", component: <Projects />, z: "z-[60]" },
    { id: "experience", component: <Experience />, z: "z-[70]" },
    { id: "scroller", component: <Scroller />, z: "z-[80]", isStatic: true },
    { id: "conclusion", component: <Conclusion />, z: "z-[90]" },
    { id: "contact", component: <ContactForm />, z: "z-[100]" },
    // { id: "footer", component: <Footer />, z: "z-[110]", isFooter: true },
  ];
  
  return (
    <main className="w-full bg-black selection:bg-[#562e66] selection:text-white">
      {sections.map((sec) => (
        <section
          key={sec.id}
          className={`
            w-full bg-black border-t border-white/5
            relative
            ${sec.z} 
            shadow-[0_-50px_100px_rgba(0,0,0,1)]
          `}
        >
          <div className="w-full">
            {sec.component}
          </div>
        </section>
      ))}
    </main>
  );
}