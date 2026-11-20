import { SectorUseCasesSection } from "@/components/industry/SectorUseCasesSection";

export function EnterpriseUseCases() {
  return (
    <SectorUseCasesSection
      sector="Enterprise"
      title="Workforce readiness and compliance applications."
      description="Assess applied understanding wherever a team needs to demonstrate more than course completion."
      useCases={[
        {
          title: "Policy comprehension and regulatory frameworks",
          description:
            "Ask employees to explain how internal policies apply to realistic work situations.",
        },
        {
          title: "Safety protocol readiness",
          description:
            "Assess whether employees can reason through approved safety procedures and escalation paths.",
        },
        {
          title: "Model risk and ethical decision-making",
          description:
            "Probe whether teams understand responsible-use principles and escalation criteria.",
        },
        {
          title: "Cybersecurity and operational readiness",
          description:
            "Evaluate how employees reason through security awareness and response procedures.",
        },
      ]}
    />
  );
}
