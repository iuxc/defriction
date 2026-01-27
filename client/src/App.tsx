import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import MonashCaseStudy from "@/pages/MonashCaseStudy";
import NotFound from "@/pages/not-found";
import { ScrollToTop } from "@/components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work/monash" component={MonashCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

import { PasswordProtection } from "@/components/PasswordProtection";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PasswordProtection>
          <ScrollToTop />
          <Toaster />
          <Router />
        </PasswordProtection>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
