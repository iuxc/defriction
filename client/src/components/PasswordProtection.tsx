import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage on mount
    const auth = localStorage.getItem("defriction_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "defriction") {
      localStorage.setItem("defriction_auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (loading) return null;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-deep-basalt flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
              <Lock className="w-8 h-8 text-volt-lime" />
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Restricted Access</h1>
            <p className="text-gray-400">Enter authorization code to proceed.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`bg-black/20 border-white/10 h-14 text-center text-lg tracking-widest text-white placeholder:text-gray-600 focus:border-volt-lime/50 transition-all ${error ? 'border-red-500 animate-shake' : ''}`}
                  autoFocus
                />
              </div>
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs text-center font-mono mt-2"
                >
                  ACCESS DENIED. TRY "defriction"
                </motion.p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-volt-lime hover:text-black font-bold h-12 rounded-full transition-all duration-300"
            >
              Authenticate <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Secured by Defriction Design
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
