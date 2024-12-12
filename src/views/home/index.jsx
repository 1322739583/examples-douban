import { memo, useEffect } from "react";
import request from "@/services/index";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/banner/index";

const Home = memo((props) => {
  useEffect(() => {
    request.get({ url: "/banners" }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  );
});
export default Home;
