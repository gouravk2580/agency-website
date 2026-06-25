interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-10 h-10",
};

export default function Spinner({
  size = "md",
  color = "border-primary",
  className = "",
}: SpinnerProps) {
  return (
    <div
      className={`${sizeStyles[size]} ${className} border-2 border-current border-t-transparent rounded-full animate-spin`}
      style={{ color: color === "border-primary" ? undefined : color }}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
