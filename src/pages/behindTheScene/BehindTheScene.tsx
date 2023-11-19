import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const THIS1 = "@/assets/this1.jpg";
const THIS2 = "@/assets/this2.jpg";
const THIS3 = "@/assets/this3.webp";

import WorkHero from "@/pages/about/WorkHero";
import { motion } from "framer-motion";
import CurveTop from "@/components/Container/CurveTop";
import ProjectCard from "../projects/ProjectCard";
import CurveBottom from "@/components/Container/CurveBottom";

type Props = {};

const BehindTheScene = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const { ref: ref1, inView: inView1 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <WorkHero
        title="How this website was made from scratch."
        subtitle1="ROUND BYTES"
        subtitle2="PORTFOLIO"
      />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden  py-28 bg-black text-white">
        <CurveTop />
        {/* this is the content container */}
        <div className="lg:p-12 xl:p-16 2xl:p-20 p-6 md:p-[10%]">
          <motion.div
            className="show"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="gap-8 py-12">
              <h4 className="mt-4">INTRO</h4>
              <h2>
                Introducing a minimalistic portfolio website powered by
                <span> React Typescript </span> and <span> Vite </span> for a
                faster and more reliable experience, styled with
                <span> Tailwind CSS + Styled Componenets</span> for a clean,
                reusable, and modern appearance.
                <a href="https://github.com/pangsitmie/Websites/tree/main/jeriel-portfolio-vite-ts">
                  <h4 className="align-center mt-5 flex gap-2 text-xl text-primary-100">
                    Github <BiLinkExternal />
                  </h4>
                </a>
              </h2>
            </div>
          </motion.div>

          <div className="gap-4">
            {/* col1 */}
            <div>
              <div className="mb-4">
                <ProjectCard
                  image={THIS1}
                  title={
                    "We chose to use TypeScript and Vite to practice building more reliable and scalable project. While Vite provides a faster and more efficient development experience, quicker builds and easier debugging."
                  }
                />
              </div>
              <ProjectCard
                image={THIS2}
                title={
                  "Using Tailwind CSS and Styled Components together allowed me to create highly reusable and consistent components. "
                }
              />
            </div>
            {/* col2 */}
            <div className="div div-col gap-4">
              <ProjectCard
                image={THIS3}
                title={
                  "Tailwind's pre-defined utility classes made it easy to quickly style components, while Styled Components allowed me to create encapsulated and dynamic components that can be easily reused throughout the site.."
                }
              />
              <div className="gap-4">
                {/* <ProblemSolutionCard
                  title={"Advantages"}
                  content={
                    "With Tailwind CSS pre-defined utility classes, it is easy to quickly style components."
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Disadvantage"}
                  content={
                    "To mitigate Tailwind CSS's potential limitation of design divibility, We combined it with Styled Components to create more dynamic and highly reusable components."
                  }
                  color={"#0063e3"}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <CurveBottom />
      </div>
      {/* curve end */}

      <div className="lg:p-12 xl:p-16 2xl:p-20 bg-white p-6 md:p-[10%]">
        <div className="div gap-4">
          <div>
            <motion.div
              className="show"
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-10 text-center text-black">
                By combining these technologies, We was able to create reusable
                and dynamic components while maintaining a consistent design
                throughout the site.
              </h4>
            </motion.div>
            <motion.div
              className="show"
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center text-black">
                With this portfolio, we are excited to showcase our skills and
                abilities to potential you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScene;
