import { memo } from "react";
import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms/index";
import SectionTabs from "@/components/section-tabs/index";
import { useDispatch } from "react-redux";
import { useState, useCallback, useEffect } from "react";
import { DiscountWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";

const SectionDiscount = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);

  const tabClickCallBack = useCallback((index, name) => {
    setName(name);
  }, []);

  const tabNames = infoData?.dest_address?.map((item) => item.name);

  return (
    <DiscountWrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionTabs tabNames={tabNames} tabClickCallBack={tabClickCallBack} />
      <SectionRooms
        roomList={infoData?.dest_list?.[name]}
        itemWidth={"33.33%"}
      />
    </DiscountWrapper>
  );
});
export default SectionDiscount;
