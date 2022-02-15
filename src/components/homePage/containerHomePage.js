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
          <PresentationText>Bem vindo!</PresentationText>
          <PresentationText weight="700" size="52px">Eu sou Bruno Cândido</PresentationText>
          <PresentationText>Desenvolvedor junior web <br/>
            <StyleGreenWithText>full-stack</StyleGreenWithText>
          </PresentationText>
        </ContainerText>
        <PresentationImage src={logo} alt='vector of a programmer'></PresentationImage>
      </PresentationContainer>
    </>
  )
}

export default ContainerHomePage;
