import { SectorInteractiveStory } from "@/components/industry/SectorInteractiveStory";

export function GovernmentSolution() {
  return (
    <SectorInteractiveStory
      sector="Government & Defense"
      science={{
        title: "Mission readiness requires more than recognizing a procedure.",
        description:
          "Production and generation effects help explain why speaking and retrieving information can create stronger memory traces than passive review. Oral scenario responses let evaluators inspect how personnel apply approved guidance; they do not replace formal qualification or authorization.",
        principles: [
          {
            label: "Production Effect",
            description:
              "Producing material aloud can improve memory for it compared with silent reading in studied tasks. In training, a spoken explanation adds an observable signal for review rather than relying only on a completion mark.",
          },
          {
            label: "Generation Effect",
            description:
              "Generating a response from memory can support later recall when accurate. Structured feedback can identify uncertainty and prompt a more complete explanation.",
          },
        ],
      }}
      product={{
        title: "Assess approved procedures with an auditable practice session.",
        description:
          "Agency directors and defense contractors can evaluate mission-readiness reasoning against authorized training objectives. Use only material approved for the deployment; do not enter classified information unless the system is explicitly approved for that classification.",
      }}
      demo={{
        sector: "Government & Defense",
        context: "Personnel readiness · Unclassified demo",
        title: "Clearance Protocol Assessment",
        status: "Demo protocol",
        objectiveLabel: "Readiness objective",
        objective:
          "Explain approved access-control and incident-response steps using authorized training material.",
        details: [
          { label: "Reference material", value: "Approved unclassified directive" },
          { label: "Question mode", value: "Scenario · Oral defense" },
        ],
        verification: "Reason through a live scenario",
        evidence: "Transcript · rubric · immutable session log",
        studentPrompt:
          "A badge fails at a controlled entry point. What is the approved first action, and who should be notified?",
        followUpQuestion:
          "How should the response change if a tailgating attempt is reported?",
      }}
    />
  );
}
