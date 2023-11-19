import Link from "next/link";

export const DesktopNavItem = ({
  title = "navigator",
  path = "/",
}: {
  title: string;
  path: string;
}) => {
  return (
    <div className="relative inline-block text-lg group">
      <Link href={path} className="z-10 relative font-FuturaMaxi">
        {title}
      </Link>
      <div className="absolute left-0 -bottom-1 mt-2 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export const MobileNavItem = ({
  title = "navigator",
  path = "/",
  onClick,
}: {
  title: string;
  path: string;
  onClick?: () => void;
}) => {
  return (
    <Link onClick={onClick} href={path} className="text-3xl">
      {title}
    </Link>
  );
};
