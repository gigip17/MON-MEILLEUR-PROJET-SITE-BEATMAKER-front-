import { Component } from 'react';
import './App.css';
import Site from "./containers/site/Site";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </div>
  );
}
export default App;

