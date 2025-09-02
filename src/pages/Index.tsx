import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AlgorithmGrid from "@/components/AlgorithmGrid";
import SortingVisualizer from "@/components/SortingVisualizer";
import CodePlayground from "@/components/CodePlayground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AlgorithmGrid />
        
        {/* Featured Algorithm Section */}
        <section className="py-20 px-6 bg-secondary/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try It
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Live
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See bubble sort in action and experiment with the code
              </p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <SortingVisualizer algorithm="bubble" />
              <CodePlayground />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
