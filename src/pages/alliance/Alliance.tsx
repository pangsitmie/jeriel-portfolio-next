import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

import WorkHero from "@/pages/about/WorkHero";
import { motion } from "framer-motion";
import CurveTop from "@/components/Container/CurveTop";
import ProjectCard from "../projects/ProjectCard";
import CurveBottom from "@/components/Container/CurveBottom";

type Props = {};

const ALLIANCE1 = "@/assets/alliance1.png";
const ALLIANCE2 = "@/assets/alliance2.png";
const ALLIANCE3 = "@/assets/alliance3.jpg";
const ALLIANCE4 = "@/assets/alliance4.png";
const ALLIANCE5 = "@/assets/alliance5.png";

const Alliance = (props: Props) => {
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const { ref: ref1, inView: inView1 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const { ref: ref3, inView: inView3 } = useInView({
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
        title="Discover claw machine spots and nearby travel destination."
        subtitle1="CLAW MACHINE ALLIANCE"
        subtitle2="WEBSITE"
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
            <div className="py-20">
              <h4 className="mb-4">INTRO</h4>

              <h2 className="mt-4 text-web-h2 md:text-mobile-h2">
                Expanding audience by creating a website that enables users to
                search for nearby or desired claw machine stores through our
                interactive map feature.
                <a href="https://alliance.cloudprogrammingonline.com/map">
                  <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                    Visit website <BiLinkExternal />
                  </h4>
                </a>
              </h2>
            </div>
          </motion.div>

          <div className="flex gap-4">
            {/* col1 */}
            <div>
              <div className="mb-4">
                <ProjectCard
                  image=""
                  title={
                    "As users browse through our recommended claw machine options, we will also suggest brand partner stores and local tourist attractions"
                  }
                  subtitle=""
                />
              </div>
              <ProjectCard
                image=""
                title={
                  "This will allow them to not only enjoy playing but also make the most of their time in the area."
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <ProjectCard
                image={ALLIANCE2}
                title={
                  "In this website's map system to locate claw machine stores based on city, distance, and many other ways"
                }
              />
              {/* <div className="flex gap-4">
                <ProblemSolutionCard
                  title={"Problem"}
                  content={
                    "Difficulty in locating nearby claw machine stores and increase brand awareness"
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Solution"}
                  content={
                    "Create an interactive website with a map feature that enables users to easily locate nearby claw machine stores and suggests brand partner stores and local tourist attractions"
                  }
                  color={"#0063e3"}
                />
              </div> */}
            </div>
          </div>
        </div>
        <CurveBottom />
      </div>
      {/* curve end */}

      <div className="bg-white md:p-[10%] p-[5%]">
        <div>
          <h4 className="mt-4 text-black">PROCESS</h4>
          <div>
            <motion.div
              className="show mt-4 mb-10"
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-10 text-black text-web-h3 md:text-mobile-h3">
                By collaborating with various claw machine brands and stores, I
                was able to develop a dynamic and user-friendly website that
                aims to raise awareness about the exciting world of claw machine
                gaming.
              </h3>
            </motion.div>

            <motion.div
              className="show"
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-10">
                <div>
                  <p className="text-black">
                    With our interactive functionalities such as an intuitive
                    map that locates nearby claw machine stores and popular
                    brand partner locations.
                    <a href="https://alliance.cloudprogrammingonline.com/exhibition/2023">
                      <h4 className="align-center mt-5 flex gap-2 text-xl text-secondary-300">
                        View Page <BiLinkExternal />
                      </h4>
                    </a>
                  </p>
                </div>
                <ProjectCard
                  image={ALLIANCE4}
                  title={"Exhibition Landing Page"}
                />
              </div>
            </motion.div>

            <motion.div
              className="show"
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="flex mt-10 items-center gap-10">
                {/* <PortfolioCard image={ALLIANCE5} title={"Exhibition Topics"} /> */}
                <div>
                  <p className="text-black">
                    To promote claw machine awareness and tourism, we presented
                    the project to Taichung&apos;s local government to refine
                    our website data for users.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <h3 className="mt-28 text-web-h3 md:text-mobile-h3 text-center font-bold text-gray-300">
            PROJECT IS STILL IN PROGRESS
          </h3>
          <h4 className="mt-4 text-center text-gray-300">
            It is still not optimized for mobile devices, and this project is
            currently on hold.
            <br />
            Contact me for more details
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Alliance;
