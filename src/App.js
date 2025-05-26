import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import NavigationBar from './components/navbar';
import './App.css';
import './styles/global.css';
import Intro from "./components/intro";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavigationBar />
        <div id="content">
          <Intro />
          <About />
          <Experience />
          <Projects />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
