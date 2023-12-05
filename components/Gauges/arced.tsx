import React from 'react';
import { useGauge } from "use-gauge";

interface Arced_Props {
  value: number;
}

const START_ANGLE = 45;
const END_ANGLE = 315;

export function Arced(props: Arced_Props) {
  const { value } = props;
  const gauge = useGauge({
    domain: [0, 100],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 21,
    diameter: 120
  });

  const needle = gauge.getNeedleProps({
    value,
    baseRadius: 12,
    tipRadius: 2
  });

  return (
    <div className="p-4">
      <svg className="w-full overflow-visible p-2" {...gauge.getSVGProps()}>
        <g fill-rule="evenodd" id="arcs">
          <path
            {...gauge.getArcProps({
              offset: 30,
              startAngle: START_ANGLE,
              endAngle: END_ANGLE
            })}
            fill="none"
            className="stroke-gray-500"
            strokeLinecap="round"
            strokeWidth={24}
          />
          <path
            {...gauge.getArcProps({
              offset: 30,
              startAngle: START_ANGLE,
              endAngle: gauge.valueToAngle(value)
            })}
            fill="none"
            className="stroke-primary"
            strokeLinecap="round"
            strokeWidth={24}
          />
          <path
            {...gauge.getArcProps({
              offset: 39,
              startAngle: START_ANGLE - 2,
              endAngle: gauge.valueToAngle(value) + 2
            })}
            fill="none"
            className="stroke-white"
            strokeLinecap="round"
            strokeWidth={6}
            opacity={.4}
          />
          <path
            {...gauge.getArcProps({
              offset: 19,
              startAngle: START_ANGLE - 2,
              endAngle: gauge.valueToAngle(value) + 3
            })}
            fill="none"
            className="stroke-black"
            strokeLinecap="round"
            strokeWidth={3}
            opacity={.4}
          />
        </g>
      </svg>
    </div>
  );
}
