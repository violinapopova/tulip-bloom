import { Info } from 'lucide-react';
import { STAGES } from '../constants/stages';

function StageInfo({ stage }) {
  const current = STAGES[stage];
  if (!current) return null;

  return (
    <div className="absolute bottom-8 left-8 right-8 p-6 rounded-[2rem] transform transition-all duration-500
      backdrop-blur-2xl 
      border border-gray-300/20 
      shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.1)]
      [background:linear-gradient(135deg,rgba(148,163,184,0.15)_0%,rgba(100,116,139,0.08)_100%)]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-500">
          Garden Phase {stage + 1}
        </span>
        <Info size={18} className="text-emerald-300" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-1">{current.name}</h2>
      <p className="text-white leading-relaxed text-sm md:text-base">
        {current.description}
      </p>
    </div>
  );
}

export default StageInfo;
