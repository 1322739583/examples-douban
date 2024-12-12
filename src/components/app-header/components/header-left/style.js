import styled from "styled-components";
export const LeftWrapper = styled.div`
  flex: 1;
  /* background: lightcoral; */
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    display: inline-block;
    cursor: pointer;
  }
`;
