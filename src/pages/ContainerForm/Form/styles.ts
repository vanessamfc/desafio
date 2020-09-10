import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  > div {
    grid-template-areas: 'image form';
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > div:nth-child(1) {
      grid-area: image;

      display: flex;
      align-items: flex-start;
      padding-left: 20px;
      width: 70%;
      min-height: 70%;
    }
    > div:nth-child(2) {
      grid-area: form;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      width: 100%;
      > button {
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    > div {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > div:nth-child(1) {
        display: flex;
        align-items: flex-start;
        padding: 0 10px;
        width: 70%;
        min-height: 70%;
      }
      > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 5px;
        padding: 0 10px;
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export const FieldContainer = styled.div`
  height: 90px;
  width: 50%;
  > div {
    padding-top: 5px;
  }
  @media (max-width: 750px) {
    height: auto;
    padding: 10px;
    width: 50%;
  }
`;
