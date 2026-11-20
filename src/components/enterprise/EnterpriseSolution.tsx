import { SectorInteractiveStory } from "@/components/industry/SectorInteractiveStory";

export function EnterpriseSolution() {
  return (
    <SectorInteractiveStory
      sector="Enterprise"
      science={{
        title: "Workforce competence is demonstrated through retrieval and explanation.",
        description:
          "The Production Effect and Generation Effect describe memory benefits associated with producing or generating information. An oral scenario can make an employee's decision process visible, while follow-up questions test whether policy can be applied beyond recall.",
        principles: [
          {
            label: "Production Effect",
            description:
              "Speaking information aloud can make it more memorable than silent reading in studied tasks. In workplace training, explanation provides observable evidence to review alongside other competency measures.",
          },
          {
            label: "Generation Effect",
            description:
              "Generating a response can strengthen memory when it is correct. Feedback and another attempt help distinguish a reasoned application of policy from a confident guess.",
          },
        ],
      }}
      product={{
        title: "Move from course completion to policy application.",
        description:
          "Use safety and compliance scenarios to let employees explain what they would do, receive targeted feedback, and refine their reasoning before a reviewer inspects the session record.",
      }}
      demo={{
        sector: "Enterprise",
        context: "EHS · Annual safety training",
        title: "Workforce Safety Protocol Assessment",
        status: "Policy set",
        objectiveLabel: "Policy objective",
        objective:
          "Explain the approved safety response to a near-miss scenario and why each escalation step matters.",
        details: [
          { label: "Reference material", value: "EHS policy · Revision 4" },
          { label: "Question mode", value: "Scenario · Adaptive follow-up" },
        ],
        verification: "Explain the procedure · apply feedback",
        evidence: "Transcript · rubric · immutable session log",
        studentPrompt:
          "A contractor reports an unguarded machine during a shift. What should happen first, and why?",
        followUpQuestion:
          "How would your response change if someone were injured and the equipment were still active?",
      }}
    />
  );
}
