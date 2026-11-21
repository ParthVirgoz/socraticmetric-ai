import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  FileText,
  MessageCircle,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";

const workflow = [
  {
    step: "01",
    title: "Prepare the material",
    description:
      "Course content, policies, or other reference material gives the session a clear foundation.",
    icon: Upload,
    color: "text-[#1E4E8A]",
    surface: "border-[#1E4E8A]/15 bg-[#F1F5FA]",
  },
  {
    step: "02",
    title: "Ask and follow up",
    description:
      "An oral exchange uses follow-up questions to hear how a person explains and applies ideas.",
    icon: Activity,
    color: "text-[#A5662C]",
    surface: "border-[#E79636]/25 bg-[#FBF4E9]",
  },
  {
    step: "03",
    title: "Review the evidence",
    description:
      "A session record helps teams revisit the reasoning behind an answer.",
    icon: Check,
    color: "text-[#47705B]",
    surface: "border-[#47705B]/20 bg-[#EFF4F0]",
  },
];

const timeline = [
  {
    label: "The problem",
    title: "The false assurance of competence",
    paragraphs: [
      "As generative AI made polished reports and technical briefs easier to produce, fluent writing became less reliable as a stand-in for understanding.",
      "The question was simple: when a document can be generated, how can we hear what the person behind it actually knows?",
    ],
  },
  {
    label: "The insight",
    title: "Understanding becomes visible in explanation",
    paragraphs: [
      "Research on retrieval, generation, and verbal explanation helped shape our approach. A spoken exchange gives people room to explain an idea in their own words.",
      "Follow-up questions can reveal how someone connects concepts, applies evidence, and responds when a conclusion is challenged.",
    ],
  },
  {
    label: "The platform",
    title: "Building cognition in motion",
    paragraphs: [
      "Socratic Metric brings that exchange into a structured, AI-moderated oral session that can start from relevant material and adapt to a person's responses.",
      "The approach is supported by four issued U.S. patents, with session records available for review.",
    ],
  },
  {
    label: "The stakes",
    title: "A clearer view when decisions matter",
    paragraphs: [
      "In classrooms, organizations, and operational settings, a completed document is not always enough to establish readiness.",
      "We help teams look beyond polished output and understand how a person reasons through work that matters.",
    ],
  },
];

const principles = [
  {
    title: "Verification over documentation",
    description:
      "Written work shows what was submitted. An oral exchange adds a chance to hear how a person explains the ideas behind it.",
    icon: FileText,
    color: "text-[#1E4E8A]",
    surface: "bg-[#F1F5FA]",
  },
  {
    title: "Cognitive proof",
    description:
      "Research on retrieval and verbal explanation informs an approach built around reasoning, application, and thoughtful follow-up.",
    icon: MessageCircle,
    color: "text-[#A5662C]",
    surface: "bg-[#FBF4E9]",
  },
  {
    title: "Evidence to review",
    description:
      "Four issued U.S. patents back elements of the approach, and session records give teams a way to revisit the exchange.",
    icon: ShieldCheck,
    color: "text-[#47705B]",
    surface: "bg-[#EFF4F0]",
  },
];

const patents = [
  { number: "11,990,139", date: "May 21, 2024" },
  { number: "12,165,655", date: "December 10, 2024" },
  { number: "12,211,511", date: "February 4, 2025" },
  { number: "12,586,589", date: "March 24, 2026" },
];

const team = [
  { name: "Dr. Barry Sandrew", role: "Founder / CEO", initials: "BS" },
  {
    name: "Dr. Huston Pullen",
    role: "Innovation Deployment",
    initials: "HP",
  },
  { name: "Aansh Malik", role: "CTO", initials: "AM" },
];

function SessionWorkflowVisual() {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white transition-colors duration-300 hover:border-[#1E4E8A]/35">
      <div className="flex h-12 items-center gap-3 border-b border-slate-200 bg-[#F4F5F3] px-4">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D69B94]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E4C27B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#91AF9A]" />
        </div>
        <p className="flex-1 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#65717D]">
          Verification session
        </p>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#47705B]">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#6E9A78] motion-safe:animate-pulse"
            aria-hidden="true"
          />
          Live
        </span>
      </div>

      <div className="space-y-0 px-5 py-5 sm:px-7 sm:py-7">
        {workflow.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.step}
              className="group relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 pb-6 last:pb-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
            >
              {index < workflow.length - 1 ? (
                <span
                  className="absolute bottom-1 left-5 top-10 w-px bg-slate-200 sm:left-6"
                  aria-hidden="true"
                />
              ) : null}
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center border transition-transform duration-200 group-hover:translate-x-0.5 ${step.surface} ${step.color}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="pt-0.5">
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.14em] ${step.color}`}
                >
                  Step {step.step}
                </p>
                <h3 className="mt-1 text-base font-semibold tracking-tight text-[#163460] sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#65717D]">
                  {step.description}
                </p>
                {index === 1 ? (
                  <div className="mt-3 flex h-7 items-center justify-between gap-1 border-y border-slate-200 bg-[#F8F6F0] px-2.5">
                    {[2, 4, 3, 6, 4, 7, 5, 3, 6, 4, 2, 5, 3, 6, 4].map(
                      (height, barIndex) => (
                        <span
                          key={barIndex}
                          className="w-1 rounded-full bg-[#1E4E8A]/65 motion-safe:animate-audio-wave"
                          style={{
                            height: `${height * 2}px`,
                            animationDelay: `${barIndex * 45}ms`,
                          }}
                          aria-hidden="true"
                        />
                      ),
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-[#F8F6F0]">
        {[
          ["01", "Material"],
          ["02", "Dialogue"],
          ["03", "Review"],
        ].map(([number, label]) => (
          <div key={number} className="px-2 py-3 text-center sm:px-4">
            <p className="font-mono text-[10px] text-[#A5662C]">{number}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#40566F] sm:text-xs">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#F8F6F0] font-sans text-[#163460]">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-slate-200 bg-white pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="container mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)] md:px-12 lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
                Our story
              </p>
              <h1 className="animate-text-enter max-w-[18ch] font-sans text-4xl font-bold leading-[1.12] tracking-tight text-[#163460] sm:text-5xl lg:text-[3.25rem]">
                <span className="block">Bringing</span>
                <span className="block text-[#1E4E8A] lg:whitespace-nowrap">
                  Verified Cognition
                </span>
                <span className="block">to the Age of AI</span>
              </h1>
              <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-[#65717D] sm:text-xl">
                <p>
                  When AI can generate polished documentation, written output
                  alone is no longer reliable proof of understanding.
                </p>
                <p>
                  We built Socratic Metric to help organizations hear how a
                  person thinks through the work that matters.
                </p>
              </div>
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#1E4E8A]/30 pb-1 text-sm font-semibold text-[#1E4E8A] transition-colors hover:border-[#1E4E8A] hover:text-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-4"
              >
                See the platform in action
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <ScrollReveal delayMs={80}>
              <SessionWorkflowVisual />
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal>
          <section
            id="our-story"
            aria-labelledby="our-story-heading"
            className="bg-[#F8F6F0] py-16 md:py-24"
          >
            <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              <div className="max-w-xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
                  How we got here
                </p>
                <h2
                  id="our-story-heading"
                  className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
                >
                  From a fundamental risk to a clearer standard of proof.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
                  The story moves from a verification gap, to a way to hear
                  reasoning, to evidence people can review when the stakes are
                  real.
                </p>
              </div>

              <div className="relative border-y border-slate-200 py-2">
                <span
                  className="pointer-events-none absolute bottom-8 left-5 top-8 w-px bg-slate-300 sm:left-7"
                  aria-hidden="true"
                />
                <ol className="relative">
                  {timeline.map((item, index) => (
                    <li
                      key={item.label}
                      className="group relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
                    >
                      <span
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-semibold transition-all duration-300 group-hover:translate-x-0.5 ${
                          index === 0
                            ? "bg-[#1E4E8A] text-white"
                            : "border border-[#1E4E8A]/30 bg-[#F8F6F0] text-[#1E4E8A] group-hover:border-[#1E4E8A] group-hover:bg-white"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div className="pt-0.5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A5662C]">
                          {item.label}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#163460] transition-colors duration-200 group-hover:text-[#1E4E8A] sm:text-xl">
                          {item.title}
                        </h3>
                        <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {item.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delayMs={60}>
          <section
            id="why-we-exist"
            aria-labelledby="why-we-exist-heading"
            className="border-y border-slate-200 bg-white py-16 md:py-24"
          >
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
              <div className="mx-auto mb-12 max-w-4xl space-y-4 text-center sm:mb-16">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
                  Why we exist
                </p>
                <h2
                  id="why-we-exist-heading"
                  className="font-serif text-3xl font-bold tracking-tight text-[#163460] sm:text-4xl"
                >
                  Make understanding easier to see.
                </h2>
                <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#65717D] sm:text-lg">
                  AI can produce a polished answer. The harder question is
                  whether the person can explain the assumptions, connect the
                  evidence, and stand behind a conclusion. Socratic Metric is
                  designed to help make that reasoning observable.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <ScrollReveal
                      key={principle.title}
                      delayMs={index * 70}
                    >
                      <article className="group h-full border border-slate-200 bg-[#F8F6F0] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E4E8A]/30 sm:p-8">
                        <span
                          className={`mb-6 flex h-12 w-12 items-center justify-center border border-slate-200 ${principle.surface} ${principle.color}`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight text-[#163460] transition-colors group-hover:text-[#1E4E8A] sm:text-xl">
                          {principle.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#65717D] sm:text-base">
                          {principle.description}
                        </p>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>

              <div className="mt-12 border border-white/10 bg-[#163460] px-5 py-6 text-white sm:px-8 sm:py-8">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F3D09A]">
                      Issued U.S. patents
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
                      A protected approach to oral evaluation.
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      Four issued patents cover elements of the adaptive oral
                      assessment and evaluation approach.
                    </p>
                  </div>
                  <ul className="grid gap-x-8 sm:grid-cols-2">
                    {patents.map((patent, index) => (
                      <li
                        key={patent.number}
                        className="group flex items-center justify-between gap-3 border-t border-white/15 py-3 transition-colors hover:border-white/35"
                      >
                        <span className="flex items-center gap-3 text-sm font-semibold">
                          <span className="font-mono text-[10px] text-[#8CA4C2]">
                            0{index + 1}
                          </span>
                          No. {patent.number}
                        </span>
                        <span className="shrink-0 text-xs text-slate-300">
                          {patent.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <section
            id="team"
            aria-labelledby="team-heading"
            className="bg-[#F8F6F0] py-16 md:py-24"
          >
            <div className="container mx-auto max-w-7xl px-6 md:px-12">
              <div className="mb-10 text-center sm:mb-14">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
                  The people behind the work
                </p>
                <h2
                  id="team-heading"
                  className="font-serif text-3xl font-bold tracking-tight text-[#163460] sm:text-4xl"
                >
                  The team
                </h2>
              </div>

              <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
                {team.map((member, index) => (
                  <li key={member.name}>
                    <ScrollReveal delayMs={index * 70}>
                      <article className="group flex h-full flex-col items-center border border-slate-200 bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1E4E8A]/30 sm:px-8">
                        <span
                          className={`mb-5 flex h-24 w-24 items-center justify-center rounded-full border text-xl font-semibold transition-transform duration-300 group-hover:scale-[1.03] ${
                            index === 1
                              ? "border-[#163460] bg-[#163460] text-white"
                              : index === 2
                                ? "border-[#A5662C] bg-[#A5662C] text-white"
                                : "border-[#1E4E8A] bg-[#1E4E8A] text-white"
                          }`}
                          aria-hidden="true"
                        >
                          {member.initials}
                        </span>
                        <h3 className="text-lg font-semibold tracking-tight text-[#163460] sm:text-xl">
                          {member.name}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-[#1E4E8A]">
                          {member.role}
                        </p>
                      </article>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delayMs={100}>
          <section className="border-y border-white/10 bg-[#163460] py-16 text-white md:py-24">
            <div className="container mx-auto max-w-7xl px-6 text-center md:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3D09A]">
                Start a conversation
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                See what clearer evidence could mean for your team.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Choose a time for a direct walkthrough of Socratic Metric and
                its oral verification process.
              </p>
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 bg-[#E79636] px-5 text-sm font-semibold text-[#163460] transition-colors hover:bg-[#F3D09A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#163460]"
              >
                Choose a time
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
