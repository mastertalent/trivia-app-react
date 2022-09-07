import React from "react";

const LoadingSpin = () => {
  return (
    <div className="center">
      <div className="lds-hourglass"></div>
      <div></div>
      <div>Loading Problems...</div>
    </div>
  );
};
export default LoadingSpin;
