import { memo } from "react";
import routes from "./router/index";
import { useRoutes } from "react-router-dom";
import AppHeader from "./components/app-header/index";
import AppFooter from "./components/app-footer/index";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = memo((props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppHeader />
        {useRoutes(routes)}
        <AppFooter />
      </div>
    </ThemeProvider>
  );
});

export default App;
