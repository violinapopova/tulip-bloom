function Tulip({ stage, x, colors, soilY }) {
  const stemHeight = stage * 70;

  return (
    <g>
      {/* Stem */}
      <path
        d={`M ${x} ${soilY} L ${x} ${soilY - stemHeight}`}
        stroke="#4CAF50"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        className="transition-all duration-1000 ease-out"
        style={{ strokeDasharray: 500, strokeDashoffset: stage === 0 ? 500 : 0 }}
      />

      {/* Leaves */}
      {stage >= 2 && (
        <g className="transition-opacity duration-1000">
          <path
            d={`M ${x} ${soilY - 35} Q ${x - 48} ${soilY - 95} ${x - 60} ${soilY - 55} Q ${x - 30} ${soilY - 28} ${x} ${soilY - 18}`}
            fill="#66BB6A"
          />
          <path
            d={`M ${x} ${soilY - 70} Q ${x + 52} ${soilY - 130} ${x + 72} ${soilY - 88} Q ${x + 36} ${soilY - 58} ${x} ${soilY - 45}`}
            fill="#81C784"
          />
        </g>
      )}

      {/* Flower Head */}
      {stage >= 3 && (
        <g transform={`translate(${x}, ${soilY - stemHeight})`}>
          {stage === 3 ? (
            /* Bud State */
            <path
              d="M -14 0 Q 0 -52 14 0 Q 0 10 -14 0"
              fill={colors.primary}
              className="animate-pulse"
            />
          ) : (
            /* Full Bloom State */
            <g className="animate-bloom-in">
              <ellipse cx="-14" cy="-24" rx="18" ry="36" fill={colors.dark} transform="rotate(-15, -14, -24)" />
              <ellipse cx="14" cy="-24" rx="18" ry="36" fill={colors.dark} transform="rotate(15, 14, -24)" />
              <ellipse cx="0" cy="-28" rx="20" ry="40" fill={colors.primary} />
              <ellipse cx="-12" cy="-18" rx="16" ry="28" fill={colors.secondary} transform="rotate(-10, -12, -18)" />
              <ellipse cx="12" cy="-18" rx="16" ry="28" fill={colors.secondary} transform="rotate(10, 12, -18)" />
              <circle cx="0" cy="-18" r="5" fill={colors.accent} />
            </g>
          )}
        </g>
      )}
    </g>
  );
}

export default Tulip;
