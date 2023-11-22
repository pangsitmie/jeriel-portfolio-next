import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDownCircle, FiDollarSign } from "react-icons/fi";
import HeroSocials from "./HeroSocials";

export const ImageTrailHero = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/images/active/1.jpeg",
        "/images/active/2.jpeg",
        "/images/active/3.png",
        "/images/active/4.jpeg",
        // "/images/active/5.jpg",
        // "/images/active/6.jpg",
        // "/images/active/7.jpg",
        // "/images/active/8.jpg",
        // "/images/active/9.jpg",
        // "/images/active/10.jpg",
        // "/images/active/11.jpg",
        // "/images/active/12.jpg",
        // "/images/active/13.jpg",
        // "/images/active/14.jpg",
        // "/images/active/15.jpg",
        // "/images/active/16.jpg",
      ]}
    >
      <section className="h-screen bg-black">
        <Copy />
        <WatermarkWrapper />
      </section>
    </MouseImageTrail>
  );
};

const Copy = () => {
  return (
    <div className="absolute bottom-0 pb-6 left-0 right-0 z-[100]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8">
        <div>
          <h1 className="mb-6  max-w-4xl text-8xl md:text-6xl font-black leading-[1.1] text-white ">
            Where Art Meets <span className="text-indigo-600">Algorithm</span>
          </h1>
          <p className="max-w-xl text-2xl md:text-xl text-zinc-400 mb-6">
            Explore Jeriel's life museums | UI Engineer
          </p>
          <HeroSocials />
        </div>
        <FiArrowDownCircle className="text-8xl text-white  md:hidden" />
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
    </>
  );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-zinc-800">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-zinc-800">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
