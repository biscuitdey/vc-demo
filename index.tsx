import React from "react";
import * as ReactDOM from "react-dom";
import Wallet from "./src/components/wallet"

console.log("testing");

ReactDOM.render(
	<React.StrictMode>
   	<Wallet />
  	</React.StrictMode>,
	document.getElementById('root')
);