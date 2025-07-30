import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import CategoryPrototype from "@/components/CategoryPrototype";
import InteractiveDemo from "@/components/InteractiveDemo";
import APIShowcase from "@/components/APIShowcase";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Dashboard />
      <CategoryPrototype />
      <InteractiveDemo />
      <Features />
      <APIShowcase />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
