import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen md:min-h-screen h-screen md:h-auto pt-20 pb-24 md:py-32 bg-black/20 relative overflow-hidden flex flex-col justify-center snap-start md:snap-align-none">
      <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[500px] bg-gradient-to-t from-volt-lime/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10 flex flex-col justify-center">
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-xl md:text-5xl font-display font-bold mb-2 md:mb-4 text-white">
            Let's remove the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">friction</span>.
          </h2>
        </div>

        <div className="absolute inset-0 max-w-3xl mx-auto top-[50px] md:top-[200px] bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet opacity-20 blur-[100px] -z-10 h-[300px] md:h-[600px]" />

        <div className="rounded-xl md:rounded-3xl relative shadow-2xl bg-deep-basalt/90 backdrop-blur-xl border border-white/10">
          <div className="p-4 md:p-12 rounded-xl md:rounded-3xl relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
