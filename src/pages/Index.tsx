import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <VideoShowcase />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
