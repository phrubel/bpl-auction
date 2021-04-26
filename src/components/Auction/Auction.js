import React from "react";
// import css
import "./Auction.css";
// Import Bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Import fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Auction = (props) => {
  const addPlayer = props.addPlayer;
  // console.log(addPlayer);

  // // Total Budget in Reduce
  const totalBudget = addPlayer.reduce((total, player) => total + player.salary,0 );
  // Player Name in Reduce
  const totalPlayer = addPlayer.reduce((total, player) => total + " ," + player.name,0);
  // Player Name in Reduce
  const sallary = addPlayer.reduce((total, player) => total + ","+"$"+player.salary,0 );

  return (
    <div>
      <h3>Total Add Player:{addPlayer.length}</h3>
      <div className="player-form">
        <ul>
          <li>Player Name:{totalPlayer}</li>
        </ul>

        <ul>
          <li>Player Sallary:$ {sallary}</li>
        </ul>
      </div>
      <h5>Total Budget:$ {totalBudget}</h5>
      <button className="btn btn-warning">
        <FontAwesomeIcon icon={faDollarSign} /> Total Budget
      </button>
    </div>
  );
};

export default Auction;
