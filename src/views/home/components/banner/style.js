import styled from "styled-components";
// import coverImg from "@/assets/img/cover_01.jpeg";
/* background: url(${coverImg}) center/cover; */
// background: url(${require("@/assets/img/cover_01.jpeg").default}) center/cover;
export const BannerWrapper = styled.div`
  height: 529px;

  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`;
