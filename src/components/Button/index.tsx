type StyledButtonStrokeProps = {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<StyledButtonStrokeProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative inline-block text-lg group ${className}`}>
      <div className="z-10 relative mb-2">{children}</div>
      <div className="absolute left-0 bottom-0 mt-2 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default Button;
