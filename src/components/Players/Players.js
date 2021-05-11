import { useState,useEffect} from 'react';
// import Auction Component
import Auction from '../Auction/Auction';
// import Players Card Component
import PlayersCards from '../Players-Cards/PlayersCards';
// import playersData from "../../playerData/playersData";
import  "./Players.css";

const Players = () => {
    // const data=playersData.slice(0,10)
    const [players,setPlayers]=useState([]);
    const [addPlayer,setAddPlayer]=useState([])

    // Event Handler
    const handleAddPlayer=(player)=>{
        console.log("this ase..?",player)
        const newAddPlayer=[...addPlayer,player];
        setAddPlayer(newAddPlayer)
    }

// useEffect use for Api Data Load

// This api maaybe destroyed
    useEffect(()=>{
      fetch('https://api.mocki.io/v1/40fc817b')
      .then(res=>res.json())
      .then(data=>setPlayers(data))
    },[])

    return (
        <div className="players-container">
            <div className="players-card">
            {
                // using map for get array data
            players.map(player=><PlayersCards player={player} key={player.id}
                handleAddPlayer={handleAddPlayer}></PlayersCards>)
            }
            </div>

            <div className="auction-container">
             <Auction addPlayer={addPlayer}></Auction>
            </div>
        </div>

    );
};

export default Players;