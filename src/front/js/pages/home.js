import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import {Card} from "../pages/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
        if (store.token && store.token != "" && store.token != undefined) actions.getMessage();
	},[store.token])


	return (
		<> 
		<h1 className="mx-3" >Characters</h1>
		<div className=" row flex-row flex-nowrap overflow-scroll mx-2 py-2">    
		{store.characters.map((item, index) => {
					return (
					  <Card key={index} name={item.name} type='players' id={item.uid}/>
					);
				  })}
			  </div>
		  
				   
		
		  <h1 className="mx-3">Planets</h1>
		<div className=" row flex-row flex-nowrap overflow-scroll mx-2">
		{store.planets.map((item, i) => {
					return (
					  <Card key={i} name={item.name} type='planets' id={item.uid}/>
					);
				  })}
			  </div>
		 
		
		  
		  </>
	  );
				};
