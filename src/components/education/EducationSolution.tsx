import { SectorInteractiveStory } from "@/components/industry/SectorInteractiveStory";

export function EducationSolution() {
  return (
    <SectorInteractiveStory
      sector="Higher education"
      science={{
        title: "Oral production makes a learner's reasoning observable.",
        description:
          "The Production Effect and Generation Effect help explain why speaking and generating an explanation can support memory differently from silent review. Neither effect alone proves comprehension; an oral defense lets educators inspect the reasoning.",
        principles: [
          {
            label: "Production Effect",
            description:
              "Research finds that producing information aloud can improve later memory for those items compared with reading them silently. The effect supports including student production in an assessment, not treating speech as proof by itself.",
          },
          {
            label: "Generation Effect",
            description:
              "Generating an explanation from memory can support later retention when the response is correct. Targeted feedback and another attempt can help students refine incomplete reasoning.",
          },
        ],
      }}
      product={{
        title: "Connect coursework to a live, iterative defense.",
        description:
          "A Canvas-connected assignment can ground oral questions in course material, surface comprehension gaps, and let students apply feedback before submitting a final response.",
      }}
      demo={{
        sector: "Higher education",
        context: "Canvas · BIO 204 course shell",
        title: "Small Business Owners vs. Entrepreneurs",
        status: "Assignment ready",
        objectiveLabel: "Core learning objective",
        objective:
          "Assess understanding of key distinctions between entrepreneurs and small business owners, including goals, risk tolerance, and growth strategies.",
        details: [
          { label: "Reference material", value: "Lecture notes · Chapter 4" },
          { label: "Question mode", value: "Adaptive oral defense" },
        ],
        verification: "Read the prompt · explain · refine",
        evidence: "Transcript · rubric · iteration log",
        studentPrompt:
          "What distinguishes an entrepreneur's growth goals from those of a small business owner?",
        followUpQuestion:
          "How would your answer change if the owner's goal shifted from local stability to rapid scale?",
      }}
    />
  );
}
