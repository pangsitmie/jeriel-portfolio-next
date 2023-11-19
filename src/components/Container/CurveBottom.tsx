interface ICurveBottomProps {
  backgroundColor?: string;
}
const CurveBottom = ({
  backgroundColor = "bg-zinc-900",
}: ICurveBottomProps) => {
  const customStyles = {
    left: "-50%",
    right: "0",
    top: "95%",
    height: "500px",
    width: "200%",
    borderRadius: "50%",
  };

  return (
    <div className={`absolute ${backgroundColor}`} style={customStyles}></div>
  );
};

export default CurveBottom;
