import styled from "styled-components";
import bg from "../../assets/dogBg.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "content imgContainer";
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  background-color: #d7aa6f;
  div:first-child {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h1 {
      margin-bottom: 30px;
      font-size: 50px;
    }
    > p {
      font-size: 35px;

      margin-bottom: 30px;
    }
    > a {
      background-color: #ff8a65;
      border-radius: 10px;
      overflow: hidden;

      width: 100%;
      max-width: 300px;
      height: 60px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
        background: rgba(0, 0, 0, 0.08);
        width: 60px;
        height: 60px;
        > svg {
          color: #424242;
          width: 20px;
          height: 20px;
        }
      }
      > strong {
        flex: 1;
        text-align: center;
        color: #424242;
      }
    }
  }

  div:last-child {
    grid-area: imgContainer;
    display: flex;
    align-items: flex-end;
    > img {
      max-width: 100%;
      height: auto;
    }
  }
  /* &::after {
    content: "";
    background: url(${bg});
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    background-position: center;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  } */
`;
