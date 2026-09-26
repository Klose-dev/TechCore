interface RaysBackgroundProps {
  className?: string;
  /** Ray colour, any CSS colour value */
  color?: string;
  /** Number of rays */
  rays?: number;
  /** Rotation of the ray fan in degrees */
  angle?: number;
  /** Overall layer opacity, 0-1 */
  opacity?: number;
  /** Slow drift in seconds per rotation. 0 disables motion. */
  speed?: number;
}

/**
 * Soft conic "rays" backdrop.
 *
 * Deliberately CSS rather than WebGL: this sits behind every card on a page,
 * and one WebGL context per card exhausts the browser limit (~8-16 contexts),
 * which turns those cards black. A conic gradient costs nothing to composite.
 */
export default function RaysBackground({
  className = "",
  color = "#008A48",
  rays = 12,
  angle = 180,
  opacity = 0.08,
  speed = 0,
}: RaysBackgroundProps) {
  const segments = Array.from({ length: rays * 2 }, (_, i) =>
    i % 2 === 0
      ? `${color} 0 ${(100 / (rays * 2)).toFixed(4)}%`
      : `transparent 0 ${(100 / (rays * 2)).toFixed(4)}%`,
  ).join(", ");

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div
        className={`h-full w-full origin-bottom ${speed > 0 ? "ray-drift" : ""}`}
        style={{
          backgroundImage: `conic-gradient(from ${angle}deg at 50% 120%, ${segments})`,
          opacity,
          ...(speed > 0 ? { animationDuration: `${speed}s` } : null),
        }}
      />
    </div>
  );
}
