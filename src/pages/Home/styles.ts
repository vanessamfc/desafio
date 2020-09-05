import styled from "styled-components";
import bg from "../../assets/dogBg.jpg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  > h1 {
    font-size: 50px;
  }
  > p {
    font-size: 35px;
  }
  &::after {
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
  }
`;
