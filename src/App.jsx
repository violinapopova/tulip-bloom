import { useState, useCallback, useRef, useEffect } from 'react';
import TulipGarden from './components/TulipGarden';
import StageInfo from './components/StageInfo';
import ControlPanel from './components/ControlPanel';
import EnvironmentDecor from './components/EnvironmentDecor';
import ProgressBar from './components/ProgressBar';

const GROWTH_INTERVAL_MS = 2500;
const MAX_STAGE = 4;

function App() {
  const [stage, setStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const handleNext = useCallback(() => {
    if (stage < MAX_STAGE) setStage((prev) => prev + 1);
  }, [stage]);

  const handleReset = useCallback(() => {
    setStage(0);
    setIsAnimating(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleAutoGrow = useCallback(() => {
    if (intervalRef.current) return;
    setIsAnimating(true);
    setStage(0);
    let current = 0;
    intervalRef.current = setInterval(() => {
      current++;
      setStage(current);
      if (current >= MAX_STAGE) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsAnimating(false);
      }
    }, GROWTH_INTERVAL_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-emerald-50 flex flex-col items-center p-6 md:p-12 font-sans">
      {/* Header */}
      <header className="max-w-3xl w-full text-center mb-8">
        <h1 className="text-5xl font-black text-emerald-900 mb-3 tracking-tight">
          Tulip Garden
        </h1>
        <p className="text-emerald-700/70 text-lg font-medium">
          An interactive botanical growth simulation
        </p>
      </header>

      {/* Main Experience Area */}
      <main className="relative w-full max-w-2xl aspect-[4/5] md:aspect-square bg-white/70 backdrop-blur-md rounded-[3rem] shadow-2xl border-[8px] border-white overflow-hidden flex flex-col">
        <EnvironmentDecor />

        {/* SVG Garden */}
        <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full aspect-[4/5] max-h-full">
            <TulipGarden stage={stage} />
          </div>
        </div>

        <ProgressBar stage={stage} />
        <StageInfo stage={stage} />
      </main>

      <ControlPanel
        stage={stage}
        isAnimating={isAnimating}
        onNext={handleNext}
        onReset={handleReset}
        onAutoGrow={handleAutoGrow}
      />

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-emerald-900/30 text-xs font-bold uppercase tracking-widest">
          Springtime Visualization Engine
        </p>
      </footer>
    </div>
  );
}

export default App;
