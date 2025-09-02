import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Shuffle } from "lucide-react";

interface SortingVisualizerProps {
  algorithm: "bubble" | "quick" | "merge";
}

const SortingVisualizer = ({ algorithm = "bubble" }: SortingVisualizerProps) => {
  const [array, setArray] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [comparing, setComparing] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [speed, setSpeed] = useState(100);

  // Generate random array
  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: 30 }, () => 
      Math.floor(Math.random() * 300) + 10
    );
    setArray(newArray);
    setComparing([]);
    setSorted([]);
    setIsPlaying(false);
  }, []);

  // Initialize array on mount
  useEffect(() => {
    generateArray();
  }, [generateArray]);

  // Bubble sort implementation
  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isPlaying) return;
        
        setComparing([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, speed));
        
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
      setSorted(prev => [...prev, n - i - 1]);
    }
    setSorted(prev => [...prev, 0]);
    setComparing([]);
  };

  const startSorting = () => {
    setIsPlaying(true);
    if (algorithm === "bubble") {
      bubbleSort();
    }
  };

  const pauseSorting = () => {
    setIsPlaying(false);
  };

  const resetArray = () => {
    setIsPlaying(false);
    generateArray();
  };

  const maxHeight = Math.max(...array);

  return (
    <div className="glow-card rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 capitalize">{algorithm} Sort</h3>
        <p className="text-muted-foreground mb-4">
          Watch how the {algorithm} sort algorithm works in real-time
        </p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <Button 
            variant={isPlaying ? "pause" : "play"} 
            onClick={isPlaying ? pauseSorting : startSorting}
            disabled={sorted.length === array.length}
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          
          <Button variant="reset" onClick={resetArray}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          
          <Button variant="outline" onClick={generateArray} disabled={isPlaying}>
            <Shuffle className="w-4 h-4 mr-2" />
            Shuffle
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <label className="text-sm font-medium">Speed:</label>
          <input
            type="range"
            min="10"
            max="500"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="flex-1 max-w-xs"
            disabled={isPlaying}
          />
          <span className="text-sm text-muted-foreground">{speed}ms</span>
        </div>
      </div>

      <div className="bg-secondary/30 rounded-lg p-6 min-h-80 flex items-end justify-center gap-1">
        {array.map((value, index) => {
          let barClass = "algo-bar bg-primary transition-all duration-300";
          
          if (comparing.includes(index)) {
            barClass += " comparing";
          } else if (sorted.includes(index)) {
            barClass += " sorted";
          }
          
          return (
            <div
              key={index}
              className={barClass}
              style={{
                height: `${(value / maxHeight) * 250}px`,
                width: "12px",
                borderRadius: "2px 2px 0 0"
              }}
            />
          );
        })}
      </div>
      
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Array size: {array.length} elements
      </div>
    </div>
  );
};

export default SortingVisualizer;