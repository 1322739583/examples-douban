import { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";

const HeaderCenter = memo((props) => {
  return (
    <CenterWrapper>
      <span className="text-search">搜索房源和体验</span>
      <div className="icon-search-wrapper">
        <IconSearch />
      </div>
    </CenterWrapper>
  );
});
export default HeaderCenter;
