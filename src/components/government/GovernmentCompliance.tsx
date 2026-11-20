import { SectorEvidenceSection } from "@/components/industry/SectorEvidenceSection";

export function GovernmentCompliance() {
  return (
    <SectorEvidenceSection
      sector="Government & Defense"
      title="Make mission-readiness evidence reviewable and controlled."
      description="Build tamper-evident training audit trails from approved material. Classified information must only be handled in systems explicitly authorized for its classification."
      points={[
        {
          title: "Assess approved clearance protocols",
          description:
            "Use agency-authorized learning objectives and reference material to evaluate protocol comprehension.",
        },
        {
          title: "Keep immutable training audit logs",
          description:
            "Make transcripts, rubric results, and session events available for authorized oversight.",
        },
        {
          title: "Respect handling and access controls",
          description:
            "Align retention, access, and deployment with agency handling requirements and authorization boundaries.",
        },
      ]}
    />
  );
}
