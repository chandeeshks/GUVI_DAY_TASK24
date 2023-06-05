import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";

function App() {
  return (
    <div className="App">
     {
      <CreateUser/>
     }
    </div>
  );
}

export default App;
