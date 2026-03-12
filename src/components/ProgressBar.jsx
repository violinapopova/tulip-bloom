import { STAGES } from '../constants/stages';

function ProgressBar({ stage }) {
  return (
    <div
      className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald-900/10 px-4 py-2 rounded-full backdrop-blur-md"
      role="progressbar"
      aria-valuenow={stage + 1}
      aria-valuemin={1}
      aria-valuemax={STAGES.length}
      aria-label={`Growth stage ${stage + 1} of ${STAGES.length}`}
    >
      {STAGES.map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-500 ${
            stage >= i ? 'bg-emerald-600 w-8' : 'bg-emerald-200 w-2'
          }`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;
