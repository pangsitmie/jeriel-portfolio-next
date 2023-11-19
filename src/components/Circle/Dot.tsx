"use client";

import { useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BIG_SIZE = 110;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

type Props = {
  mousePos: { x: number; y: number };
};

const Dot = ({ mousePos }: Props) => {
  const size = useSpring(SMALL_SIZE, { damping: 30, stiffness: 200 });

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;
    const { x, y } = mousePos;
    const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

    const distance = Math.sqrt(Math.pow(x - dotX, 2) + Math.pow(y - dotY, 2));

    size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
  }, [mousePos, size]);

  return (
    <div ref={dotRef} className="relative">
      <motion.div
        className="bg-pink rounded-full absolute -translate-y-1/2 -translate-x-1/2 opacity-40"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Dot;
