import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterpriseRisk } from "@/components/enterprise/EnterpriseRisk";
import { EnterpriseSolution } from "@/components/enterprise/EnterpriseSolution";
import { EnterpriseCompliance } from "@/components/enterprise/EnterpriseCompliance";
import { EnterpriseUseCases } from "@/components/enterprise/EnterpriseUseCases";
import { EnterpriseTestimonial } from "@/components/enterprise/EnterpriseTestimonial";
import { ContactSection } from "@/components/home/sections/ContactSection";

export default function EnterprisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F2] font-sans text-[#163460] selection:bg-[#E79636]/20 selection:text-[#163460] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <EnterpriseHero />
        <EnterpriseRisk />
        <EnterpriseSolution />
        <EnterpriseCompliance />
        <EnterpriseUseCases />
        <EnterpriseTestimonial />
        <ContactSection initialUseCase="corporate-compliance" />
      </main>
      <Footer />
    </div>
  );
}
