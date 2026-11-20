import { SectorRiskMatrix } from "@/components/industry/SectorRiskMatrix";

export function EnterpriseRisk() {
  return (
    <SectorRiskMatrix
      sector="Enterprise"
      title="Checkbox completion is not workforce skill verification."
      description="For CHROs and Chief Compliance Officers, a completed course does not establish that an employee can apply an internal safety protocol or explain a compliance decision under audit."
      comparisons={[
        {
          traditional:
            "LMS completion and annual attestations record participation, not applied policy knowledge.",
          oralDefense:
            "Employees explain how they would respond to a realistic safety or compliance scenario.",
        },
        {
          traditional:
            "Multiple-choice recall can miss whether staff recognize risk and select the right action.",
          oralDefense:
            "Adaptive follow-ups probe the decision rationale and surface gaps for feedback.",
        },
        {
          traditional:
            "Audit files often show a completion status but little evidence of employee reasoning.",
          oralDefense:
            "Transcript, rubric, and session details make competency evidence reviewable.",
        },
      ]}
    />
  );
}
