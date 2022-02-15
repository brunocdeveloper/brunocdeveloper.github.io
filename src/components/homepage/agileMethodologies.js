import React from 'react';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { SoftSkillsTex } from '../../styled-components/home/soft-skills-section/style';
import { TitleSection } from '../../styled-components/home/technology-section/style';

function AgileMethods() { 
  return ( 
    <div>
      <TitleSection weight="700" size="52px">Metodologias Ágeis</TitleSection>
      <SoftSkillsTex>
        As metodologias ágeis, como o
        <StyleGreenWithText> scrum</StyleGreenWithText> e <StyleGreenWithText>Kanban</StyleGreenWithText>,
        são uma forma de acelerar, de forma organizada,
        as entregas de um determinado projeto.
        Esse método visa estimular uma gestão de processos que garanta
        o controle e possíveis ajustes frequentemente, aumentando assim a
        sinergia entre os trabalhos em grupo, o cliente e o projeto.
      </SoftSkillsTex>
    </div>
  )
}

export default AgileMethods;
