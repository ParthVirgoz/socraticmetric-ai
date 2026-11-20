import { SectorEvidenceSection } from "@/components/industry/SectorEvidenceSection";

export function EnterpriseCompliance() {
  return (
    <SectorEvidenceSection
      sector="Enterprise"
      title="Give compliance teams a record they can inspect."
      description="For CHROs and Chief Compliance Officers, connect workforce skill verification to risk mitigation and regulatory audit preparation."
      points={[
        {
          title: "Immutable, transcript-backed audit logs",
          description:
            "Retain the oral response, transcript, rubric result, and feedback history for authorized review.",
        },
        {
          title: "Internal safety protocol verification",
          description:
            "Compare employee explanations with approved procedures and escalation criteria.",
        },
        {
          title: "Regulatory audit preparation",
          description:
            "Organize consistent assessment evidence for compliance, risk, and training reviewers.",
        },
      ]}
    />
  );
}
