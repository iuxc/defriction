import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PasswordProtection } from "@/components/PasswordProtection";

const MonashCaseStudy = lazy(() => import("@/pages/MonashCaseStudy"));
const LorboCaseStudy = lazy(() => import("@/pages/LorboCaseStudy"));
const MonashPrototypeWrapper = lazy(() => import("@/pages/MonashPrototype"));

function Router() {
  return (
    <Suspense>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work/monash" component={MonashCaseStudy} />
        <Route path="/work/lorbo" component={LorboCaseStudy} />
        <Route path="/monash/prototype/*?" component={MonashPrototypeWrapper} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <PasswordProtection>
            <ScrollToTop />
            <Toaster />
            <Router />
          </PasswordProtection>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
