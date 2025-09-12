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
      <DialogContent className="max-w-[380px] sm:max-w-[450px] rounded-xl border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Get in touch to discuss your executive coaching needs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 md:space-y-4">
          {/* Luke Heath */}
          <div className="rounded-lg p-4 md:p-6 bg-white border-2 border-gray-200 hover:border-[#0081ea] transition-colors group">
            <h3 className="text-base md:text-lg font-bold text-black mb-1 md:mb-2">
              Luke Heath
            </h3>
            <p className="text-gray-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
              Executive Coach & Founder
            </p>
            
            <div className="space-y-1 md:space-y-2">
              <a 
                href="mailto:luke@heathcoaching.com" 
                className="flex items-center text-[#0081ea] hover:text-[#40a3f7] transition-colors text-sm md:text-base"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-[#0081ea] flex-shrink-0" />
                luke@heathcoaching.com
              </a>
              <a 
                href="tel:+61417588346" 
                className="flex items-center text-[#0081ea] hover:text-[#40a3f7] transition-colors text-sm md:text-base"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-[#0081ea] flex-shrink-0" />
                +61 417 588 346
              </a>
            </div>
          </div>

          {/* Josh Heath */}
          <div className="rounded-lg p-4 md:p-6 bg-white border-2 border-gray-200 hover:border-[#0081ea] transition-colors group">
            <h3 className="text-base md:text-lg font-bold text-black mb-1 md:mb-2">
              Josh Heath
            </h3>
            <p className="text-gray-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
              Product Director
            </p>
            
            <div className="space-y-1 md:space-y-2">
              <a 
                href="mailto:josh@coacha.co" 
                className="flex items-center text-[#0081ea] hover:text-[#40a3f7] transition-colors text-sm md:text-base"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-[#0081ea] flex-shrink-0" />
                josh@coacha.co
              </a>
              <a 
                href="tel:+61423391445" 
                className="flex items-center text-[#0081ea] hover:text-[#40a3f7] transition-colors text-sm md:text-base"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 text-[#0081ea] flex-shrink-0" />
                +61 423 391 445
              </a>
            </div>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-xs md:text-sm text-[hsl(var(--medium-text))] leading-relaxed">
              Our team is available to discuss how Heath Coaching can help your organization develop the skills needed for success.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
