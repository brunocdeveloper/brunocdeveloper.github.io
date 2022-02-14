import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    @import url('https://fonts.googleapis.com/css2?family=Share&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const BodyPage = styled.div`
  background-color: #3F3B51;
  height: 3783px;
  margin: 0 auto;
  width: 1440px;
`
export {
  BodyPage,
  GlobalStyle,
};
