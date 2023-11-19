import React, { useState, useRef, useEffect } from "react";
import throttle from "lodash.throttle";
import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
  onClick?: () => void;
};

const ProjectCard = ({
  title,
  subtitle,
  image,
  className = "",
  onClick,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(false);
    }, 100);
  };

  const throttledMouseMove = throttle(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (containerRef.current) {
        const rect = (containerRef.current as any).getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top - 10 });
      }
    },
    16
  );

  return (
    <div className={`${className}`} onClick={onClick}>
      <div className="relative" ref={containerRef} style={{ cursor: "none" }}>
        <Image
          className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-[102%] cursor-none drop-shadow-lg"
          src={image}
          alt={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={throttledMouseMove}
          width={500}
          height={500}
        />
        {hovered && (
          <div
            className="absolute text-white bg-black px-6 py-2 rounded whitespace-nowrap pointer-events-none"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            View Project
          </div>
        )}
      </div>
      <div className="md:mx-4">
        <h3 className="text-4xl md:text-3xl font-medium sm:text-xl mt-6 mb-2">
          {title}
        </h3>
        <p className="text-zinc-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
