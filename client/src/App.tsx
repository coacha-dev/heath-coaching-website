import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home";
import OneToOneCoaching from "@/pages/one-to-one-coaching";
import WinningCareers from "@/pages/workshops/winning-careers";
import TripleIntelligence from "@/pages/workshops/triple-intelligence";
import ValueCentredSelling from "@/pages/workshops/value-centred-selling";
import Team from "@/pages/team";
import Testimonials from "@/pages/testimonials";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/one-to-one-coaching" component={OneToOneCoaching} />
      <Route path="/workshops/winning-careers" component={WinningCareers} />
      <Route path="/workshops/triple-intelligence" component={TripleIntelligence} />
      <Route path="/workshops/value-centred-selling" component={ValueCentredSelling} />
      <Route path="/team" component={Team} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
