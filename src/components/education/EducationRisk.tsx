import { SectorRiskMatrix } from "@/components/industry/SectorRiskMatrix";

export function EducationRisk() {
  return (
    <SectorRiskMatrix
      sector="Higher education"
      title="A polished submission can conceal a comprehension gap."
      description="Provosts, deans, and instructional designers need to preserve academic integrity without treating an AI detector score as proof. Canvas-connected assignments can add a live explanation to the evidence faculty review."
      comparisons={[
        {
          traditional:
            "An essay or multiple-choice score can look complete while leaving the student's retrieval and reasoning invisible.",
          oralDefense:
            "Ask the student to explain the concept, defend the answer, and respond to a follow-up.",
        },
        {
          traditional:
            "Detector flags can prompt disputes without showing what a student actually understands.",
          oralDefense:
            "Review the spoken response and transcript alongside the submitted work and course objective.",
        },
        {
          traditional:
            "Faculty spend time investigating suspected AI use after the fact.",
          oralDefense:
            "Iterative feedback and a second explanation provide a clearer record of how understanding develops.",
        },
      ]}
    />
  );
}
