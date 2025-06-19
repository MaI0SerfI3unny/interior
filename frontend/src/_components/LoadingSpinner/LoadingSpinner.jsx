import React from "react";
import { LoadingSpinnerStyles } from "./LoadingSpinnerStyles.styled";

const LoadingSpinner = ({ width }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <LoadingSpinnerStyles $width={width} />
    </div>
  );
};

export default LoadingSpinner;
