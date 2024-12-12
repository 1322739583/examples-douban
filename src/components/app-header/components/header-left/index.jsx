import { memo } from "react";
import { LeftWrapper } from "./style";
import DoubanLogo from "@/assets/svg/logo-douban";

const HeaderLeft = memo((props) => {
  return (
    <LeftWrapper>
      <div className="logo">
        <DoubanLogo style={{ color: "lightblue" }} />
      </div>
    </LeftWrapper>
  );
});
export default HeaderLeft;
