import { useRef } from "react";

import Tag, { ITagProps } from "../Tag";

interface ITabProps {
  lineClassName?: string;
  iconName?: string;
  title: string;
  bodyText?: string;
  tag?: string;
  tagColor?: ITagProps["type"];
  className?: string;
  onClick?: () => void;
  active?: boolean;
  isStatic?: boolean;
}

export default function Tab({
  lineClassName = "",
  iconName = "",
  title = "Title",
  bodyText = "",
  tag = "",
  tagColor = "pink",
  className = "",
  onClick,
  active = false,
  isStatic = false,
}: ITabProps) {
  const expandedHeightRef = useRef<HTMLInputElement>(null);
  const calculatedHeight = () => {
    if (isStatic) {
      return "fit-content";
    }
    if (active) {
      return expandedHeightRef.current
        ? `${expandedHeightRef.current?.clientHeight}px`
        : "fit-content";
    }
    return "0px";
  };

  return (
    <div
      className={`flex flex-row md:flex-col gap-x-4 gap-y-6 group ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div
        className={`w-1 md:w-full md:h-2 self-stretch flex-none ${
          isStatic
            ? "bg-pink md:bg-transparent"
            : active
            ? "bg-pink delay-500"
            : "bg-transparent)"
        } transission-all duration-300 ease-in-out ${lineClassName} `}
      />
      <div>
        <div className="flex md:flex-row items-start md:items-center">
          <div className="w-full flex flex-row items-center">
            <h4
              className={`grow text-web-h4 md:text-mobile-h3 group-hover:text-pink ${
                !isStatic && active ? "text-pink" : "text-white"
              } 
            md:transition-colors md:duration-300 ease-in-out md:delay-500`}
            >
              {title}
            </h4>
          </div>
          {tag && (
            <Tag
              type={tagColor}
              className={`w-fit ml-4 md:block hidden 
            ${
              isStatic || active ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300 ease-in-out shrink-0`}
            >
              {tag}
            </Tag>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out delay-100`}
          style={{ height: calculatedHeight() }}
        >
          <div className={`pt-4 md:pt-8 `} ref={expandedHeightRef}>
            {tag && (
              <Tag type={tagColor} className="w-fit md:hidden">
                {tag}
              </Tag>
            )}

            <p
              className={`${
                tag ? "mt-16" : "mt-0"
              } md:mt-0 text-web-body-16 md:text-mobile-body-14 text-white`}
            >
              {bodyText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
