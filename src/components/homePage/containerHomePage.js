import React from 'react';
import logo from './images/logo.png';
import { PresentationContainer,
   PresentationImage,
   ContainerText, 
   PresentationText,
   StyleGreenWithText} from '../../styled-components/home/home-page/style';
import NavBar from './navbar';

function ContainerHomePage() {
  return (
    <>
     <NavBar/>
      <PresentationContainer>
        <ContainerText>
          <PresentationText delay="0s">Bem vindo!</PresentationText>
          <PresentationText weight="700" size="52px" delay="1s">Eu sou Bruno Cândido</PresentationText>
          <PresentationText delay="2s">Desenvolvedor junior web</PresentationText>
          <PresentationText delay="3s"><StyleGreenWithText>full-stack</StyleGreenWithText></PresentationText>
        </ContainerText>
        <PresentationImage src={logo} alt='vector of a programmer'></PresentationImage>
      </PresentationContainer>
    </>
  );
};

export default ContainerHomePage;
