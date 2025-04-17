import { useState, useEffect } from "react";

export function useCounter(
  end: number,
  duration: number = 2,
  delay: number = 0
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [end, duration, delay]);

  return count;
}
