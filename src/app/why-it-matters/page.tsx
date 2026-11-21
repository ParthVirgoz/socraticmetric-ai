import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhyItMattersHero } from "@/components/why-it-matters/WhyItMattersHero";
import { VerificationGap } from "@/components/why-it-matters/VerificationGap";
import { HowPlatformWorks } from "@/components/why-it-matters/HowPlatformWorks";
import { WhoNeedsIt } from "@/components/why-it-matters/WhoNeedsIt";
import { ContactSection } from "@/components/home/sections/ContactSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function WhyItMattersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6F0] font-sans text-[#163460] selection:bg-[#E79636]/20 selection:text-[#163460]">
      <Navbar />
      <main className="flex-1">
        <WhyItMattersHero />
        <ScrollReveal>
          <VerificationGap />
        </ScrollReveal>
        <ScrollReveal delayMs={60}>
          <HowPlatformWorks />
        </ScrollReveal>
        <ScrollReveal delayMs={100}>
          <WhoNeedsIt />
        </ScrollReveal>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
