import AboutMe from "@/components/AboutMe";
import Calenders from "@/components/Calenders";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import React from "react";
import Conclusion from "@/components/Conclusion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="sm:flex items-center justify-center">
      <div>
        <Hero />
        <AboutMe />
        <TechStack />
        <Calenders />
        <Projects />
        <Conclusion/>
        <ContactForm/>
      </div>
    </div>
  );
}
