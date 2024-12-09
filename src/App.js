import { memo } from "react";
import routes from "./router/index";
import { useRoutes, Link } from "react-router-dom";

const App = memo((props) => {
  return (
    <div className="App">
      <Link to="/home">首页</Link>
      <Link to="/discover">发现</Link>
      <Link to="/about">关于</Link>
      {useRoutes(routes)}
    </div>
  );
});

export default App;
