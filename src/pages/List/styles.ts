import styled from "styled-components";
import bg from "../../assets/bg.png";
import Button from "@material-ui/core/Button";
export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
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
    min-height: 100vmin;
    padding: 10px;
    width: 80%;
    max-width: 1200px;
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
      justify-content: center;
      align-items: center;
      > div {
        display: flex;
        align-items: center;

        width: 100%;
        > span {
          font-weight: 700;
          padding: 10px;
        }
        > img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      > div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
        width: 100%;
        > button {
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #f44336;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          :hover {
            border: 1px solid #b71c1c;
            > svg {
              color: #b71c1c;
              height: 20px;
              width: 20px;
            }
          }
          > svg {
            color: #f44336;
            height: 20px;
            width: 20px;
          }
        }
      }
    }
  }
`;
