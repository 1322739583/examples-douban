import { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./components/banner/index";
import SectionHighScore from "./components/section-high-score/index";
import SectionGoodPrice from "./components/section-good-price/index";
import SectionDiscount from "./components/section-discount/index";
import { isEmptyObject } from "@/utils/isEmptyObject";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

const Home = memo((props) => {
  const { highScoreInfo, goodPriceInfo, discountInfo } = useSelector(
    (state) => ({
      highScoreInfo: state.home.highScoreInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {isEmptyObject(discountInfo) && (
          <SectionDiscount infoData={discountInfo} />
        )}
        <SectionGoodPrice infoData={goodPriceInfo} />
        <SectionHighScore infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});
export default Home;
