import React from "react";
import { useState } from "react";
import { FcApproval } from "react-icons/fc";

export const Game = ({ title, img, price }) => {
  const [stylePlayed, setStylePlayed] = useState(false);
  const [played, setPlayed] = useState(false);

  function playedGames() {
    setStylePlayed(stylePlayed ? false : true);
    setPlayed(played ? false : true);
  }

  return (
    <article>
      <h3>{title}</h3>
      <h3>{price}</h3>

      <img src={img} alt="" style={{ width: "15rem" }} />

      <h4
        style={{ color: stylePlayed ? "green" : "red", cursor: "pointer" }}
        onClick={playedGames}
      >
        Toca aquí si has jugado este juego
      </h4>

      <h4 style={{ opacity: played ? 1 : 0 }}>
        CLARO QUE SI! <FcApproval />
      </h4>
    </article>
  );
};
