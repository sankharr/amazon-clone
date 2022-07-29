// imports

import React from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// styling
import "./App.css";
import { green, purple } from "@mui/material/colors";

// components
import Header from "./components/header/Header";
import MainLayout from "./layouts/MainLayout";
import Router from "./routes";

// pages
import Home from "./pages/home/Home";


const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        }
    }
})


function App() {
  return (
    // <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    // </div>
  );
}

export default App;
