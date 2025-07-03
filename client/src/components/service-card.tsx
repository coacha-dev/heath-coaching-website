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
    <div className="service-card heath-gradient rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative">
      
      <div className="mb-6 pt-4">
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-white/90 mb-6">
          {description}
        </p>
      </div>
      <Link href={href}>
        <Button 
          className="w-full font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300"
          style={{ 
            backgroundColor: 'white', 
            color: '#0081ea',
            border: '2px solid white'
          }}
        >
          Learn More
        </Button>
      </Link>
    </div>
  );
}
