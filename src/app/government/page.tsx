import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GovernmentHero } from "@/components/government/GovernmentHero";
import { GovernmentRisk } from "@/components/government/GovernmentRisk";
import { GovernmentSolution } from "@/components/government/GovernmentSolution";
import { GovernmentCompliance } from "@/components/government/GovernmentCompliance";
import { GovernmentUseCases } from "@/components/government/GovernmentUseCases";
import { GovernmentTestimonial } from "@/components/government/GovernmentTestimonial";
import { ContactSection } from "@/components/home/sections/ContactSection";

export default function GovernmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F2] font-sans text-[#163460] selection:bg-[#E79636]/20 selection:text-[#163460] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <GovernmentHero />
        <GovernmentRisk />
        <GovernmentSolution />
        <GovernmentCompliance />
        <GovernmentUseCases />
        <GovernmentTestimonial />
        <ContactSection initialUseCase="government-defense" />
      </main>
      <Footer />
    </div>
  );
}
