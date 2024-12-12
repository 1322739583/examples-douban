import styled from "styled-components";
export const CenterWrapper = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 360px;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 24px;
  color: white;
  ${(props) => props.theme.mixin.boxShadow};

  /* background: lightblue; */

  .text-search {
    color: ${(props) => props.theme.text.primaryColor};
  }
  .icon-search-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primaryColor};
  }
`;
