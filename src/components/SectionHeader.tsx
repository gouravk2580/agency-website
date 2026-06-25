interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4 ${
            dark
              ? "bg-white/10 text-white border border-white/20"
              : "bg-primary/10 text-primary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          dark ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
