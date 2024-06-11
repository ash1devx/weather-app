import React from "react";
import { useWheather } from "../context/Wheather";

export const Card = () => {
  const wheather = useWheather();
  return (
    <div className="border p-6 flex flex-col items-center justify-evenly shadow-lg w-96 h-48">
      <div>
        <img
          src={wheather.data?.current?.condition?.icon}
          alt=""
          className=""
        />
        <h2 className="text-2xl font-medium">
          {wheather.data?.current?.temp_c} {wheather.data? "C" : ""}
        </h2>
        <h5 className="font-medium">
          {wheather.data?.location?.name}{wheather.data? "," : ""} {wheather.data?.location?.country}
        </h5>
      </div>
    </div>
  );
};
