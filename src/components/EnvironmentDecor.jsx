import { Sun, CloudRain } from 'lucide-react';

function EnvironmentDecor() {
  return (
    <>
      <div className="absolute top-10 right-10 animate-pulse" aria-hidden>
        <Sun className="text-amber-400 w-16 h-16 drop-shadow-lg" fill="currentColor" />
      </div>
      <div className="absolute top-16 left-12 opacity-30 animate-bounce delay-1000" aria-hidden>
        <CloudRain className="text-sky-300 w-12 h-12" />
      </div>
    </>
  );
}

export default EnvironmentDecor;
