import React from 'react';
import { BodyPage, GlobalStyle } from '../../styled-components/home/body/style';
import { TitleSection } from '../../styled-components/home/technology-section/style';
import { ContainerProjects, TitleSectionProjects } from '../../styled-components/projects/style';
import NavBar from '../homePage/navbar';

function ProjectsPage() {
  return (
    <BodyPage height="1597px">
      <GlobalStyle/> 
      <NavBar bgcolor="#312D45"/>
      <ContainerProjects>
        <TitleSectionProjects>Teste</TitleSectionProjects>
      </ContainerProjects>

    </BodyPage>
  )
}

export default ProjectsPage;