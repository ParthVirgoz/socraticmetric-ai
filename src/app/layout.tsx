import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
// Temporarily disabled — re-enable to show site-wide loader on first paint
// import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ChatbaseWidget } from "@/components/chatbot/ChatbaseWidget";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { rootMetadata } from "@/lib/site-metadata";
import { MotionConfig } from "framer-motion";

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8F6F0] antialiased selection:bg-[#E79636]/20 selection:text-[#163460]">
        <SiteJsonLd />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        {/* <LoadingScreen /> */}
        <ScrollToTop />
        <CookieConsent />
        <ChatbaseWidget />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
