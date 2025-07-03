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
          <div className="rounded-lg p-6 border border-gray-200 hover:border-[#0081ea] transition-colors group" style={{
            background: 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)'
          }}>
            <h3 className="text-lg font-bold text-white mb-2">
              Luke Heath
            </h3>
            <p className="text-white/90 font-medium mb-4">
              Executive Coach & Founder
            </p>
            
            <div className="space-y-2">
              <a 
                href="mailto:luke@heathcoaching.com" 
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 text-white" />
                luke@heathcoaching.com
              </a>
              <a 
                href="tel:+61417588346" 
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 text-white" />
                +61 417 588 346
              </a>
            </div>
          </div>

          {/* Josh Heath */}
          <div className="rounded-lg p-6 border border-gray-200 hover:border-[#0081ea] transition-colors group" style={{
            background: 'linear-gradient(90deg, #0081ea 0%, #40a3f7 100%)'
          }}>
            <h3 className="text-lg font-bold text-white mb-2">
              Josh Heath
            </h3>
            <p className="text-white/90 font-medium mb-4">
              Product Director
            </p>
            
            <div className="space-y-2">
              <a 
                href="mailto:josh@coacha.co" 
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 text-white" />
                josh@coacha.co
              </a>
              <a 
                href="tel:+61423391445" 
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 text-white" />
                +61 423 391 445
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
