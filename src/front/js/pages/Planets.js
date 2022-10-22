import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";

export const Planets = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  console.log(store.infoPlanets);
  useEffect(() => {
    if (params.theid) {
      actions.verInfoPlanets(params.theid);
    }
  }, [params.theid]);
  return (
    <div className="d-flex m-2 justify-content-center">
      <img
        style={{ width: "240px", height: "300px" }}
        src={
          "https://starwars-visualguide.com/assets/img/planets/" +
          params.theid +
          ".jpg"
        }
      />
      <div
        className="alert alert-warning"
        style={{ width: "500px", height: "300px" }}
        role="alert"
      >
        <b>Name:</b> {store.infoPlanets.name} <br />
        <br />
        <hr />
        <b>Gravity:</b> {store.infoPlanets.gravity} <br />
        <br />
        <hr />
        <b>Terrain:</b> {store.infoPlanets.terrain} <br />
        <br />
        <hr />
        <b>Population:</b> {store.infoPlanets.population} <br />
        <br />
      </div>
    </div>
  );
};
