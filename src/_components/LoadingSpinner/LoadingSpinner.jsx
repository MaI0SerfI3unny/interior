import React from "react";
import { LoadingSpinnerStyles } from "./LoadingSpinnerStyles.styled";

const LoadingSpinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <LoadingSpinnerStyles />
    </div>
  );
};

export default LoadingSpinner;
