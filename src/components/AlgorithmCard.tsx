import { Button } from "@/components/ui/button";
import { Play, Clock, BookOpen } from "lucide-react";

interface AlgorithmCardProps {
  title: string;
  description: string;
  complexity: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  icon: React.ReactNode;
}

const AlgorithmCard = ({ title, description, complexity, difficulty, category, icon }: AlgorithmCardProps) => {
  const difficultyColors = {
    Easy: "bg-algo-success/20 text-algo-success border-algo-success/30",
    Medium: "bg-algo-warning/20 text-algo-warning border-algo-warning/30",
    Hard: "bg-algo-error/20 text-algo-error border-algo-error/30"
  };

  return (
    <div className="glow-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
          {icon}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[difficulty]}`}>
          {difficulty}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {complexity}
        </div>
        <div className="flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          {category}
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button variant="algo" size="sm" className="flex-1">
          <Play className="w-4 h-4 mr-2" />
          Visualize
        </Button>
        <Button variant="outline" size="sm">
          Code
        </Button>
      </div>
    </div>
  );
};

export default AlgorithmCard;