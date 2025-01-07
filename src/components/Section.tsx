import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("section-container", className)}>
      <h2 className="section-heading">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};