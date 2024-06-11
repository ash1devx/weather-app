import { useEffect } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { useWheather } from "./context/Wheather";

function App() {
  const wheather = useWheather();

  useEffect(()=> {
    wheather.fethCurrentUserLocationData();
  },[])

  return (
    <div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center mt-5">
          Wheather Forecast
        </h1>
        <div className="h-12 ">
          <Input />
          <Button onClick={wheather.fetchData} value="Search" />
        </div>
        <Card />
        <Button value="Refresh" />
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen"></div>
    </div>
  );
}

export default App;
