import { FrictionLogTemplate } from "./FrictionLogTemplate";

interface FrictionLogModalBProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const userBData = {
  title: "User B Friction Log",
  subtitle: "Year 12 Student with Low ATAR (60.00)",
  glowColor: "bg-volt-lime/10 group-hover:bg-volt-lime/20",
  persona: [
    { label: "Background", value: "Victorian Year 12 student" },
    { label: "ATAR", value: "60.00 (below typical entry)" },
    {
      label: "Goal",
      value: "Find a pathway to a Monash degree via a Monash College diploma.",
      fullWidth: true,
    },
  ],
  steps: [
    {
      title: "Monash University Homepage",
      finding: "Standard entry point for all prospective domestic students.",
      url: "https://www.monash.edu",
      observations: [
        "The site provides a standard entry point for all prospective domestic students.",
        "User arrives looking for information on alternative entry methods.",
      ],
    },
    {
      title: "Pathway Information Search",
      finding: "User attempts to navigate to specialized pathway pages via the \u201CStudy\u201D menu.",
      url: "https://www.monash.edu/study",
      observations: [
        "User attempts to navigate to specialized pathway pages via the \u201CStudy\u201D menu.",
      ],
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction Point: Broken Links",
          description:
            "Multiple 404 errors were encountered when trying to access /study/how-to-apply/pathways, forcing a return to Google.",
        },
      ],
    },
    {
      title: "Entry Pathways for Domestic Students",
      finding: "A landing page that lists DoTS, DoHE, and Monash College Diplomas.",
      url: "https://www.monash.edu/study/courses/entry-pathways-domestic",
      observations: [
        "A landing page that lists DoTS, DoHE, and Monash College Diplomas.",
      ],
      frictionPoints: [
        {
          severity: "warning" as const,
          title: "Friction Point: Information Overload",
          description:
            "No \u201CPathways Calculator\u201D exists to help a student with a 60.00 ATAR choose between the different diploma types.",
        },
      ],
    },
    {
      title: "Monash College ATAR Requirements",
      finding: "Requirements for Part 1 and Part 2 diplomas are clearly listed by ATAR score.",
      url: "https://www.monashcollege.edu.au/study/courses/diplomas/entry-requirements",
      observations: [
        "User moves to the College-specific page to check entry scores.",
        "Requirements for Part 1 and Part 2 diplomas are clearly listed by ATAR score.",
      ],
    },
    {
      title: "Destination Degrees & Scores",
      finding: "Table showing the required \u201CPass\u201D or \u201CCredit\u201D average needed to move into the second year of a degree.",
      url: "https://www.monashcollege.edu.au/study/courses/diplomas/destination-degrees",
      observations: [
        "Table showing the required \u201CPass\u201D or \u201CCredit\u201D average needed to move into the second year of a degree.",
      ],
      frictionPoints: [
        {
          severity: "error" as const,
          title: "Friction Point: Navigation Complexity",
          description:
            "Extensive \u201CDropdown\u201D menus make it difficult to compare requirements across different degree options.",
        },
      ],
    },
    {
      title: "Application Process",
      finding: "Instructions for applying through VTAC for the February intake.",
      url: "https://www.monashcollege.edu.au/study/how-to-apply",
      observations: [
        "Instructions for applying through VTAC for the February intake.",
      ],
      frictionPoints: [
        {
          severity: "warning" as const,
          title: "Friction Point: Administrative Ambiguity",
          description:
            "No \u201CPathways Calculator\u201D exists to help a student with a 60.00 ATAR choose between the different diploma types.",
        },
      ],
    },
  ],
  majorFriction: [
    {
      title: "Site Reliability",
      description:
        "404 errors on high-intent \u201CPathways\u201D URLs create an immediate sense of distrust.",
    },
    {
      title: "Navigation Fatigue",
      description:
        "\u201CDropdown hell\u201D in the destination degree section makes it hard to map out a multi-year plan.",
    },
  ],
  missingInfo: [
    {
      title: "Total Cost",
      description:
        "Exact fee structures for the pathway year are not displayed alongside the course info.",
    },
    {
      title: "Campus Logistics",
      description:
        "Lack of prominence regarding the Docklands location, which may surprise students expecting Clayton or Peninsula.",
    },
  ],
};

export function FrictionLogModalB({ open, onOpenChange }: FrictionLogModalBProps) {
  return <FrictionLogTemplate open={open} onOpenChange={onOpenChange} data={userBData} />;
}
