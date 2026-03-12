function Soil() {
  return (
    <>
      {/* Base soil layer - extends beyond edges for fuller width */}
      <path d="M -60 340 Q 200 320 460 340 L 460 500 L -60 500 Z" fill="#5D4037" />
      {/* Top curved soil surface */}
      <path d="M -60 420 Q 200 405 460 420 V 500 H -60 Z" fill="#4E342E" />
      {/* Shadow/depth layer */}
      <path d="M -60 420 Q 200 412 460 420 L 460 440 L -60 440 Z" fill="#3E2723" />
    </>
  );
}

export default Soil;
