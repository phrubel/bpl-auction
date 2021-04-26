import React from 'react';
// import Custom Css
import "./Players-Cards.css";
// import bootstrap
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// for fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const PlayersCards = (props) => {
    const{image,name,club,salary}=props.player
    // console.log(props)
    
    return (
        <div className="player">
            <img className="players-img" src={image} alt=""/>
            <div className="card-content">
                <h3>{name}</h3>
                <h4> Club: {club}</h4>
                <h5> Sallary:$ {salary}</h5>
                <button className="btn btn-success"
                    onClick={()=>props.handleAddPlayer(props.player)}
                ><FontAwesomeIcon icon={faPlusCircle} /> Select Player</button>
            </div>
        </div>
    );
};

export default PlayersCards;