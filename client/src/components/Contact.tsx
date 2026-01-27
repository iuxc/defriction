import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    toast({
      title: "Transmission Received",
      description: "I'll analyze the signal and respond within 24 hours.",
    });
    reset();
  };

  return (
    <section id="contact" className="min-h-screen py-32 bg-black/20 relative overflow-hidden flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-volt-lime/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Let's remove the <span className="text-flux-orange">friction</span>.
          </h2>
          <p className="text-gray-400 text-lg">
            High intent inquiries only.
          </p>
        </div>

        {/* Gradient Glow */}
        <div className="absolute inset-0 max-w-3xl mx-auto top-[200px] bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet opacity-20 blur-[100px] -z-10 h-[600px]" />

        {/* Gradient Border Container */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet relative shadow-2xl">
          <div className="p-8 md:p-12 rounded-3xl relative h-full bg-deep-basalt/90 backdrop-blur-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Name</label>
                  <Input 
                    {...register("name")} 
                    className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Email</label>
                  <Input 
                    {...register("email")} 
                    className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10" 
                    placeholder="name@company.com" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-volt-lime uppercase tracking-widest font-bold bg-white/5 px-2 py-1 inline-block rounded-sm">Project Budget (AUD)</label>
                <Select onValueChange={(value) => console.log(value)}>
                  <SelectTrigger className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white transition-all focus:bg-white/10">
                    <SelectValue placeholder="Select engagement level..." />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-basalt border-white/10 text-white rounded-xl shadow-xl">
                    <SelectItem value="sprint">Sprint ($5k+ AUD)</SelectItem>
                    <SelectItem value="project">Project ($15k+ AUD)</SelectItem>
                    <SelectItem value="retainer">Retainer / Strategic Audit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">The Brief</label>
                <Textarea 
                  {...register("message")} 
                  className="bg-white/5 border-white/10 rounded-lg min-h-[150px] focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10 resize-none" 
                  placeholder="What challenge are you trying to solve?" 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-volt-lime hover:text-black font-bold h-14 rounded-xl text-lg transition-all duration-300 shadow-xl shadow-white/5"
              >
                Send Transmission <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
