import { Badge } from "./ui/badge";

type BadgesProps = {
  labels: string[];
  className?: string;
};

export default function BadgeList({ labels, className }: BadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <Badge
          key={label}
          variant="outline"
          className={`flex items-center justify-center  text-center px-3 py-1 h-8 ${className}`}
        >
          {label}
        </Badge>
      ))}
    </div>
  );
}
