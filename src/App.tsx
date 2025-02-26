import {createTheme} from "@mui/material/styles";
import {useMemo} from "react";
import { themeSettings } from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import Dashboard from "./scenes/Dashboard";
import Home from "./scenes/Home";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
 return (
      <div className="app">
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Predictions" element={<div>Prediction Page</div>} />
              <Route path="/Dashboard" element= {<Dashboard/>}/>
            </Routes>
          </Box>
        </ThemeProvider>
        </BrowserRouter>
      </div>
  )
}

export default App;

