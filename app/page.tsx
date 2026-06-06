import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import WorksSlider from "@/components/WorksSlider";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import RevealManager from "@/components/RevealManager";

export default function Home() {
  return (
    <>
      <div className="atmos" aria-hidden />
      <div className="vignette" aria-hidden />

      <Loader />
      <Cursor />
      <Nav />

      <main id="top" className="w-full flex flex-col items-center overflow-x-hidden">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WorksSlider />
        <Gallery />
        <Process />
        <Faq />
        <Contact />
      </main>

      <ScrollProgress />
      <RevealManager />
    </>
  );
}
