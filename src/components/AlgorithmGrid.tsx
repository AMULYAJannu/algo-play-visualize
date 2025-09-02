import AlgorithmCard from "./AlgorithmCard";
import { BarChart, Search, GitBranch, Shuffle, Zap, TreePine } from "lucide-react";

const algorithms = [
  {
    title: "Bubble Sort",
    description: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    complexity: "O(n²)",
    difficulty: "Easy" as const,
    category: "Sorting",
    icon: <BarChart className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Quick Sort",
    description: "An efficient divide-and-conquer sorting algorithm that works by selecting a 'pivot' element and partitioning the array around it.",
    complexity: "O(n log n)",
    difficulty: "Medium" as const,
    category: "Sorting",
    icon: <Zap className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Merge Sort",
    description: "A stable divide-and-conquer algorithm that divides the array into halves, sorts them separately, and then merges them back together.",
    complexity: "O(n log n)",
    difficulty: "Medium" as const,
    category: "Sorting",
    icon: <GitBranch className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Binary Search",
    description: "An efficient algorithm for finding an item from a sorted list by repeatedly dividing the search interval in half.",
    complexity: "O(log n)",
    difficulty: "Easy" as const,
    category: "Searching",
    icon: <Search className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Depth-First Search",
    description: "A graph traversal algorithm that explores as far as possible along each branch before backtracking.",
    complexity: "O(V + E)",
    difficulty: "Medium" as const,
    category: "Graph",
    icon: <TreePine className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Fisher-Yates Shuffle",
    description: "An algorithm for generating a random permutation of a finite sequence, ensuring each permutation is equally likely.",
    complexity: "O(n)",
    difficulty: "Easy" as const,
    category: "Randomization",
    icon: <Shuffle className="w-6 h-6 text-primary-foreground" />
  }
];

const AlgorithmGrid = () => {
  return (
    <section className="py-20 px-6" id="algorithms">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Algorithms
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of classic algorithms and see how they work step by step
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {algorithms.map((algorithm, index) => (
            <AlgorithmCard
              key={index}
              {...algorithm}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmGrid;