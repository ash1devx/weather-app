import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WheatherProvider } from "./context/Wheather.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WheatherProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WheatherProvider>
);
