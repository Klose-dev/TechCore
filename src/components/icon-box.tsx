import { cn } from "@/lib/utils";

import MagicCard from "@/components/ui/magic-card";

type IconBoxProps = {
  iconBox: IconBox;
  className?: string;
};

const IconBox = ({
  className,
  iconBox: { icon, title, description },
}: IconBoxProps) => {
  return (
    <MagicCard className="h-full">
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-md border border-border bg-surface px-10 py-12",
          className,
        )}
      >
        {icon ? (
          <img
            src={icon}
            alt={title || ""}
            width={72}
            height={72}
            className="mb-6 inline-block"
          />
        ) : null}
        {title ? <h3 className="mb-4 text-md">{title}</h3> : null}
        {description ? (
          <p className="text-secondary">{description}</p>
        ) : null}
      </div>
    </MagicCard>
  );
};

export default IconBox;
