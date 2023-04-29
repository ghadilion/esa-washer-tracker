import "./App.css";
import Washingmachine from "./Washingmachine";

function App() {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8];

   return (
      <div className="App">
         <main>
            {
               arr.map((id) => <Washingmachine id={id}></Washingmachine>)
            }
         </main>
      </div>
   );
}

export default App;
