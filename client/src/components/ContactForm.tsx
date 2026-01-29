import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Send, Loader2, Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
  className?: string;
  selectContentClassName?: string;
}

export function ContactForm({ onSuccess, onClose, className, selectContentClassName }: ContactFormProps) {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [formLoadTime] = useState<number>(Date.now());
  const [showSuccess, setShowSuccess] = useState(false);

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; budget?: string; message: string; website?: string; formLoadTime: number }) => {
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
      setShowSuccess(true);
      reset();
      setSelectedBudget("");
      onSuccess?.();
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate({
      name: data.name,
      email: data.email,
      budget: selectedBudget,
      message: data.message,
      website: data.website,
      formLoadTime,
    });
  };

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-3xl overflow-hidden"
          >
            <div 
              className="absolute inset-0"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px) saturate(1.5)",
                WebkitBackdropFilter: "blur(20px) saturate(1.5)",
              }}
            />
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #a3e635, #84cc16, #65a30d)",
                  boxShadow: "0 8px 32px rgba(163, 230, 53, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <Check className="w-10 h-10 text-white/90" strokeWidth={3} />
                </div>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-white font-bold text-lg text-center"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
              >
                Thanks, I will be in touch tomorrow.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  setShowSuccess(false);
                  onClose?.();
                }}
                className="mt-6 px-6 py-2 rounded-full border border-white/30 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all"
                data-testid="button-close-form"
              >
                Close Form
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4 md:space-y-8", showSuccess && "invisible")}>
        <input
          type="text"
          {...register("website")}
          autoComplete="off"
          tabIndex={-1}
          className="absolute -left-[9999px] opacity-0 h-0 w-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-1 md:space-y-2">
            <label className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Name</label>
            <Input 
              {...register("name")} 
              required
              data-testid="input-name"
              className="bg-white/5 border-white/10 rounded-lg h-10 md:h-12 focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10 text-sm md:text-base" 
              placeholder="Enter your name" 
            />
          </div>
          <div className="space-y-1 md:space-y-2">
            <label className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Email</label>
            <Input 
              {...register("email")} 
              type="email"
              required
              data-testid="input-email"
              className="bg-white/5 border-white/10 rounded-lg h-10 md:h-12 focus:border-volt-lime/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10 text-sm md:text-base" 
              placeholder="name@company.com" 
            />
          </div>
        </div>

        <div className="space-y-1 md:space-y-2">
          <label className="text-[10px] md:text-xs font-mono text-orange-400 uppercase tracking-widest font-bold bg-orange-400/10 px-2 py-0.5 md:py-1 inline-block rounded-md">Project Type</label>
          <Select value={selectedBudget} onValueChange={setSelectedBudget}>
            <SelectTrigger data-testid="select-budget" className="bg-white/5 border-white/10 rounded-lg h-10 md:h-12 focus:border-orange-400/50 focus:ring-0 text-white transition-all focus:bg-white/10 text-sm md:text-base">
              <SelectValue placeholder="Select project type..." />
            </SelectTrigger>
            <SelectContent className={cn("bg-deep-basalt border-white/10 text-white rounded-xl shadow-xl", selectContentClassName)}>
              <SelectItem value="Overflow">Overflow</SelectItem>
              <SelectItem value="New project">New project</SelectItem>
              <SelectItem value="Retainer">Retainer</SelectItem>
              <SelectItem value="Not sure">Not sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1 md:space-y-2">
          <label className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">The Brief</label>
          <Textarea 
            {...register("message")} 
            required
            data-testid="textarea-message"
            className="bg-white/5 border-white/10 rounded-lg min-h-[100px] md:min-h-[150px] focus:border-orange-400/50 focus:ring-0 text-white placeholder:text-gray-500 transition-all focus:bg-white/10 resize-none text-sm md:text-base" 
            placeholder="What challenge are you trying to solve?" 
          />
        </div>

        <Button 
          type="submit" 
          disabled={contactMutation.isPending}
          data-testid="button-submit"
          className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-black hover:brightness-110 font-bold h-12 md:h-14 rounded-full text-base md:text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 disabled:opacity-70"
        >
          {contactMutation.isPending ? (
            <>Sending... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
          ) : (
            <>Start the Conversation <Send className="ml-2 w-4 h-4" /></>
          )}
        </Button>
      </form>
    </div>
  );
}
