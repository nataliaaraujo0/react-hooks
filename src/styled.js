import styled from "styled-components";
export const Container = styled.main`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #221d23;
  h1 {
    color: white;
  }
  .App-logo {
    width: 300px;
    height: auto;
    animation: loading 5s infinite linear;
  }
  .reverse {
    animation: loading-reverse 5s infinite linear;
  }
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loading-reverse {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
