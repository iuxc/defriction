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

export function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    toast({
      title: "Message Sent",
      description: "I'll get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-deep-basalt border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Start the <span className="text-volt-lime">Conversation</span>.
          </h2>
          <p className="text-gray-400 font-mono">
            // FILTER: HIGH INTENT ONLY
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-black/20 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 uppercase">Name</label>
              <Input 
                {...register("name")} 
                className="bg-deep-basalt border-white/10 rounded-none h-12 focus:border-volt-lime focus:ring-0 text-white placeholder:text-gray-700" 
                placeholder="Jane Doe" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 uppercase">Email</label>
              <Input 
                {...register("email")} 
                className="bg-deep-basalt border-white/10 rounded-none h-12 focus:border-volt-lime focus:ring-0 text-white placeholder:text-gray-700" 
                placeholder="jane@agency.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-mono text-flux-orange uppercase font-bold">Budget (AUD)</label>
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="bg-deep-basalt border-white/10 rounded-none h-12 focus:border-volt-lime focus:ring-0 text-white">
                <SelectValue placeholder="Select a range..." />
              </SelectTrigger>
              <SelectContent className="bg-deep-basalt border-white/10 text-white rounded-none">
                <SelectItem value="sprint">Sprint ($5k+ AUD)</SelectItem>
                <SelectItem value="project">Project ($15k+ AUD)</SelectItem>
                <SelectItem value="retainer">Retainer / Strategic Audit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-400 uppercase">Message</label>
            <Textarea 
              {...register("message")} 
              className="bg-deep-basalt border-white/10 rounded-none min-h-[150px] focus:border-volt-lime focus:ring-0 text-white placeholder:text-gray-700" 
              placeholder="Tell me about the friction you're facing..." 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-volt-lime hover:text-black font-bold uppercase tracking-widest h-14 rounded-none text-lg transition-colors duration-300"
          >
            [ Transmit ]
          </Button>
        </form>
      </div>
    </section>
  );
}
