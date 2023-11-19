import { projectData } from "@/data/data";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Link from "next/link";
import Button from "@/components/Button";

const Projects = () => {
  console.log(projectData);

  return (
    <AwesomeSlider
      animation={"cubeAnimation"}
      fillParent={true}
      bullets={false}
      organicArrows={true}
    >
      {projectData.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-center overflow-y-hidden h-screen w-screen   relative`}
          style={{
            backgroundImage: `url(${item.backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-white text-center mb-12 z-0 px-16 sm:px-4">
            <span className="text-gray mb-2">
              {item.subtitle.toUpperCase()}
            </span>
            <h1 className="text-8xl font-bold md:text-5xl mb-6">
              {item.title}
            </h1>
            <h4 className="text-xl md:text-md">{item.description}</h4>
          </div>

          <div className="absolute bottom-[10%] z-index-0">
            <Link href={item.link}>
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Projects;
