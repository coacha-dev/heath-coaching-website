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
          <DialogTitle>Contact Luke Heath</DialogTitle>
          <DialogDescription>
            Get in touch with our Managing Director to discuss your training needs.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-[#faf8f5] rounded-lg p-6">
            <h3 className="text-xl font-bold text-[hsl(var(--dark-text))] mb-2">
              Luke Heath
            </h3>
            <p className="text-[hsl(var(--coacha-blue))] font-medium mb-4">
              Managing Director, Executive Coach & Trainer
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:luke@coacha.co" 
                className="flex items-center text-[hsl(var(--medium-text))] hover:text-[#0081ea] transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-[hsl(var(--coacha-blue))]" />
                luke@coacha.co
              </a>
              <a 
                href="tel:+61417588346" 
                className="flex items-center text-[hsl(var(--medium-text))] hover:text-[#0081ea] transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-[hsl(var(--coacha-blue))]" />
                +61 417 588 346
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-[hsl(var(--medium-text))] mb-4">
              Luke is available to discuss how Coacha can help your organization develop the skills needed for success.
            </p>
            <Button 
              onClick={() => onOpenChange(false)} 
              className="coacha-button"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
