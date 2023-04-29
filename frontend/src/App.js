import { useState, useEffect } from "react";
import Washingmachine from "./Washingmachine";
import SVG from "./wave.svg";
import "./App.css";

function App() {
   const [washTimes, setWashTimes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

   useEffect(() => {
      const serverURL = "http://localhost:8080";

      const fetchUpdatedTimes = setInterval(async () => {
         const res = await fetch(serverURL);
         const { data } = await res.json();
         setWashTimes(data);
         console.log(data);
      }, 1000);

      return () => clearInterval(fetchUpdatedTimes);
   }, []);

   return (
      <div className="App">
         <img  id="wave" src={SVG}></img>
         <header>Washer Tracer</header>
         <main>
            {washTimes.map((washTimes, index) => (
               <Washingmachine
                  pendingTime={washTimes}
                  id={index + 1}
               ></Washingmachine>
            ))}
         </main>
      </div>
   );
}

export default App;
