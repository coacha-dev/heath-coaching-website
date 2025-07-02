import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Get in touch to discuss your executive coaching needs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Luke Heath */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[hsl(var(--heath-blue))] transition-colors group">
            <h3 className="text-lg font-bold text-[hsl(var(--dark-text))] mb-2">
              Luke Heath
            </h3>
            <p className="text-[hsl(var(--heath-blue))] font-medium mb-4">
              Executive Coach & Founder
            </p>
            
            <div className="space-y-2">
              <a 
                href="mailto:luke@heathcoaching.com" 
                className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--heath-blue))] transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 text-[hsl(var(--medium-text))] group-hover:text-[hsl(var(--heath-blue))] transition-colors" />
                <span className="group-hover:text-[hsl(var(--heath-blue))] transition-colors">luke@heathcoaching.com</span>
              </a>
              <a 
                href="tel:+61417588346" 
                className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--heath-blue))] transition-colors group"
              >
                <Phone className="w-4 h-4 mr-3 text-[hsl(var(--medium-text))] group-hover:text-[hsl(var(--heath-blue))] transition-colors" />
                <span className="group-hover:text-[hsl(var(--heath-blue))] transition-colors">+61 417 588 346</span>
              </a>
            </div>
          </div>

          {/* Josh Heath */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-[hsl(var(--heath-blue))] transition-colors group">
            <h3 className="text-lg font-bold text-[hsl(var(--dark-text))] mb-2">
              Josh Heath
            </h3>
            <p className="text-[hsl(var(--heath-blue))] font-medium mb-4">
              Product Director
            </p>
            
            <div className="space-y-2">
              <a 
                href="mailto:josh@coacha.co" 
                className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--heath-blue))] transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 text-[hsl(var(--medium-text))] group-hover:text-[hsl(var(--heath-blue))] transition-colors" />
                <span className="group-hover:text-[hsl(var(--heath-blue))] transition-colors">josh@coacha.co</span>
              </a>
              <a 
                href="tel:+61423391445" 
                className="flex items-center text-[hsl(var(--medium-text))] hover:text-[hsl(var(--heath-blue))] transition-colors group"
              >
                <Phone className="w-4 h-4 mr-3 text-[hsl(var(--medium-text))] group-hover:text-[hsl(var(--heath-blue))] transition-colors" />
                <span className="group-hover:text-[hsl(var(--heath-blue))] transition-colors">+61 423 391 445</span>
              </a>
            </div>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-sm text-[hsl(var(--medium-text))]">
              Our team is available to discuss how HeathCoaching can help your organization develop the skills needed for success.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
