import React from "react";
import { useWheather } from "../context/Wheather";

export const Input = () => {
  const wheather = useWheather();

  return (
    <input
    className="h-full w-96 p-6 focus:outline-1 outline outline-1 rounded-lg outline-slate-600"
      placeholder="Search here"
      value={wheather.searchCity}
      onChange={(e)=> wheather.setSearchCity(e.target.value)}
    />
  );
};
