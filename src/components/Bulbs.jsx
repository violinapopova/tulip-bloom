import { varieties } from '../constants/varieties';

function Bulbs({ visible }) {
  if (!visible) return null;

  return (
    <>
      {varieties.map((v) => (
        <g
          key={v.id}
          transform={`translate(${v.x}, 445)`}
          className="animate-fade-in"
        >
          <circle cx="0" cy="0" r="12" fill="#795548" />
          <path d="M -12 0 Q 0 -22 12 0" fill="#8D6E63" />
        </g>
      ))}
    </>
  );
}

export default Bulbs;
