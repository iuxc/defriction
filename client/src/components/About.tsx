export function About() {
  const hooks = [
    "The Runner (Discipline)",
    "The Flautist (Precision)",
    "The AVP (Stakeholder Whisperer)"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-electric-violet/5 to-transparent pointer-events-none" />
       
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="font-mono text-flux-orange mb-4 text-sm tracking-widest uppercase">
            // Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            The person behind<br /> the pixels.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
            I lead Digital Strategy for the University of Oregon by day. I Defriction by night. 
            With 15+ years experience, I bridge the gap between complex institutional requirements 
            and modern digital expectations.
          </p>
          
          <ul className="space-y-4 font-mono text-sm md:text-base">
            {hooks.map((hook) => (
              <li key={hook} className="flex items-center text-ion-cyan">
                <span className="mr-4 text-gray-600">&gt;</span>
                {hook}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative h-full min-h-[400px] border border-white/10 bg-black/20 p-8 flex items-center justify-center">
          {/* Abstract representation of "The Person" - could be an image, using a placeholder grid for now */}
          <div className="text-center">
             <div className="inline-block border border-volt-lime p-8 mb-4">
                <div className="w-32 h-32 bg-volt-lime/10 rounded-full flex items-center justify-center text-volt-lime text-4xl font-bold">
                  D
                </div>
             </div>
             <p className="font-mono text-xs text-gray-500">AVATAR_RENDER_Sequence.init()</p>
          </div>
        </div>
      </div>
    </section>
  );
}
