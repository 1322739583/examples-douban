import { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/banner/index";
import { fetchHomeDataAction } from "@/store/modules/home";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import SectionHeader from "@/components/section-header/index";
import RoomItem from "@/components/room-item/index";
import SectionRooms from "@/components/section-rooms/index";

const Home = memo((props) => {
  // const state = useSelector(
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction())
      .then()
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms goodPriceInfo={goodPriceInfo} />
        </div>
      </div>
    </HomeWrapper>
  );
});
export default Home;
