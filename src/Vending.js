import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Snicker from "./Snicker";
import Coke from "./Coke";
import Chips from "./Chips";

const Vending = () => {
  const snacks = ["snicker", "chips", "coke"];

  return (
    
      <BrowserRouter>
        <Route exact path="/">
          <h1>Vendine Machine items</h1>
          {snacks.map((snack) => (
            <Navbar name={snack} key={snack} />
          ))}
        </Route>
        <Route exact path="/snicker">
          <Snicker name="snicker" />
        </Route>
        <Route exact path="/chips">
          <Chips name="chips" />
        </Route>
        <Route exact path="/coke">
          <Coke name="coke" />
        </Route>
      </BrowserRouter>
    
  );
};

export default Vending;