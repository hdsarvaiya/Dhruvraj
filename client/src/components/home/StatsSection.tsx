import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "@/hooks/use-counter";

interface StatItemProps {
  end: number;
  label: string;
  delay?: number;
}

function StatItem({ end, label, delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCounter(isInView ? end : 0, 2, delay);
  
  return (
    <div 
      ref={ref} 
      className="text-center opacity-0 translate-y-5"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
      }}
    >
      <div className="font-accent text-5xl md:text-6xl text-secondary mb-2">
        {count}
      </div>
      <div className="uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem end={100} label="Projects Completed" delay={0.1} />
          <StatItem end={15} label="Years Experience" delay={0.2} />
          <StatItem end={250} label="Team Members" delay={0.3} />
          <StatItem end={98} label="Satisfaction Rate" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
