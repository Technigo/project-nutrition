import React from "react";
import Lottie from "lottie-react-web";
import animation from "../animations/green-ellipses.json";

export const ShowLoader = () => {
  return (
    <div>
      <Lottie
        options={{
          animationData: animation,
        }}
        width="150px"
        height="150px"
      />
    </div>
  );
};
