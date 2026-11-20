import { SectorUseCasesSection } from "@/components/industry/SectorUseCasesSection";

export function EducationUseCases() {
  return (
    <SectorUseCasesSection
      sector="Higher education"
      title="Make cognitive verification part of everyday teaching."
      description="Apply oral assessment where authentic explanation, individual understanding, and academic integrity matter most."
      useCases={[
        {
          title: "Capstone and thesis defenses",
          description:
            "Evaluate whether students can explain their research, methods, and conclusions in their own words.",
        },
        {
          title: "Professional readiness assessments",
          description:
            "Assess reasoning in high-stakes scenarios where students must defend decisions without a script.",
        },
        {
          title: "High-risk assignment spot-checks",
          description:
            "Verify comprehension behind important written submissions through a live verbal defense.",
        },
        {
          title: "Collaborative project debriefs",
          description:
            "Explore individual contributions and conceptual understanding after group work.",
        },
      ]}
    />
  );
}
