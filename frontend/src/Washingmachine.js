import "./Washingmachine.css"

function Washingmachine({ id }) {
   return (
      <div id="wmouterbox">
         <p> washing machine {id} </p>
         <img src="washing-machine.png" alt="washing-machine"></img>
      </div>
   );
}

export default Washingmachine;
