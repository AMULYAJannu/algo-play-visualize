import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Copy, Download, Settings } from "lucide-react";

const CodePlayground = () => {
  const [code, setCode] = useState(`// Bubble Sort Implementation
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}

// Test the algorithm
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", testArray);
console.log("Sorted:", bubbleSort([...testArray]));`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Create a mock console to capture output
      let consoleOutput = "";
      const mockConsole = {
        log: (...args: any[]) => {
          consoleOutput += args.join(" ") + "\n";
        }
      };

      // Execute the code with mock console
      const func = new Function("console", code);
      func(mockConsole);
      
      setOutput(consoleOutput || "Code executed successfully!");
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "algorithm.js";
    a.click();
  };

  return (
    <div className="glow-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Code Playground</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copyCode}>
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={downloadCode}>
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">JavaScript Code</label>
            <Button variant="play" size="sm" onClick={runCode}>
              <Play className="w-4 h-4 mr-2" />
              Run Code
            </Button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-96 bg-secondary/50 border border-border rounded-lg p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write your algorithm code here..."
          />
        </div>

        {/* Output */}
        <div className="space-y-4">
          <label className="text-sm font-medium">Output</label>
          <div className="h-96 bg-secondary/30 border border-border rounded-lg p-4 font-mono text-sm overflow-auto">
            <pre className="whitespace-pre-wrap text-foreground">
              {output || "Click 'Run Code' to see output..."}
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>💡 Pro Tip:</strong> Try modifying the bubble sort algorithm above, or write your own sorting algorithm. 
          You can test with different array sizes and see how performance changes.
        </p>
      </div>
    </div>
  );
};

export default CodePlayground;