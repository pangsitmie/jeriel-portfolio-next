import Hero from "@/pages/home/Hero";
import ProjectCard from "./projects/ProjectCard";
import { Container } from "@/components/Container";
import CurveBottom from "@/components/Container/CurveBottom";

const Home = () => {
  return (
    <>
      <Hero />

      <div className=" relative h-full w-full overflow-hidden">
        <Container className="text-white pt-24 pb-72">
          <div className="mb-8">
            <h1 className="text-5xl md:text-3xl mb-4 ">
              Elevate your digital presence
            </h1>

            <p className="max-w-4xl text-zinc-400 font-FuturaMaxi">
              From small businesses to large enterprises, we help brands stand
              out in a saturated market.
            </p>
          </div>

          <div className="flex pb-24 gap-16 md:flex-col md:w-screen md:-mx-6">
            <div>
              <ProjectCard
                title="Bearpay"
                subtitle="Redefine the way you play claw machines."
                image="/images/jokr.webp"
                className="w-full text-white "
                onClick={() => console.log("clicked")}
              />
              <ProjectCard
                title="Twindo Furniture"
                subtitle="Indonesia's leading furniture brand."
                image="/images/twindo_thumbnail_orange.png"
                className="w-full text-white mt-24"
                onClick={() => console.log("clicked")}
              />
            </div>
            <ProjectCard
              title="Rafa Architecture"
              subtitle="A modern architecture firm based in Surabaya."
              image="/images/rafa_card.jpg"
              className="w-1/2 text-white mt-24 md:w-full"
              onClick={() => console.log("clicked")}
            />
          </div>

          <div className="py-24 flex  gap-12 items-center md:flex-col">
            <div className="shrink-0">
              <h2 className="text-7xl md:text-4xl">
                Standing out is <br /> not an option - <br />
                it is a necessity
              </h2>

              <p className="text-2xl md:text-xl my-12 text-zinc-400 max-w-2xl">
                Every business holds immense potential, but without a
                captivating design and persuasive branding, you&apos;re just
                another face in the crowd.
                <br />
                <br />
                We believe that exceptional design can be the rocket fuel your
                brand needs to disrupt the market. We don&apos;t just make your
                brand look good, we make it unforgettable.
              </p>
            </div>
            {/* @ts-nocheck */}
            <img
              className="w-[50vw] -mr-64 h-full object-cover md:mr-0 md:w-full"
              alt="roundbytes-hero"
              src="https://media.giphy.com/media/l0HlFFTVOQz0bKYJG/giphy.gif"
            />
          </div>
        </Container>
        <CurveBottom />
      </div>
    </>
  );
};

export default Home;
