const CurveTop: React.FC = () => {
  const customStyles = {
    left: "-50%",
    right: "0",
    bottom: "95%",
    height: "500px",
    width: "200%",
    borderRadius: "50%",
    backgroundColor: "#151515",
  };

  return <div className="absolute" style={customStyles}></div>;
};

export default CurveTop;
