import { Button } from "@/components/ui/button";
import { Play, Code2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-algo-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-algo-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-algo-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Visualize & Learn
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Algorithms
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Interactive algorithm visualizations with a powerful code playground. 
            See how sorting, searching, and graph algorithms work step by step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              <Play className="w-5 h-5 mr-2" />
              Start Visualizing
            </Button>
            <Button variant="outline" size="xl">
              <Code2 className="w-5 h-5 mr-2" />
              Try Playground
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-algo-warning" />
              <span className="text-sm">Real-time Visualization</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Code2 className="w-4 h-4 text-algo-secondary" />
              <span className="text-sm">Interactive Code Editor</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Play className="w-4 h-4 text-algo-success" />
              <span className="text-sm">Step-by-step Execution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;