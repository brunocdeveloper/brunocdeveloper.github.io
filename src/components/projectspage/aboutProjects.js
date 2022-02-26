import React from 'react';
import { ContainerAbout, ListTechs, SectionAboutText } from '../../styled-components/projects/style';

function AboutProject() {
  return (
    <ContainerAbout>
      <SectionAboutText weight="700">Sobre este portifolio</SectionAboutText>
      <SectionAboutText weight="400">Este site foi desenvolvido com:</SectionAboutText>
      <ListTechs weight="400">React</ListTechs>
      <ListTechs>Styled components</ListTechs>
      <ListTechs>Cobertura de testes e</ListTechs>
      <ListTechs>Responsividade</ListTechs>
    </ContainerAbout>
  );
}

export default AboutProject;
