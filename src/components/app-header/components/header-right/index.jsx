import { memo } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_memu";
import IconAvator from "@/assets/svg/icon_avator";

const HeaderRight = memo((props) => {
  return (
    <RightWrapper>
      <span className="register">注册</span>
      <span className="login">登录</span>
      <IconGlobal className="icon-global" />
      <div className="menu-wrapper">
        <IconMenu className="icon-menu" />
        <IconAvator />
      </div>
    </RightWrapper>
  );
});
export default HeaderRight;
