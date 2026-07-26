export function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={`fade-in ${className}`} style={{ animationDelay: `${delay}ms` }}>{children}</div>;
}
