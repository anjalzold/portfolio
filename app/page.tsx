import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="px-6">

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Footer />

    </main>
  );
}