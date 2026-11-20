import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationRisk } from "@/components/education/EducationRisk";
import { EducationSolution } from "@/components/education/EducationSolution";
import { EducationCompliance } from "@/components/education/EducationCompliance";
import { EducationOutcomes } from "@/components/education/EducationOutcomes";
import { EducationUseCases } from "@/components/education/EducationUseCases";
import { EducationWalkthroughVideos } from "@/components/education/EducationWalkthroughVideos";
import { EducationTestimonial } from "@/components/education/EducationTestimonial";
import { ContactSection } from "@/components/home/sections/ContactSection";

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6F0] font-sans text-[#163460] selection:bg-[#E79636]/20 selection:text-[#163460] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <EducationHero />
        <EducationRisk />
        <EducationSolution />
        <EducationCompliance />
        <EducationOutcomes />
        <EducationWalkthroughVideos />
        <EducationUseCases />
        <EducationTestimonial />
        <ContactSection initialUseCase="higher-education" />
      </main>
      <Footer />
    </div>
  );
}
