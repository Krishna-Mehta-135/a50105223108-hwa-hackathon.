interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  const words = title.split(' ');
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-5xl md:text-7xl font-heading text-navy leading-tight mb-4">
        {words.map((word, i) => (
          <span key={i} className="heading-reveal-word inline-block">
            {word}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-lg text-navy/70 font-body max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
