import { SectorEvidenceSection } from "@/components/industry/SectorEvidenceSection";

export function EducationCompliance() {
  return (
    <SectorEvidenceSection
      sector="Higher education"
      title="Close the loop from LMS assignment to reviewable evidence."
      description="Give provosts, deans, and instructional designers an audit trail that complements Canvas workflows while preserving the student's response, rubric, and iterative feedback history."
      points={[
        {
          title: "Immutable, transcript-backed session logs",
          description:
            "Review the oral response alongside the rubric, feedback, and iteration history.",
        },
        {
          title: "Evidence of student comprehension",
          description:
            "Inspect how a student explains a concept and responds to a follow-up, not only the submitted document.",
        },
        {
          title: "Canvas-connected course context",
          description:
            "Keep assignments and outcomes connected to LMS workflows, with access and retention configured to institutional policy.",
        },
      ]}
    />
  );
}
