import TiltCard from "@/components/Card/TiltCard";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";
import ProjectCard from "../projects/ProjectCard";
import DrawOutlineButton from "@/components/Button/DrawOutlineButton";
import Button from "@/components/Button";

const SwapColumn = () => {
  return (
    <div className="bg-black">
      <SwapColumnFeatures />
    </div>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] block md:hidden" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 flex h-screen w-full items-center justify-center md:hidden"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-screen md:h-fit"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-2/5 place-content-center px-8 py-16 md:w-full md:px-4 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-8 hidden md:block md:mb-6"
          >
            <ExampleFeature featureInView={featureInView} />
          </motion.div>

          <span className=" rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-4 text-6xl md:text-4xl font-bold">
            {featureInView.title}
          </p>
          <p className="text-zinc-500 pt-1 text-lg leading-normal">
            {featureInView.description}
          </p>
        </motion.div>

        <div className="w-fit mt-6">
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-96 w-full md:h-full">
      <Image
        src={featureInView.image}
        alt=""
        width={1024}
        height={1024}
        className="rounded-2xl"
      />
    </div>
  );
};

export default SwapColumn;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  image: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "@ Phase | UI Engineer",
    title: "Phase.com",
    description:
      "Easy Animation for UI Designers. Seamlessly integrate your animations into your design workflow.",
    contentPosition: "r",
    image: "/images/bearpay1.png",
  },
  {
    id: 2,
    callout: "@ LUHAO | Frontend",
    title: "Bearpay",
    description: `SaaS+IoT that helps
      claw machine stores
      manage their business more efficiently through our SaaS web app`,
    contentPosition: "l",
    image: "/images/alliance1.png",
  },
  {
    id: 3,
    callout: "@ Round Bytes | Founder",
    title: "Subkarma",
    description:
      "Taiwan's best branding agency. We help brands to grow and scale their business through branding and design.",
    contentPosition: "r",
    image: "/images/bearpay1.png",
  },
];
