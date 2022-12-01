import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import { color } from "@mui/system";
import { FindUs } from "./Pages/FindUs";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffedb3",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="AppContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/FindUs" element={<FindUs />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
