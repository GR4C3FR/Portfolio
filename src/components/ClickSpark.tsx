import { useMemo, useState, type CSSProperties, type PropsWithChildren } from 'react';
import './ClickSpark.css';

type Spark = {
  id: number;
  x: number;
  y: number;
};

type ClickSparkProps = PropsWithChildren<{
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: string;
  extraScale?: number;
}>;

export default function ClickSpark({
  children,
  sparkColor = '#007bff',
  sparkSize = 10,
  sparkRadius = 52,
  sparkCount = 8,
  duration = 300,
  easing = 'ease-out',
  extraScale = 1,
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const angles = useMemo(() => {
    return Array.from({ length: sparkCount }, (_, index) => (360 / sparkCount) * index);
  }, [sparkCount]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const id = Date.now() + Math.floor(Math.random() * 10000);
    setSparks((current) => [...current, { id, x, y }]);

    window.setTimeout(() => {
      setSparks((current) => current.filter((spark) => spark.id !== id));
    }, duration + 50);
  };

  return (
    <div className="click-spark-area" onClick={handleClick}>
      {children}
      <div className="click-spark-overlay" aria-hidden="true">
        {sparks.map((spark) => (
          <div key={spark.id} className="click-spark-burst" style={{ left: spark.x, top: spark.y }}>
            {angles.map((angle) => {
              const style = {
                '--spark-color': sparkColor,
                '--spark-size': `${sparkSize}px`,
                '--spark-radius': `${sparkRadius}px`,
                '--spark-duration': `${duration}ms`,
                '--spark-easing': easing,
                '--spark-extra-scale': String(extraScale),
                '--spark-angle': `${angle}deg`,
              } as CSSProperties;

              return <span key={`${spark.id}-${angle}`} className="click-spark-line" style={style} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
