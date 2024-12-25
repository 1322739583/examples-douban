import styled from "styled-components";
export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  .tab-item {
    flex-basis: 120px;
    height: 48px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    text-align: center;
    line-height: 48px;
    margin-right: 16px;
    /* margin-bottom: 5px; */
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
  &:last-child {
    padding-right: 0;
  }
  .active {
    color: #ffffff;
    background-color: ${(props) => props.theme.color.secondaryColor};
  }
`;
