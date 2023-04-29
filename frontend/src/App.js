import { useEffect } from "react";
import "./App.css";
import Washingmachine from "./Washingmachine";

function App() {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
   
   useEffect(() => {
      const sse = new EventSource('http://localhost:5005/');
      function getRealtimeData(data) {
        console.log(data)
      }
      sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
      sse.onerror = () => {
        // error log here 
        sse.close();
      }
      return () => {
        sse.close();
      };
    }, []);

   return (
      <div className="App">
         <header>
            Washer Tracer
         </header>
         <main>
            {
               arr.map((id) => <Washingmachine id={id}></Washingmachine>)
            }
         </main>
      </div>
   );
}

export default App;
