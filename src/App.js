import React from "react";
import logo from './logo.svg';
import NavigationBar from './components/navbar';
import './App.css';
import './styles/global.css';
import Intro from "./components/intro";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Intro />
    </div>
  );
}

export default App;
