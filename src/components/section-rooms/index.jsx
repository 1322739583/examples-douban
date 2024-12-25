import { memo } from "react";
import RoomItem from "../room-item/index";
import { RoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <RoomWrapper>
      {roomList?.slice(0, 8).map((item, index) => {
        return <RoomItem itemWidth={itemWidth} itemData={item} key={index} />;
      })}
    </RoomWrapper>
  );
});
export default SectionRooms;
