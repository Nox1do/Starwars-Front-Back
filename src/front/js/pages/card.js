import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      <img 
        src={`https://starwars-visualguide.com/assets/img/${
          props.type === "planets" ? `planets` : `characters`
        }/${props.id}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text"></p>
        <hr />
        <div className="d-flex justify-content-between pb-2 ">
          <Link
            to={() =>
              props.type === "players"
                ? `/Characters/${props.id}`
                : `/Planets/${props.id}`
            }
            className="btn btn-outline-primary"
          >
            Learn More!
          </Link>
          <button
            onClick={() => actions.addFav({ id: props.id, name: props.name })}
            className="btn btn-outline-warning"
          >
            <BsHeart color="orange" />
          </button>
        </div>
      </div>
    </div>
  );
};

