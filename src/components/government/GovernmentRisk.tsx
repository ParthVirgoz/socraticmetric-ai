import { SectorRiskMatrix } from "@/components/industry/SectorRiskMatrix";

export function GovernmentRisk() {
  return (
    <SectorRiskMatrix
      sector="Government & Defense"
      title="Mission readiness cannot rest on a completed module."
      description="Agency directors and defense contractors need evidence that personnel can explain approved clearance protocols and reason through operational scenarios. Assessment must use only material approved for the system's authorization boundary."
      comparisons={[
        {
          traditional:
            "A completed module does not demonstrate that personnel can explain a clearance protocol or doctrine.",
          oralDefense:
            "Personnel reason through approved scenarios and defend their decisions aloud.",
        },
        {
          traditional:
            "Static tests can leave gaps in contingency handling and response rationale hidden.",
          oralDefense:
            "Targeted follow-up questions probe response and reasoning against approved criteria.",
        },
        {
          traditional:
            "A training record shows completion, not whether an individual can articulate the procedure.",
          oralDefense:
            "Identity-aware transcripts and evaluation records create an auditable training trail.",
        },
      ]}
    />
  );
}
