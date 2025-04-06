import React from "react";
import logo from './logo.svg';
import NavigationBar from './components/navbar';
import './App.css';
import './styles/global.css';
import Intro from "./components/intro";
import About from "./components/about";


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div id="content">
        <Intro />
        <About />
      </div> 
    </div>
  );
}

export default App;
