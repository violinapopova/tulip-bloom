import Tulip from './Tulip';
import Soil from './Soil';
import Bulbs from './Bulbs';
import { varieties } from '../constants/varieties';

const SOIL_Y = 420;

function TulipGarden({ stage }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full drop-shadow-2xl block"
    >
      <Soil />
      {varieties.map((v) => (
        <Tulip
          key={v.id}
          stage={stage}
          x={v.x}
          colors={v.colors}
          soilY={SOIL_Y}
        />
      ))}
      <Bulbs visible={stage === 0} />
    </svg>
  );
}

export default TulipGarden;
