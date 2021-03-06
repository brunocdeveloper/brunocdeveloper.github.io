import styled from 'styled-components';
import { Typing } from '../../animations/animation';
import logo from './logo.png';

const PresentationContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 950px;
  width: 100%;
  max-width: 1440px;

  background-image: url(${logo});
  background-size: 1217px 1022px;
  background-repeat: no-repeat;
  background-position: right;
  
  @media(max-width: 425px) {
    background-size: 800px 900px;
    height: 750px;
  }

  @media(max-width: 375px) {
    height: 670px;
  }
`;

const ContainerText = styled.div`
  color: #FBFAFF;
  padding: 0 25px;
  align-self: center;
  z-index: 1;

  @media(max-width: 1131px) {
    align-self: flex-end;
    margin-bottom: 160px;
  }

  @media(max-width: 425px) {
    margin-bottom: 150px;
  }
`;

const PresentationText = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : 'normal' };
  font-size: ${props => props.size ? props.size : "4.0rem" };
  line-height: 125.2%;
  color: #FBFAFF;
  width: 100%;
  max-width: 580px;
  margin: 0;

  animation: ${Typing} 1s steps(20) ${props => props.delay} normal both;
  white-space: nowrap;
  overflow: hidden;
`;

const StyleGreenWithText = styled.span`
  color: #00E493;
  animation: ${props => props.animate ? props.animate : 'none' } 1.5s 0s infinite;
`;

export { 
  PresentationContainer,
  ContainerText,
  PresentationText,
  StyleGreenWithText
};
