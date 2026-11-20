import { SectorInteractiveStory } from "@/components/industry/SectorInteractiveStory";

export function SciencePlatform() {
  return (
    <SectorInteractiveStory
      sector="Cognitive science"
      science={{
        title: "Translate learning effects into observable assessment.",
        description:
          "Research on oral production and generation informs why a learner should retrieve and explain material. SocraticMetric pairs that production with an adaptive follow-up, making the reasoning available for review rather than assuming a memory effect proves mastery.",
        principles: [
          {
            label: "Production Effect",
            description:
              "Producing material aloud can improve later memory for it compared with silent reading in studied tasks. In an assessment, spoken production makes the learner's explanation observable.",
          },
          {
            label: "Generation Effect",
            description:
              "Generating a response can improve later memory when the response is correct. Adaptive feedback can help learners identify and refine incomplete explanations.",
          },
        ],
      }}
      product={{
        title: "See the learner and educator workflows side by side.",
        description:
          "An educator grounds the assignment in reference material; a learner reads, explains, receives feedback, and refines a response. The resulting transcript and rubric support a structured review.",
      }}
      demo={{
        sector: "Cognitive science",
        context: "Research methods · Demo session",
        title: "Oral Learning Evidence",
        status: "Demo ready",
        objectiveLabel: "Assessment objective",
        objective:
          "Explain the evidence behind a claim and distinguish a supported finding from an overgeneralized conclusion.",
        details: [
          { label: "Reference material", value: "Production · Generation" },
          { label: "Question mode", value: "Explain · follow-up" },
        ],
        verification: "Explain the finding in your own words",
        evidence: "Response · transcript · rubric",
        studentPrompt:
          "How do the Production Effect and Generation Effect differ?",
        followUpQuestion:
          "What limitation should an educator keep in mind when applying these findings?",
      }}
    />
  );
}
