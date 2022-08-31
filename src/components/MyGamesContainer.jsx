import React from "react";
import { useState, useEffect } from "react";
import gamesJson from "../myGames.json";

import { MyGamesList } from "./MyGamesList";

export const MyGamesContainer = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = (data, time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Error");
          }
        }, time);
      });
    // const promesa = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (gamesJson.length) {
    //       resolve(gamesJson);
    //     } else {
    //       reject("Error");
    //     }
    //   }, time);
    // });

    getGames(gamesJson, 3000)
      .then((res) => {
        setGames(res);
      })
      .catch((err) => console.log(err, ": no hay juegos"));
  }, []);

  return (
    <div>
      <MyGamesList games={games} />
    </div>
  );
};
