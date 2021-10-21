import { createDID } from "../functions/create-did"
import React, { useState, useEffect } from "react";



function Wallet() {

	
	//use State returns an array with 2 elements -> the current state value and a function to update the current state.
	//If using object and need to update, get the old object elements using {...prevObject, update = old+1}
	
	const [did, setDID] = useState("did");

	useEffect(() => {
		const fetchDID = async() => {
			var value = await createDID();
			return value;
		}
	
		fetchDID().then((value)=> {
			setDID(value);
		})
	}, [])

	return(
		<>	
      		<h2>{ did }</h2>
		</>
	);
}

export default Wallet;


