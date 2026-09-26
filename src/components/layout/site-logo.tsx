type SiteLogoProps = {
  width: number;
  height: number;
  lightClasses?: string;
  darkClasses?: string;
};

export default function SiteLogo({
  width,
  height,
}: SiteLogoProps) {
  return (
    <div className="flex items-center">
      <img
        src="/techcore-logo.svg"
        alt="TECHCORE"
        width={width}
        height={height}
        className="block max-w-full object-contain"
        style={{ width, height }}
      />
    </div>
  );
}
