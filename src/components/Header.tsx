import { Button } from "@/components/ui/button";
import { Code, Play, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AlgoPlay
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#algorithms" className="text-muted-foreground hover:text-foreground transition-colors">
            Algorithms
          </a>
          <a href="#playground" className="text-muted-foreground hover:text-foreground transition-colors">
            Playground
          </a>
          <a href="#learn" className="text-muted-foreground hover:text-foreground transition-colors">
            Learn
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Code className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button variant="hero" size="sm">
            <Play className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;