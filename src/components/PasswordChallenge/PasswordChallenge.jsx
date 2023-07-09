import React, { useEffect, useState } from "react";
import "./PasswordChallenge.css";
import players from "../../assets/playerlist.json";

function PasswordChallenge() {
  let [player, setPlayer] = useState();

  let handleRandomNumber = () => {
    let random = Math.floor(Math.random() * players.length);
    setPlayer(players[random]);
  };
  
  let playerName =  player?.first_name  + " " + player?.last_name 

  return (
    <div className="game-content">
      <button className="shadow__btn" onClick={handleRandomNumber}>
        Generate Player
      </button>

      <div>
        <p className="player-name">{playerName === "undefined undefined" ? "Player Name" : playerName}</p>
        <p className="team-name">{player?.team || "Team Name"}</p>
      </div>
    </div>
  );
}

export default PasswordChallenge;
