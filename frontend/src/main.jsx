import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

const url = `https://note-pj0j.onrender.com`; // Replace with your Render URL
const interval = 30000; // Interval in milliseconds (30 seconds)

const Main = () => {
  useEffect(() => {
    const reloadWebsite = () => {
      axios
        .get(url)
        .then((response) => {
          console.log(
            `Reloaded at ${new Date().toISOString()}: Status Code ${
              response.status
            }`
          );
        })
        .catch((error) => {
          console.error(
            `Error reloading at ${new Date().toISOString()}:`,
            error.message
          );
        });
    };

    // Call the function immediately and set an interval
    reloadWebsite(); // Call immediately on mount
    const intervalId = setInterval(reloadWebsite, interval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </React.StrictMode>
);
