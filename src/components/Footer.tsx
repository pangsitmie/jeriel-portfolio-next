import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import HeroSocials from "@/pages/home/HeroSocials";
import { Container, ContainerBackgroundColor } from "./Container";

type Props = {};

const data = [
  { text: "All", link: "/work" },
  { text: "Behind The Scene", link: "/work/behind-the-scene" },
  { text: "Game Pay", link: "/work/gamepay" },
  { text: "Claw Machine Alliance", link: "/work/alliance" },
  {
    text: "Cloud Programming Online",
    link: "/work/cloudProgramming",
  },
  {
    text: "Styled Componenets Demo",
    link: "https://github.com/pangsitmie/Websites/tree/main/styled-components-demo",
  },
  // { text: "Tucope", link: "/work/tucope" },
  // { text: "Moonz", link: "/work/moonz" },
  { text: "XState Demo", link: "/work/xstate" },
];
const flexBetween = "flex items-center justify-center";

const Footer = () => {
  return (
    <Container backgroundColor={ContainerBackgroundColor.gray}>
      <div className={"flex flex-col items-center justify-center py-12"}>
        <h1 className="text-5xl md:text-xl mb-6">Stay Ahead of the Curve!</h1>
        <p className="text-zinc-400 mb-8 text-center w-1/2">
          Ready to taste sweet success and bathe in the glory of tech?
          <br />
        </p>
        <HeroSocials />
        <p className="mt-8 text-zinc-400 text-sm text-gray">
          &copy; 2021 Round Bytes. All rights reserved.
        </p>
      </div>
    </Container>
  );
};
export default Footer;
