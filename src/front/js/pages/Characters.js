import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (type) => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  
  useEffect(() => {
    if (params.theid) {
      actions.verInfoPersonajes(params.theid);
    }
  }, [params.theid]);
  return (
    <div className="d-flex m-2 justify-content-center">
      <img
        style={{ width: "240px", height: "300px" }}
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          params.theid +
          ".jpg"
        }
      />
      <div
        className="alert alert-warning"
        style={{ width: "500px", height: "300px" }}
        role="alert"
      >
        charactername: {store.infoCharacters.name} <br />
        <br />
        <hr />
        height: {store.infoCharacters.height} <br />
        <br />
        <hr />
        mass: {store.infoCharacters.mass} <br />
        <br />
        <hr />
        hair_color: {store.infoCharacters.hair_color} <br />
        <br />
      </div>
    </div>
  );
};
