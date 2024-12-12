import { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_memu";
import IconAvator from "@/assets/svg/icon_avator";

const HeaderRight = memo((props) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleClick = (event) => {
      console.log("click 1111111");

      console.log(event.target);

      if (!event.target.closest(".menu-wrapper")) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  function clickMemu(e) {
    setShowMenu(!showMenu);
  }
  return (
    <RightWrapper>
      <span className="register">注册</span>
      <span className="login">登录</span>
      <IconGlobal className="icon-global" />
      <div className="menu-wrapper" onClick={(e) => clickMemu()}>
        <IconMenu className="icon-menu" />
        <IconAvator />
      </div>
      {showMenu && (
        <div className="panel">
          <div className="top">
            <div>注册</div>
            <div>登录</div>
          </div>
          <div className="bottom">
            <div>出租房源</div>
            <div>展开体验</div>
            <div>帮助</div>
          </div>
        </div>
      )}
    </RightWrapper>
  );
});
export default HeaderRight;
