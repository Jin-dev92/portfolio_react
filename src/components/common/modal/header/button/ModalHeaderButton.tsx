const ModalHeaderButton = ({ color, clickFunction }) => {
  const buttonStyle = {
    backgroundColor: color,
    width: 15,
    height: 15,
    borderRadius: 10,
    cursor: "pointer",
  };
  return <div style={buttonStyle} onClick={clickFunction}></div>;
};

export default ModalHeaderButton;
