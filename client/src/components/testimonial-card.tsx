import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="heath-gradient rounded-lg shadow-lg p-6 border border-gray-100 min-w-80 flex-shrink-0">
      <div className="mb-4">
        <Quote className="h-6 w-6 text-white/60 mb-4" />
        <p className="text-white/90 italic mb-4">
          "{quote}"
        </p>
      </div>
      <div className="border-t border-white/20 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/80">
          {title}{company && `, ${company}`}
        </p>
      </div>
    </div>
  );
}
