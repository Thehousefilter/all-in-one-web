import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal selection:bg-safety-orange selection:text-charcoal uppercase-text-links">
      <Navbar />
      <Hero />
      <div className="relative z-30">
        <Services />
        <Portfolio />
        <GoogleReviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
