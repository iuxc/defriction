import { ContactForm } from "@/components/ContactForm";
import { ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-[100dvh] md:min-h-screen pt-20 pb-24 md:py-32 contact-section relative overflow-hidden flex flex-col justify-center">
      <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[500px] bg-gradient-to-t from-volt-lime/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10 flex flex-col justify-center">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-xl md:text-5xl font-display font-bold mb-2 md:mb-4 text-white">
            Let's remove the <span className="text-gradient-orange">friction</span>.
          </h2>
          <p className="text-gray-300 text-sm md:text-lg font-light">
            Tell me what you're working on—or book a call if you'd rather talk it through.
          </p>
        </div>

        <div className="absolute inset-0 max-w-3xl mx-auto top-[50px] md:top-[200px] bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet opacity-20 blur-[100px] -z-10 h-[300px] md:h-[600px]" />

        <div className="rounded-xl md:rounded-3xl relative shadow-2xl bg-deep-basalt/90 backdrop-blur-xl border border-white/10">
          <div className="p-4 md:p-12 rounded-xl md:rounded-3xl relative">
            <ContactForm />

            <div className="mt-6 text-center">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-volt-lime transition-colors text-sm font-medium"
                data-testid="link-calendly"
              >
                Or book a call directly
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
