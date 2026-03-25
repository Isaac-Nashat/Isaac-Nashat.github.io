import ClientShell from "@/components/ClientShell";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Automation from "@/components/Automation";
import Revenue from "@/components/Revenue";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ClientShell />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Automation />
        <Revenue />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
