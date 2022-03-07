import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    @import url('https://font.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
    @import url("@fontsource/saira-stencil-one");
    @import url('https://fonts.googleapis.com/css2?family=Share&display=swap');

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: black;
    box-sizing: border-box;
  }

  body: {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const BodyPage = styled.div`
  background-color: #3F3B51;
  
  height: ${props => props.height ? props.height : "120%"};
  width: 100%;
  max-width: 1440px;

  @media(max-width: 834px) {
    height: 5800px;
  }

  @media(max-width: 425px) {
    width: 100%;
    max-width: 425px;
    height: 6800px;
  }

  @media(max-width: 375px) {
    width: 100%;
    max-width: 375px;
  }

  @media(max-width: 320px) {
    width: 100%;
    max-width: 320px;
  }
`
export {
  BodyPage,
  GlobalStyle,
};
