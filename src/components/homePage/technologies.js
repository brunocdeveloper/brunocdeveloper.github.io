import React from 'react';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { TechImage,
   TechnologieSection,
   TechText,
  TitleSection } from '../../styled-components/home/technology-section/style';
import tech from './images/tech.png';


function Technologies() {
  return (
    <div>
      <TitleSection weight="700" size="52px">Tecnologias</TitleSection>
      <TechnologieSection>
        <TechText>
          Aqui apresento algumas das tecnologias que venho desenvolvendo
          ao longo da minha jornada como estudante de
          <StyleGreenWithText> desenvolvimento</StyleGreenWithText> web. 
        </TechText>
        <TechImage src={tech} alt="technology image"/>
      </TechnologieSection>
    </div>
  )
}

export default Technologies;
