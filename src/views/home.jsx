import { memo, useEffect } from "react";
import request from "../services/index";

const Home = memo((props) => {
  useEffect(() => {
    request.get({ url: "/banners" }).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Home</div>;
});
export default Home;
