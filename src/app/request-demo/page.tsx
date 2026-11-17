import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RequestDemoHero } from "@/components/request-demo/RequestDemoHero";
import { RequestDemoForm } from "@/components/request-demo/RequestDemoForm";

export default function RequestDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F2] font-sans text-[#163460] selection:bg-[#E79636]/20 selection:text-[#163460]">
      <Navbar />
      <main className="flex-1">
        <RequestDemoHero />
        <RequestDemoForm />
      </main>
      <Footer />
    </div>
  );
}
