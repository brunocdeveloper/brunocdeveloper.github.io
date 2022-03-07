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
    background-color: black;
  }
`;

const BodyPage = styled.div`
  background-color: #3F3B51;
  height: ${props => props.height ? props.height : "100%"};
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`
export {
  BodyPage,
  GlobalStyle,
};
