import React from "react";

const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="rounded-full border border-zinc-700 group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute rounded-t-full left-0 top-0 h-[2px] w-0 bg-indigo-600 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute rounded-r-full right-0 top-0 h-0 w-[2px] bg-indigo-600 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute rounded-b-full bottom-0 right-0 h-[2px] w-0 bg-indigo-600 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute rounded-l-full bottom-0 left-0 h-0 w-[2px] bg-indigo-600 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;
