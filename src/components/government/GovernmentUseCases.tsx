import { SectorUseCasesSection } from "@/components/industry/SectorUseCasesSection";

export function GovernmentUseCases() {
  return (
    <SectorUseCasesSection
      sector="Government & Defense"
      title="Readiness and protocol applications."
      description="Use structured oral assessment to test understanding of approved procedures in the contexts where personnel must apply them."
      useCases={[
        {
          title: "Pre-deployment readiness checks",
          description:
            "Have personnel explain relevant procedures and articulate their response to defined scenarios.",
        },
        {
          title: "Systems engineering and tradeoff defense",
          description:
            "Assess whether technical teams can communicate assumptions, constraints, and decision rationale.",
        },
        {
          title: "Simulation-based certification",
          description:
            "Use scenario dialogue to support initial and recurring assessments against approved criteria.",
        },
        {
          title: "Oversight and anomaly response",
          description:
            "Probe how personnel recognize exceptions, follow authorized steps, and escalate concerns.",
        },
      ]}
    />
  );
}
