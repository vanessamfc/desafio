import styled from "styled-components";
import bg from "../../assets/bg.png";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: url(${bg}) repeat;
  background-size: 1000px;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
  }
  > ul {
    display: flex;
    padding: 10px;
    width: 80%;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    background-color: #fff;
    > li {
      width: 100%;
      margin: 10px 0;
      padding: 5px;
      display: flex;
      border-radius: 10px;
      border: 1px solid #cfcfcf;
      + li {
      }
      align-items: center;
      > span {
        padding: 5px;
      }
      > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
  }
`;
