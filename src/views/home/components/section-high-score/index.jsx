import { memo } from "react";
import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms/index";
import { shallowEqual, useSelector } from "react-redux";
import { HighScoreWrapper } from "./style";

const SectionHighScore = memo((props) => {
  const { highScoreInfo } = useSelector(
    (state) => ({
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );
  return (
    <HighScoreWrapper>
      <SectionHeader
        title={highScoreInfo?.title}
        subtitle={highScoreInfo?.subtitle}
      />
      <SectionRooms roomList={highScoreInfo?.list} />
    </HighScoreWrapper>
  );
});
export default SectionHighScore;
