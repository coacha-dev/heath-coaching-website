import { Briefcase, Lightbulb, DollarSign } from "lucide-react";
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
    color: "hsl(var(--coacha-blue))",
    bgColor: "bg-blue-50",
    borderColor: "border-[hsl(var(--coacha-blue))]",
    icon: Briefcase,
  },
  purple: {
    color: "hsl(var(--coacha-purple))",
    bgColor: "bg-purple-50",
    borderColor: "border-[hsl(var(--coacha-purple))]",
    icon: Lightbulb,
  },
  red: {
    color: "hsl(var(--coacha-red))",
    bgColor: "bg-red-50",
    borderColor: "border-[hsl(var(--coacha-red))]",
    icon: DollarSign,
  },
};

export default function ServiceCard({ title, description, theme, href }: ServiceCardProps) {
  const config = themeConfig[theme];
  const Icon = config.icon;

  return (
    <div className={`service-card bg-white rounded-lg shadow-lg border-t-4 ${config.borderColor} p-8 hover:shadow-xl transition-all duration-300`}>
      <div className="mb-6">
        <div className={`w-16 h-16 ${config.bgColor} rounded-full flex items-center justify-center mb-4`}>
          <Icon className="h-8 w-8" style={{ color: config.color }} />
        </div>
        <h3 className="text-2xl font-bold text-[hsl(var(--dark-text))] mb-3">
          {title}
        </h3>
        <p className="text-[hsl(var(--medium-text))] mb-6">
          {description}
        </p>
      </div>
      <Link href={href}>
        <Button className="w-full coacha-button relative overflow-hidden">
          <span className="relative z-10">Learn More</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1"
            style={{ backgroundColor: config.color }}
          />
        </Button>
      </Link>
    </div>
  );
}
