import { FrictionLogTemplate } from "./FrictionLogTemplate";

interface FrictionLogModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const userAData = {
  title: "User A Friction Log",
  subtitle: "TAFE Diploma of Nursing Graduate",
  glowColor: "bg-ion-cyan/20 group-hover:bg-ion-cyan/30",
  persona: [
    { label: "Background", value: "TAFE graduate with a Diploma of Nursing." },
    { label: "Goal", value: "Enter the Bachelor of Nursing at Monash University." },
    {
      label: "Mental Model",
      value: "\u201CI have a professional qualification; I want to know exactly how much credit I get and how to apply.\u201D",
      fullWidth: true,
    },
  ],
  steps: [
    {
      title: "Monash University Homepage",
      finding: "The search bar is the primary entry point for course information.",
      observation:
        "No specific \u201CPathways\u201D or \u201CTAFE\u201D entry point is visible on the main landing page; navigation assumes a standard starting point.",
    },
    {
      title: "Bachelor of Nursing Course Page",
      finding: "Page displays the ATAR (76.85) and Monash Guarantee (70) for the 2026 intake.",
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction: ATAR-centric Interface",
          description:
            "The interface is ATAR-centric. A TAFE graduate must scroll past significant high-school-specific data to find the \u201CVET\u201D entry requirements section.",
        },
      ],
    },
    {
      title: "VET/TAFE Entry Section",
      finding: "Notes that entry into the second year is possible with a 75% average and Ahpra registration.",
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction: Specialized Acronyms",
          description:
            "High use of specialized acronyms (Ahpra, NMBA, VTAC) without inline definitions or tooltips for students coming from a TAFE environment.",
        },
      ],
    },
    {
      title: "Credit Search Tool",
      finding: "User attempts to calculate how many units their specific TAFE Diploma will waive.",
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction: Database Gaps",
          description:
            "A search for \u201CDiploma of Nursing\u201D often returns no results for specific regional TAFE providers, leaving the user unable to calculate exact savings.",
        },
      ],
    },
    {
      title: "Nursing Pathways Page",
      finding: "Suggests the Diploma of Tertiary Studies (DoTS) as a primary pathway.",
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction: Conflicting Advice",
          description:
            "This page suggests TAFE students should take the DoTS pathway (adding a year), whereas the course page says they can enter Year 2 directly.",
        },
      ],
    },
    {
      title: "VTAC Course Search (External)",
      finding: "User leaves the Monash site to view official application requirements.",
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction: Critical Exclusions",
          description:
            "Discovers critical exclusions\u2014such as competency-based assessments without grades not being accepted\u2014that were not stated on the Monash course page.",
        },
      ],
    },
  ],
  majorFriction: [
    {
      title: "Conflicting Advice",
      description:
        "The website contradicts itself on whether a TAFE graduate needs a \u201CPathways\u201D year (DoTS) or can apply for direct entry.",
    },
    {
      title: "Credit Dead-ends",
      description:
        "The search tool lacks data for common TAFE providers, making it impossible to confirm the \u201CYear 2\u201D entry promise.",
    },
  ],
  missingInfo: [
    {
      title: "Specific Unit Credit",
      description: "No clear list of which units are waived for a standard Diploma of Nursing.",
    },
    {
      title: "Exclusion Clarity",
      description:
        "Lack of early warning regarding \u201Ccompetency-based\u201D (ungraded) TAFE results.",
    },
  ],
};

export function FrictionLogModal({ open, onOpenChange }: FrictionLogModalProps) {
  return <FrictionLogTemplate open={open} onOpenChange={onOpenChange} data={userAData} />;
}
