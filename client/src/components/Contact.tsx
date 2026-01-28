import { useState } from "react";
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
import { Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

export function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; budget?: string; message: string }) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Transmission Received",
        description: "I'll analyze the signal and respond within 24 hours.",
      });
      reset();
      setSelectedBudget("");
    },
    onError: (error: Error) => {
      toast({
        title: "Transmission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate({
      name: data.name,
      email: data.email,
      budget: selectedBudget,
      message: data.message,
    });
  };

  return (
    <section id="contact" className="min-h-screen md:py-32 bg-black/20 relative overflow-hidden flex flex-col justify-center snap-start h-screen md:h-auto">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-volt-lime/5 to-transparent pointer-events-none" />

      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Let's remove the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">friction</span>.
          </h2>
        </div>

        <div className="absolute inset-0 max-w-3xl mx-auto top-[200px] bg-gradient-to-r from-volt-lime via-ion-cyan to-electric-violet opacity-20 blur-[100px] -z-10 h-[600px]" />

        <div className="rounded-3xl relative shadow-2xl bg-deep-basalt/90 backdrop-blur-xl border border-white/10">
          <div className="p-8 md:p-12 rounded-3xl relative h-full">
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
                <label className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold bg-orange-400/10 px-2 py-1 inline-block rounded-md">Project Budget (AUD)</label>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger className="bg-white/5 border-white/10 rounded-lg h-12 focus:border-volt-lime/50 focus:ring-0 text-white transition-all focus:bg-white/10">
                    <SelectValue placeholder="Select engagement level..." />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-basalt border-white/10 text-white rounded-xl shadow-xl">
                    <SelectItem value="Sprint ($5k+ AUD)">Sprint ($5k+ AUD)</SelectItem>
                    <SelectItem value="Project ($15k+ AUD)">Project ($15k+ AUD)</SelectItem>
                    <SelectItem value="Retainer / Strategic Audit">Retainer / Strategic Audit</SelectItem>
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
                disabled={contactMutation.isPending}
                className="w-full bg-white text-black hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-black font-bold h-14 rounded-full text-lg transition-all duration-300 shadow-xl shadow-white/5 disabled:opacity-70"
              >
                {contactMutation.isPending ? (
                  <>Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                ) : (
                  <>Start the Conversation <Send className="ml-2 w-4 h-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-full pt-16 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 flex-shrink-0">
          <h2 className="text-xl font-display font-bold text-white">
            Let's remove the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">friction</span>.
          </h2>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto pb-4">
          <div className="rounded-2xl bg-deep-basalt/90 backdrop-blur-xl border border-white/10 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">Name</label>
                  <Input 
                    {...register("name")} 
                    className="bg-white/5 border-white/10 rounded-lg h-10 text-sm focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500" 
                    placeholder="Your name" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">Email</label>
                  <Input 
                    {...register("email")} 
                    className="bg-white/5 border-white/10 rounded-lg h-10 text-sm focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500" 
                    placeholder="email@co.com" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-bold bg-orange-400/10 px-1.5 py-0.5 inline-block rounded">Budget (AUD)</label>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger className="bg-white/5 border-white/10 rounded-lg h-10 text-sm focus:border-volt-lime/50 focus:ring-0 text-white">
                    <SelectValue placeholder="Select level..." />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-basalt border-white/10 text-white rounded-xl shadow-xl">
                    <SelectItem value="Sprint ($5k+ AUD)">Sprint ($5k+)</SelectItem>
                    <SelectItem value="Project ($15k+ AUD)">Project ($15k+)</SelectItem>
                    <SelectItem value="Retainer / Strategic Audit">Retainer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">The Brief</label>
                <Textarea 
                  {...register("message")} 
                  className="bg-white/5 border-white/10 rounded-lg min-h-[80px] text-sm focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 resize-none" 
                  placeholder="What challenge are you solving?" 
                />
              </div>

              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-white text-black hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 font-bold h-12 rounded-full text-sm transition-all duration-300 shadow-xl disabled:opacity-70"
              >
                {contactMutation.isPending ? (
                  <>Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                ) : (
                  <>Start Conversation <Send className="ml-2 w-4 h-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
