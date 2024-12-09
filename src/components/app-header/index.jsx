import { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./components/header-left/index";
import HeaderCenter from "./components/header-center/index";
import HeaderRight from "./components/header-right/index";

const AppHeader = memo((props) => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});
export default AppHeader;
