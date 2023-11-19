import { BiLinkExternal } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const GAMEPAY1 = "@/assets/gamepay1.png";
const GAMEPAY2 = "@/assets/gamepay2.png";
const GAMEPAY3 = "@/assets/gamepay3.jpg";
const GAMEPAY4 = "@/assets/gamepay4.png";
const GAMEPAY5 = "@/assets/gamepay5.png";
import WorkHero from "@/pages/about/WorkHero";
import { motion } from "framer-motion";
import CurveTop from "@/components/Container/CurveTop";
import { Container } from "@/components/Container";
import ProjectCard from "../projects/ProjectCard";
import CurveBottom from "@/components/Container/CurveBottom";

type Props = {};

const Bearpay = (props: Props) => {
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
        title="Say goodbye to carrying coins and hello to mobile payment."
        subtitle1="BEAR PAY - WEB APP"
        subtitle2="#40 ENTERTAINMENT APP STORE (JUNE 2023)"
      />

      {/* CURVE DIV */}
      <div className="relative h-full w-full overflow-hidden  py-28 bg-black text-white">
        <CurveTop />
        {/* this is the content container */}
        <Container>
          <motion.div
            className="show"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="gap-20 py-20">
              <h4 className="mb-4">INTRO</h4>
              <div>
                <h2 className="">
                  Bear Pay is a
                  <span>
                    {" "}
                    mobile payment solution for playing claw machines.{" "}
                  </span>
                  While business owners can also manage and analyse their
                  business more efficiently through our{" "}
                  <span>SaaS web app.</span>
                </h2>

                <div className="flex gap-8 items-center">
                  <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                    <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                      IOS
                    </h4>
                  </a>
                  <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                    <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                      Android
                    </h4>
                  </a>
                  <a href="https://market-test-backstage.cloudprogrammingonline.com/">
                    <h4 className="align-center mt-5 flex gap-2 text-xl text-indigo-300">
                      Web App
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-4 ">
            {/* col1 */}
            <div>
              <div className="mb-4">
                <ProjectCard
                  image={GAMEPAY1}
                  title={
                    "In this project, we developed this admin webapp system for our company, brands, and stores to manage their datas"
                  }
                />
              </div>
              <ProjectCard
                image={GAMEPAY3}
                title={
                  "We also created a user-friendly interface for a statistic and graph feature, which enables users to easily analyze and comprehend their store and machine performance, revenue, and expenses."
                }
              />
            </div>
            {/* col2 */}
            <div className="flex flex-col gap-4">
              <ProjectCard
                image={GAMEPAY2}
                title={
                  "By using React's Redux and Apollo GQL for state management, We successfully separated features for different entities."
                }
              />
              <div className="flex gap-4">
                {/* <ProblemSolutionCard
                  title={"Problem"}
                  content={
                    "How to reinvent claw machine business management & payment solution"
                  }
                  color={"#F9A826"}
                />
                <ProblemSolutionCard
                  title={"Solution"}
                  content={
                    "Utilizing IoT to monitor real-time machine data, and create a mobile payment solution"
                  }
                  color={"#0063e3"}
                /> */}
              </div>
            </div>
          </div>
        </Container>
        <CurveBottom />
      </div>
      {/* curve end */}

      <div className="bg-white md:p-[10%] p-[5%]">
        <div className="flex gap-4">
          <div>
            <motion.div
              className="show"
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mt-4 text-black">PROCESS</h4>

              <h2 className="text-web-h2 mb-10 text-black">
                Developement was done using{" "}
                <span className="font-bold text-indigo-300"> Figma</span> for
                design,{" "}
                <span className="font-bold text-indigo-300">
                  {" "}
                  React TypeScript
                </span>{" "}
                for front-end development, and Apollo
                <span className="font-bold text-indigo-300"> GraphQL</span> for
                seamless client-server communication.
              </h2>
            </motion.div>

            <motion.div
              className="show"
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <div className="items-center gap-10">
                <ProjectCard
                  image={GAMEPAY4}
                  title={"Statistics Page (Light Mode)"}
                />
                <div>
                  <p className="text-black">
                    While also utilizing
                    <span className="font-bold text-indigo-300">
                      {" "}
                      React MUI
                    </span>{" "}
                    for efficient layouting and styling, resulting in a
                    professional and visually appealing user interface.
                  </p>
                </div>
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
              <div className="mt-10 items-center gap-10">
                <div>
                  <p className="text-black">
                    This web app is also optimized for mobile device and tablet,
                    and is fully responsive.
                  </p>
                </div>
                <ProjectCard image="" title={"Mobile Version"} />
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <h3 className="mt-28 text-center font-bold text-gray-300">
            PROJECT IS STILL IN PROGRESS
          </h3>
          <h4 className="mt-4 text-center text-gray-300">
            Contact me for more details
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Bearpay;
