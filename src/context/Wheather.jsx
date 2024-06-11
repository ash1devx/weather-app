import { createContext, useContext, useState } from "react";
import { getWheatherDataForCity, getWheatherDataForLocation } from "..";

const WheatherContext = createContext(null);

export const useWheather = () => {
  return useContext(WheatherContext);
};

export const WheatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWheatherDataForCity(searchCity);
    setData(response);
  };

  const fethCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWheatherDataForLocation(
        position.coords.latitude,
        position.coords.latitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WheatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchData, fethCurrentUserLocationData }}
    >
      {props.children}
    </WheatherContext.Provider>
  );
};
