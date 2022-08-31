import React from "react";
import { Game } from "./Game";

export const MyGamesList = ({ games }) => {
  const flex = { display: "flex", justifyContent: "space-evenly" };
  return (
    <section style={flex}>
      {games.length ? (
        games.map((game) => <Game key={game.id} {...game} />)
      ) : (
        <h2>Cargando...</h2>
      )}
    </section>
  );
};
