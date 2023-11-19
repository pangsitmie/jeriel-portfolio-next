import React, { useEffect, useRef, FC } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface HeaderModalProps {
  visible: boolean;
  children?: React.ReactNode;
  wrapClassName?: string;
  onClick?: () => void;
}

const HeaderModal: FC<HeaderModalProps> = ({
  children,
  visible,
  wrapClassName,
  onClick,
}) => {
  // Initialize as null and create a div element on mount
  const elRef = useRef<HTMLElement | null>(null);

  const scrollTopRef = useRef<number>(0);

  useEffect(() => {
    elRef.current = document.createElement("div");
    const container = document.getElementById("modal") ?? document.body;
    if (elRef.current) {
      container.appendChild(elRef.current);
    }
    return () => {
      if (elRef.current) {
        container.removeChild(elRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      scrollTopRef.current = document.scrollingElement?.scrollTop ?? 0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollTopRef.current}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = scrollTopRef.current;
      }
    }
  }, [visible]);

  const handleOnClick = () => {
    onClick?.();
    console.log("clicked");
  };

  const handlePropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return elRef.current
    ? ReactDOM.createPortal(
        <div
          onClick={handlePropagation}
          className={` fixed left-0 right-0 top-0 bottom-0 z-modal-header ${
            visible ? "visible" : "invisible"
          } ${
            visible ? "opacity-100" : "opacity-0"
          } transition-all ${wrapClassName}`}
        >
          <div
            style={{
              transform: `translateY(${visible ? 0 : -100}%)`,
            }}
            className={`${visible ? "visible" : "invisible"} ${
              visible ? "opacity-100" : "opacity-0"
            } bg-black text-white w-full h-full transition-all duration-400 ease-out overflow-auto px-16 py-16 sm:px-6 flex flex-col`}
          >
            {/* {children} */}
            <motion.button
              className="text-3xl bg-black hover:text-pink-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
              whileHover={{ rotate: "180deg" }}
              onClick={handleOnClick}
              whileTap={{ scale: 0.9 }}
            >
              <FiX />
            </motion.button>
            <motion.div
              variants={linkWrapperVariants}
              className="flex flex-col gap-6 absolute bottom-8 left-8 z-50 "
            >
              <NavLink text="home" />
              <NavLink text="projects" />
              <NavLink text="clients" />
              <NavLink text="about" />
              <NavLink text="contact" />
            </motion.div>
          </div>
        </div>,
        elRef.current
      )
    : null;
};

const NavLink = ({ text }: { text: string }) => {
  return (
    <motion.a
      className="inline-block z-10 text-white w-fit font-black text-5xl hover:text-indigo-500 transition-colors capitalize"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      href={text}
    >
      {text}
    </motion.a>
  );
};

export default HeaderModal;

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
