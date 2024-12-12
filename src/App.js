import { memo } from "react";
import routes from "./router/index";
import { useRoutes } from "react-router-dom";
import AppHeader from "./components/app-header/index";
import AppFooter from "./components/app-footer/index";

const App = memo((props) => {
  return (
    <div className="App">
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter />
    </div>
  );
});

export default App;
