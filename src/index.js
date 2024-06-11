const baseURL = "https://api.weatherapi.com/v1/current.json?key=21bb9746683b4f958fe115102241106"

export const getWheatherDataForCity = async (city)=> {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWheatherDataForLocation = async (lat, long)=> {
    const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`);
    return await response.json();
};