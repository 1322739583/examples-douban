import { memo } from "react";
import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms/index";
import { HighScoreWrapper } from "../section-high-score/style";

const SectionGoodPrice = memo((props) => {
  const { infoData } = props;
  return (
    <HighScoreWrapper>
      <SectionHeader title={infoData?.title} />
      <SectionRooms roomList={infoData?.list} />
    </HighScoreWrapper>
  );
});
export default SectionGoodPrice;
