import PropTypes from "prop-types";
import { memo } from "react";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <RoomWrapper
      itemWidth={itemWidth}
      verifyColor={itemData?.verifyInfo?.textColor || "#cccccc"}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.cover} alt="" />
        </div>

        <div className="title">{itemData.name}</div>
        <div className="intro">{itemData.intro}</div>
        <div className="price">￥{itemData.price}</div>
        <div className="bottom">
          <Rating
            name="half-rating-read"
            defaultValue={itemData.ranking}
            precision={0.5}
            sx={{ fontSize: "12px" }}
            readOnly
          />
          <span className="rating">{itemData.ranking.toFixed(1)}</span>
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};
export default RoomItem;
