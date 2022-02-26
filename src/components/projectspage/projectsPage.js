import React from 'react';
import { BodyPage, GlobalStyle } from '../../styled-components/home/body/style';
import { ContainerProjects, TitleSectionProjects } from '../../styled-components/projects/style';
import NavBar from '../homePage/navbar';
import AboutProject from './aboutProjects';
import Carousel from './carousel';

function ProjectsPage() {
  return (
    <BodyPage height="1597px">
      <GlobalStyle/> 
      <NavBar bgcolor="#312D45"/>
      <ContainerProjects>
        <TitleSectionProjects weight="700" size="52px">Meus projetos</TitleSectionProjects>
        <Carousel />
      </ContainerProjects>
      <AboutProject></AboutProject>
    </BodyPage>
  )
}

export default ProjectsPage;