import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
        <span className="navbar-brand mx-4 h1">
          <img className="img-sw"
            src="https://www.kindpng.com/picc/m/27-270569_transparent-star-wars-logo-png-star-wars-png.png"
            alt="Bootstrap"
            width={50}
            height={34}
          />
        </span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <Link to="/login">
              <button className="btn btn-primary">Log in</button>
            </Link>
          ) : (
            <button onClick={() => actions.logout()} className="btn btn-danger">
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
