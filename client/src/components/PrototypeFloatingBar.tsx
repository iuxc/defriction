import { FooterContact } from "@/components/FooterContact";
import { MonashSwitcher } from "@/components/MonashSwitcher";

type PrototypePage = "wireframe" | "hifi" | "docs";

interface PrototypeFloatingBarProps {
  page: PrototypePage;
}

const PAGE_CONFIG: Record<PrototypePage, {
  subtitle: string;
  stickyClassName: string;
  infoContent?: React.ReactNode;
}> = {
  wireframe: {
    subtitle: "// Low-Fidelity Wireframe",
    stickyClassName: "!bg-deep-basalt/85 !backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10",
    infoContent: (
      <>
        <p>Structure before polish. This clickable wireframe tests the flow and logic without the distraction of visual design.</p>
        <p>If something doesn't work here, no amount of styling will fix it.</p>
      </>
    ),
  },
  hifi: {
    subtitle: "// High-Fidelity UI",
    stickyClassName: "shadow-2xl",
  },
  docs: {
    subtitle: "// Information Architecture",
    stickyClassName: "!bg-deep-basalt/85 !backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10",
    infoContent: (
      <>
        <p>This is where the logic lives. Before any pixels, I mapped the decision tree: what questions to ask, in what order, and how each answer routes the user toward their pathway.</p>
        <p>If the high-fidelity demo is the "what," this is the "why."</p>
      </>
    ),
  },
};

export function PrototypeFloatingBar({ page }: PrototypeFloatingBarProps) {
  const config = PAGE_CONFIG[page];

  return (
    <div className="defriction-brand-scope">
      <FooterContact
        title={
          <span className="flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => e.stopPropagation()}
              style={{ textShadow: "none" }}
              className="pointer-events-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hover:opacity-80 transition-opacity"
            >
              defriction
            </a>
            <span className="text-gray-400 font-normal text-base font-mono">
              {config.subtitle}
            </span>
            <MonashSwitcher />
          </span>
        }
        backLink="/work/monash"
        alwaysSticky={true}
        stickyClassName={config.stickyClassName}
        monashSwitcher={true}
        infoContent={config.infoContent}
      />
    </div>
  );
}
