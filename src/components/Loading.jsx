import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => {
  return (
    // flexbox styling, centers the loading circle
    <div className="flex items-center justify-center">
      <Loader type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  );
};
