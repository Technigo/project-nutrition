import React from 'react';
import Lottie from "lottie-react-web";
import animation from "../animations/flying-avocado.json";

export const BeforeScan = () => {
  return (
    <div>
      <Lottie
        options={{
        animationData: animation,
        }}
        width="150px"
      />
    </div>
  );
};
