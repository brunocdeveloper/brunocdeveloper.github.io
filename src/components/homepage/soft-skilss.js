import React from 'react';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { SoftSkillsTex } from '../../styled-components/home/soft-skills-section/style';
import { TitleSection } from '../../styled-components/home/technology-section/style';

function SoftSkills() {
  return (
    <div>
      <TitleSection weight="700" size="52px">Soft Skills</TitleSection>
      <SoftSkillsTex>
        Na Trybe temos um módulo inteiro dedicado a
        <StyleGreenWithText> soft-skills </StyleGreenWithText>
        a fim de desenvolvermos as principais habilidades requisitadas para
        a carreira de Desenvolvimento Web.
      </SoftSkillsTex>
    </div>
  )
}

export default SoftSkills;
