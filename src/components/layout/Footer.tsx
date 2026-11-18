import React from "react";
import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import Image from "next/image";
import { Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#F1F2EE] w-full overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 text-[#69737D]">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-8">
            <Link href="/" className="inline-block" aria-label="SocraticMetric Home">
              <Image 
                src="/img/logos/sm_nav_logo.svg" 
                alt="SocraticMetric" 
                width={200} 
                height={66} 
                className="w-auto h-10 sm:h-12"
              />
            </Link>
            <p className="text-base text-slate-600 leading-relaxed font-medium max-w-sm">
              Verifying authentic comprehension beyond AI-written submissions. Prove they know it. Not the document. Them.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-[#1E4E8A]" aria-hidden="true" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-[#1E4E8A]" aria-hidden="true" />
                <a href="mailto:support@socraticmetric.ai" className="hover:text-[#1E4E8A] transition-colors font-medium">support@socraticmetric.ai</a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a 
                 href="https://www.linkedin.com/company/socratic-metric/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="SocraticMetric on LinkedIn"
                 className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1E4E8A] hover:text-white hover:border-[#1E4E8A] transition-all duration-300 shadow-sm hover:shadow-md"
               >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
               </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-2">
            <p className="font-bold text-[#163460] mb-6 text-sm tracking-widest uppercase">Product</p>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link href="/#how-it-works" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Platform</Link></li>
              <li><Link href="/science" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Science</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-bold text-[#163460] mb-6 text-sm tracking-widest uppercase">Solutions</p>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link href="/education" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Higher Education</Link></li>
              <li><Link href="/enterprise" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Enterprise</Link></li>
              <li><Link href="/government" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Government</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-bold text-[#163460] mb-6 text-sm tracking-widest uppercase">Resources</p>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link href="/blog" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Blog & Insights</Link></li>
              <li><Link href="#contact" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Support</Link></li>
            </ul>
          </div>
          
           <div className="lg:col-span-2">
            <p className="font-bold text-[#163460] mb-6 text-sm tracking-widest uppercase">Company</p>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link href="/about" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link href="/about" className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Careers</Link></li>
              <li><Link href={REQUEST_DEMO_BOOKING_HREF} className="hover:text-[#1E4E8A] hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mb-10 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
            <p className="text-sm font-semibold leading-relaxed text-[#163460]">
              Protected by Issued U.S. AI Patents in Adaptive Oral Evaluation Technology.
            </p>
          </div>
          <Link
            href="/#patents"
            className="inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center rounded-md bg-[#1E4E8A] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#163460] active:scale-[0.98]"
          >
            View issued patents
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600 font-medium">
          <p>&copy; {new Date().getFullYear()} Socratic Metric. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/privacy" className="hover:text-[#163460] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#163460] transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[#163460] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
