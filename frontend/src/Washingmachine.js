import "./Washingmachine.css";

function Washingmachine({ id, timePending, status }) {
   return (
      <div id="wmouterbox">
         <div id="wminfoboxwrapper">
            <div id="wminfobox">
               <p className="key">
                  Machine ID: <span className="value">{id}</span>
               </p>
               <p className="key">
                  Time pending: <span className="value">{timePending}</span>
               </p>
               <p className="key">
                  Status: <span className="value">{status}</span>
               </p>
            </div>
         </div>
         <img src="washing-machine-yellow.png" alt="washing-machine"></img>
      </div>
   );
}

export default Washingmachine;
