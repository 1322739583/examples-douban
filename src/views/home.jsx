import { memo, useEffect } from "react";
import request from "../services/index";

const Home = memo((props) => {
  useEffect(() => {
    request.get({ url: "/banners" }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div style={{ color: "lightblue" }}>
      Home
      {/* <Logo style={{ color: "lightblue" }} /> */}
      {/* <img alt="" src="../assets/svg/logo-douban.svg"></img> */}
    </div>
  );
});
export default Home;
