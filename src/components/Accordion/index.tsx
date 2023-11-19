import Image from "next/image";
import { useState } from "react";
import Tab from "../Tab";

interface IAccordionProps {
  data: { title: string; description: string; img?: any; tag?: string }[];
  className?: string;
}

const lottieStyle = {
  height: "100%",
};

export const Accordion = ({ data, className }: IAccordionProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabClick = (index: number) => {
    return () => setActiveTabIndex(index);
  };

  const isImageAvailable = Boolean(data[activeTabIndex].img);

  return (
    <div
      className={`${
        isImageAvailable
          ? "grid grid-cols-12 lg:grid-cols-8 gap-6 md:flex md:flex-col-reverse justify-between items-center"
          : ""
      }`}
    >
      <div className="col-span-4 lg:col-span-4">
        <Image
          src={data[activeTabIndex].img}
          alt=""
          className="w-full mx-auto"
          width={300}
          height={512}
        />
      </div>
      <div
        className={`col-start-6 col-span-6 lg:col-span-4 w-full flex flex-col gap-y-16 md:gap-y-24 md:mt-48 md:max-w-full ${className}`}
      >
        {data.map((item, index) => (
          <Tab
            title={item.title}
            bodyText={item.description}
            active={activeTabIndex === index}
            tag={item.tag}
            key={index}
            onClick={handleTabClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
