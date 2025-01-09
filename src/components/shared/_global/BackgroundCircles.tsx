import React, { useState, useEffect } from 'react';

interface Circle {
  left: number;         // Base horizontal position (in %)
  top: number;          // Base vertical position (in %)
  size: number;         // Circle diameter
  offsetX: number;      // Hover-based extra offset (X)
  offsetY: number;      // Hover-based extra offset (Y)
  parallaxFactor: number; // How strongly this circle reacts to mouse movement
}

interface BackgroundCirclesProps {
  hoveredItem: string;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ hoveredItem }) => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  // 1) Generate random circles once on mount
  useEffect(() => {
    const newCircles = Array.from({ length: 40 }, () => ({
      left: Math.random() * 100,          // random 0-100%
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,      // diameter between 10 and 30
      offsetX: 0,
      offsetY: 0,
      parallaxFactor: Math.random() * 30 + 10,
    }));
    setCircles(newCircles);
  }, []);

  // 2) Listen to mouse moves for parallax
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMouse({ x, y });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3) Smoothly shift circles around on hoveredItem changes
  useEffect(() => {
    setCircles(prevCircles =>
      prevCircles.map(circle => {
        let offsetX = 0;
        let offsetY = 0;

        switch (hoveredItem) {
          case 'projects':
            offsetX = (Math.random() - 0.5) * 50;  // -25 to +25
            offsetY = (Math.random() - 0.5) * 50;
            break;
          case 'notes':
            offsetX = (Math.random() - 0.5) * 80;
            offsetY = (Math.random() - 0.5) * 80;
            break;
          case 'about':
            offsetX = (Math.random() - 0.5) * 120;
            offsetY = (Math.random() - 0.5) * 120;
            break;
          default:
            offsetX = 0;
            offsetY = 0;
            break;
        }

        return { ...circle, offsetX, offsetY };
      })
    );
  }, [hoveredItem]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      {circles.map((circle, i) => {
        // Parallax offsets
        const translateX = (0.5 - mouse.x) * circle.parallaxFactor;
        const translateY = (0.5 - mouse.y) * circle.parallaxFactor;

        return (
          <div
            key={i}
            // We add two transitions:
            // 1) For 'left' / 'top' changes (i.e., offsetX, offsetY).
            // 2) For 'transform' (parallax).
            // Tailwind doesn't have a built-in class for different transitions on different properties
            // so let's do inline style for more control.
            style={{
              width: circle.size,
              height: circle.size,
              position: 'absolute',
              borderRadius: '9999px', // fully rounded
              backgroundColor: 'white',
              opacity: 0.3,
              left: `calc(${circle.left}% + ${circle.offsetX}px)`,
              top: `calc(${circle.top}% + ${circle.offsetY}px)`,
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: `
                left 1s ease, 
                top 1s ease, 
                transform 0.25s ease
              `,
              // ^ 
              // - 'left' & 'top' we give a ~1s transition for smoother drifting. 
              // - 'transform' is quicker so parallax tracks the mouse more responsively.
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundCircles;
