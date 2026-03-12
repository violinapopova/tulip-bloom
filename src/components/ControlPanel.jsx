import { Sprout, Sun, RotateCcw, Play } from 'lucide-react';

function ControlPanel({ stage, isAnimating, onNext, onReset, onAutoGrow }) {
  const maxStage = 4;
  const canAdvance = stage < maxStage && !isAnimating;

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-8 py-4 bg-white text-gray-600 font-bold rounded-2xl shadow-md hover:bg-gray-50 hover:shadow-lg transition-all active:scale-95 border border-gray-100"
        type="button"
      >
        <RotateCcw size={20} />
        Reset Garden
      </button>

      <button
        onClick={onNext}
        disabled={!canAdvance}
        className={`flex items-center gap-2 px-10 py-4 font-bold rounded-2xl shadow-xl transition-all active:scale-95 ${
          canAdvance
            ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-200'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
        type="button"
      >
        <Sprout size={20} />
        {stage === 0 ? 'Plant Seeds' : 'Water Garden'}
      </button>

      <button
        onClick={onAutoGrow}
        disabled={isAnimating}
        className="flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-2xl shadow-xl hover:bg-sky-600 transition-all active:scale-95 disabled:bg-sky-200 disabled:cursor-not-allowed"
        type="button"
      >
        <Play size={20} fill="currentColor" />
        Watch Growth
      </button>
    </div>
  );
}

export default ControlPanel;
