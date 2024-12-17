import { memo } from "react";
import RoomItem from "../room-item/index";

const SectionRooms = memo((props) => {
  const { goodPriceInfo } = props;
  return (
    <ul className="room-list">
      {goodPriceInfo?.list.slice(0, 8).map((item, index) => {
        return <RoomItem itemData={item} key={index} />;
      })}
    </ul>
  );
});
export default SectionRooms;
