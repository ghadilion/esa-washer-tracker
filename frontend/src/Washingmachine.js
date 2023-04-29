import "./Washingmachine.css";

function checkStatus(pendingTime) {
   const minutesLeft = Math.floor(pendingTime / 100);

   if (minutesLeft > 40) return ["soaking", "washing-machine-red.png"];
   else if (minutesLeft > 30) return ["washing", "washing-machine-red.png"];
   else if (minutesLeft > 10) return ["rinsing", "washing-machine-red.png"];
   else if (minutesLeft > 0) return ["drying", "washing-machine-yellow.png"];
   else return ["free", "washing-machine-green.png"];
}

function numToTime(pendingTime) {
   let timeAsString = pendingTime.toString();

   switch (timeAsString.length) {
      case 4:
         return timeAsString.slice(0, 2) + ":" + timeAsString.slice(2, 4);
      case 3:
         return "0" + timeAsString.slice(0, 1) + ":" + timeAsString.slice(1, 3);
      case 2:
         return "00:" + timeAsString;
      case 1:
         return "00:0" + timeAsString;
      default:
         console.log("error in time !");
         return "error";
   }
}

function Washingmachine({ id, pendingTime }) {
   const [status, imageURL] = checkStatus(pendingTime);

   return (
      <div id="wmouterbox">
         <div id="wminfoboxwrapper">
            <div id="wminfobox">
               <p className="key">
                  Machine ID: <span className="value">{id}</span>
               </p>
               <p className="key">
                  Pending time:{" "}
                  <span className="value">{numToTime(pendingTime)}</span>
               </p>
               <p className="key">
                  Status: <span className="value">{status}</span>
               </p>
            </div>
         </div>

         <img id="wmimg" src={imageURL} alt="washing-machine"></img>
      </div>
   );
}

export default Washingmachine;
