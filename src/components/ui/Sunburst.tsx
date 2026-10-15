type SunburstProps = {
  className?: string;
  rays?: number;
  color?: string;
};

export default function Sunburst({
  className = "",
  rays = 24,
  color = "currentColor",
}: SunburstProps) {
  const items = Array.from({ length: rays });

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(200,200)">
        {items.map((_, index) => {
          const angle = (360 / rays) * index;
          const long = index % 2 === 0;
          const length = long ? 190 : 130;
          const width = long ? 7 : 4;

          return (
            <rect
              key={angle}
              x={-width / 2}
              y={-length}
              width={width}
              height={length - 34}
              rx={width / 2}
              fill={color}
              opacity={long ? 0.9 : 0.45}
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r="30" fill={color} />
      </g>
    </svg>
  );
}
