const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  const containerClassName = `colorContainer ${className}`;
  return (
    <div className={containerClassName}>
      <p className="text">{boxText}</p>
    </div>
  );
};

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="head">Boxes</h1>
    <div className="mainContainer">
      <Box className="small" boxText="Small" />
      <Box className="medium" boxText="Medium" />
      <Box className="large" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
