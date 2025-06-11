import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 min-w-80 flex-shrink-0">
      <div className="mb-4">
        <Quote className="h-6 w-6 text-gray-300 mb-4" />
        <p className="text-[hsl(var(--medium-text))] italic mb-4">
          "{quote}"
        </p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-[hsl(var(--dark-text))]">{name}</p>
        <p className="text-sm text-[hsl(var(--light-text))]">
          {title}{company && `, ${company}`}
        </p>
      </div>
    </div>
  );
}
