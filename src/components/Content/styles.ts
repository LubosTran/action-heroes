import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/assets/2660.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const ListWrapper = styled.div`
  display: flex;
  background: white;
  max-height: 70%;
  width: 50%;
  overflow-y: scroll;
  overflow-x: clip;
  border-radius: 10px;
  border: 5px solid;
  position: absolute;
  bottom: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .ant-list {
    width: 100%;
  }
  .ant-list-item-meta {
    justify-content: center;
    flex-basis: min-content;
  }
  .ant-list-item-meta-content {
    flex: 0;
  }
  :-webkit-scrollbar {
    display: none;
  }
  :hover {
    overflow-y: scroll;
  }
  @media only screen and (min-width: 768px) {
    overflow-y: hidden;
  }
`;

export const InputWrapper = styled.input`
  display: flex;
  width: 70%;
  border-radius: 10px;
  border: 10px solid #56e1e7;
  height: 5em;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50px;
  :focus-visible {
    outline: none;
  }
  @media only screen and (min-width: 768px) {
    overflow-y: hidden;
  }
`;
