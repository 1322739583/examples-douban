import { memo } from "react";
import routes from "./router/index";
import { useRoutes, Link } from "react-router-dom";
import AppHeader from "./components/app-header/index";
import AppFooter from "./components/app-footer/index";

const App = memo((props) => {
  return (
    <div className="App">
      <Link to="/home">首页</Link>
      <Link to="/discover">发现</Link>
      <Link to="/about">关于</Link>
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter />
    </div>
  );
});

export default App;
