import { useEffect, useState } from "react";
import Dot from "./Dot";

export default function Rhythm() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);

    return () => {
      window.removeEventListener("mousemove", handler);
    };
  });

  return (
    <div className="absolute inset-0 flex flex-wrap gap-24 mx-auto p-12">
      {Array.from({ length: 150 }).map((_, i) => (
        <Dot key={i} mousePos={mousePos}></Dot>
      ))}
    </div>
  );
}
