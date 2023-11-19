type Props = {
  title: string;
  subtitle1: string;
  subtitle2: string;
};
const WorkHero = ({ title, subtitle1, subtitle2 }: Props) => {
  return (
    <div className="flex h-[75wh] items-center justify-center bg-white pt-36 px-52">
      <div>
        <h1 className="text-web-h0 md:text-mobile-h0 leading-tight mb-14">
          {title}
        </h1>
        <h4 className="text-right">{subtitle1}</h4>
        <h5 className="text-right text-indigo-300">{subtitle2}</h5>
      </div>
    </div>
  );
};
export default WorkHero;
