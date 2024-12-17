import styled from "styled-components";
export const RoomWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 0 8px;
  .inner {
    width: 100%;
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      color: ${(props) => props.verifyColor};
    }
    .intro {
      display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
      overflow: hidden; /* 隐藏溢出的内容 */
      text-overflow: ellipsis; /* 文本溢出时显示省略号 */
      white-space: normal; /* 允许换行 */
      font-size: 14px;
    }
    .bottom {
      display: flex;
      align-items: center;
      .rating {
        font-size: 12px;
        margin-left: 2px;
      }
      .MuiRating-icon {
        margin-right: -2px;
      }
    }
  }
`;
