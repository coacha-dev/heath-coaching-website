import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  theme: "blue" | "purple" | "red";
  href: string;
}

const themeConfig = {
  blue: {
    color: "#0081ea",
  },
  purple: {
    color: "#7030a0",
  },
  red: {
    color: "#dc0725",
  },
};

export default function ServiceCard({ title, description, theme, href }: ServiceCardProps) {
  const config = themeConfig[theme];

  return (
    <div className="service-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative">
      {/* Colored top border */}
      <div 
        className="absolute top-0 left-0 w-full h-1 rounded-t-lg"
        style={{ backgroundColor: config.color }}
      />
      
      <div className="mb-6 pt-4">
        <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-3">
          {title}
        </h3>
        <p className="text-[hsl(var(--medium-text))] mb-6">
          {description}
        </p>
      </div>
      <Link href={href}>
        <Button 
          className="w-full text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300"
          style={{ backgroundColor: config.color }}
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
}
