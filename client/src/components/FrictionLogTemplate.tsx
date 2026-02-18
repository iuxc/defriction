import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, AlertCircle, Info } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface PersonaField {
  label: string;
  value: string;
  fullWidth?: boolean;
}

interface FrictionPoint {
  severity: "error" | "warning";
  title: string;
  description: string;
}

interface StepData {
  title: string;
  finding: string;
  url?: string;
  observation?: string;
  observations?: string[];
  frictionPoints?: FrictionPoint[];
}

interface SummaryItem {
  title: string;
  description: string;
}

interface FrictionLogData {
  title: string;
  subtitle: string;
  glowColor?: string;
  persona: PersonaField[];
  steps: StepData[];
  majorFriction: SummaryItem[];
  missingInfo: SummaryItem[];
}

interface FrictionLogTemplateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: FrictionLogData;
}

function FrictionCallout({ point }: { point: FrictionPoint }) {
  const isError = point.severity === "error";
  return (
    <div className={cn(
      "p-6 rounded-xl flex gap-4",
      isError ? "callout-friction" : "callout-warning"
    )}>
      <div className="pt-1 shrink-0">
        {isError
          ? <AlertCircle className="w-5 h-5 text-red-400" />
          : <AlertCircle className="w-5 h-5 text-orange-400" />
        }
      </div>
      <div>
        <h4 className={cn("font-bold mb-2", isError ? "text-red-400" : "text-orange-400")}>
          {point.title}
        </h4>
        <p className="text-gray-300 text-sm">{point.description}</p>
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function FrictionLogTemplate({ open, onOpenChange, data }: FrictionLogTemplateProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-fit max-w-4xl h-[90vh] p-0 gap-0 bg-deep-basalt text-gray-100 border border-border overflow-hidden flex flex-col mx-auto shadow-2xl rounded-3xl">
        <div className="relative z-10 flex-none p-8 border-b border-border bg-deep-basalt text-gray-100">
          <div className="absolute right-6 top-6">
            <button
              onClick={() => onOpenChange(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <DialogHeader className="text-left pr-10">
            <DialogTitle className="text-3xl font-display font-bold text-white mb-2">
              {data.title}
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-gray-400">
              {data.subtitle}
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8 max-w-3xl mx-auto pb-24">

            {/* Persona Profile */}
            <section className="bg-card-solid p-8 rounded-3xl border border-border text-white shadow-xl mb-16 relative overflow-hidden group">
              <div
                className={cn(
                  "absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-all duration-700",
                  data.glowColor || "bg-ion-cyan/20 group-hover:bg-ion-cyan/30"
                )}
              />
              <h3 className="relative z-10 text-xs font-bold uppercase tracking-widest text-volt-lime mb-6 flex items-center gap-2">
                Persona Profile
              </h3>
              <div className="relative z-10 grid md:grid-cols-2 gap-y-8 gap-x-12">
                {data.persona.map((field) => (
                  <div key={field.label} className={field.fullWidth ? "md:col-span-2" : ""}>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{field.label}</div>
                    <div className="text-white font-medium text-lg leading-relaxed">{field.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Journey Timeline */}
            <div className="space-y-8 px-8">
              {data.steps.map((step, index) => (
                <div key={index}>
                  {index > 0 && <hr className="border-border mb-8" />}
                  <section className="grid grid-cols-[max-content_1fr] gap-x-4">
                    <div className="pt-1">
                      <span className="bg-gray-100 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                        STEP {index + 1}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        {step.url ? (
                          <a
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 font-mono hover:text-ion-cyan hover:underline block mt-1"
                          >
                            {step.url}
                          </a>
                        ) : (
                          <div className="text-sm text-gray-400 font-mono mt-1">
                            Finding: {step.finding}
                          </div>
                        )}
                      </div>
                      <div className="space-y-6">
                        {step.observation && (
                          <div>
                            <h4 className="font-bold text-gray-200 mb-2">Observation</h4>
                            <p className="text-gray-400 text-sm">{step.observation}</p>
                          </div>
                        )}
                        {step.observations && (
                          <div>
                            <h4 className="font-bold text-gray-200 mb-2">Observations</h4>
                            {step.observations.length === 1 ? (
                              <p className="text-gray-400 text-sm">{step.observations[0]}</p>
                            ) : (
                              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                                {step.observations.map((obs, i) => (
                                  <li key={i}>{obs}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                        {step.frictionPoints?.map((point, i) => (
                          <FrictionCallout key={i} point={point} />
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              ))}
            </div>

            <div className="h-0" />

            {/* Summary Section */}
            <div className="bg-card-solid border-t border-border -mx-8 -mb-24 mt-12 pb-12">
              <div className="p-8 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="md:pr-8 py-4 md:py-0">
                    <div className="flex gap-4">
                      <div className="pt-1 shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-red-400 mb-4">Major Friction Points</h3>
                        <ul className="space-y-4">
                          {data.majorFriction.map((item) => (
                            <li key={item.title} className="text-sm text-gray-300">
                              <strong className="block font-semibold text-red-400 mb-1">{item.title}</strong>
                              {item.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-8 py-4 md:py-0">
                    <div className="flex gap-4">
                      <div className="pt-1 shrink-0">
                        <Info className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-200 mb-4">Key Information Missing</h3>
                        <ul className="space-y-4">
                          {data.missingInfo.map((item) => (
                            <li key={item.title} className="text-sm text-gray-300">
                              <strong className="block font-semibold text-gray-200 mb-1">{item.title}</strong>
                              {item.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
