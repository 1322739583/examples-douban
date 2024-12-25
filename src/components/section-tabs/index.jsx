import { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClickCallBack } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function clickTab(index, name) {
    setCurrentIndex(index);
    tabClickCallBack(index, name);
  }
  return (
    <TabsWrapper>
      {tabNames?.map((item, index) => {
        return (
          <div
            key={index}
            onClick={(e) => clickTab(index, item)}
            className={classNames("tab-item", {
              active: index === currentIndex,
            })}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});
export default SectionTabs;
