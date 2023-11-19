import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`rounded-full border-4  border-indigo-200  px-10 py-2 hover:border-primary-100`}
      onClick={() => setSelectedPage(SelectedPage.Home)}
      href={`#${SelectedPage.Home}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
