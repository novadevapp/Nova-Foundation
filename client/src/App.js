import React from "react";
import "./App.css";
import Header from "./Component/CommonComponent/Header";

function App() {
  return (
    <div className="App">
      <Header isLogged="true" className="home" />
    </div>
  );
}

export default App;
