import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = (sessionStorage.setItem("token");

  const handleClick = () => {
    const postFetch = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(
      "https://3001-4geeksacade-reactflaskh-ts1xu7izylx.ws-us71.gitpod.io/api/token", postFetch)
      .then(resp => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then(data => {
        console.log("this came from the backend", data);
        sessionStorage.setItem("token", data.access_token);
      })
      .catch(error => {
        console.log("You have a error", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      
        {(token && token != "" && token != undefined)  ? "You are logged in with this token" + token:
	<div>
		 <input
		 type="text"
		 placeholder="email"
		 value={email}
		 onChange={(e) => setEmail(e.target.value)}
	   />
	   <input
		 type="password"
		 placeholder="password"
		 value={password}
		 onChange={(e) => setPassword(e.target.value)}
	   />
	   <button onClick={handleClick}>Login</button>
	 </div>
   
		};
    </div> 
  );
};
