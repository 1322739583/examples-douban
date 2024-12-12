import styled from "styled-components";
export const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;

  .register,
  .login {
    display: inline-block;
    padding: 15px 5px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }

  .menu-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    width: 86px;
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 24px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
`;
