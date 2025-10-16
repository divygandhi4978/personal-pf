import AboutMe from "@/components/AboutMe";
import Calenders from "@/components/Calenders";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import React from "react";
import Conclusion from "@/components/Conclusion";
import ContactForm from "@/components/ContactForm";
import Scroller from "@/components/Scroller";
import Current from "@/components/Current";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="sm:flex items-center justify-center ">
      <div className="max-w-4xl">
        <Hero />
        <AboutMe />
        <TechStack />
        <Calenders />
        <Current />
        <Projects />
        <Experience/>
        <Scroller />
        <Conclusion />
        <ContactForm />
      </div>
    </div>
  );
}
