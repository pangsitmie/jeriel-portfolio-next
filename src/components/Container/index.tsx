export enum ContainerBackgroundColor {
  black = "black",
  white = "white",
  gray = "gray",
  blue = "blue",
}

export interface IContainerProps {
  children: React.ReactNode;
  backgroundColor?: ContainerBackgroundColor;
  className?: string;
  backgroundUrl?: string;
  containerClassName?: string;
}

const backgroundColorStyles = {
  black: {
    colorClass: "bg-black",
  },
  white: {
    colorClass: "bg-overlay-white-100",
  },
  gray: {
    colorClass: "bg-zinc-900",
  },
  blue: {
    colorClass: "bg-blue",
    backgroundUrl: "",
  },
};

export const Container = ({
  children,
  backgroundColor = ContainerBackgroundColor.black,
  backgroundUrl,
  className = "",
  containerClassName = "",
}: IContainerProps) => {
  const { colorClass } = backgroundColorStyles[backgroundColor];

  return (
    <div className={`${colorClass} ${containerClassName} `}>
      <div
        className={`${backgroundUrl} w-full max-w-7xl px-8 md:px-6 mx-auto md:bg-none ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
