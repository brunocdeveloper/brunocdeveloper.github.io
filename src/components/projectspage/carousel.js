import React from 'react';
import data from '../../data/projects.js';
import { ButtonGitHub, ContainerCarousel, ContainerInfoProjects, ImgProject, TechsUsed, TextAboutProject, TitleProject } from '../../styled-components/projects/style.js';


function Carousel() {
  return (
    <div>
     <ContainerCarousel>
       <ImgProject src={data[0].projectIMG} alt="teste"/>
       <ContainerInfoProjects>
        <TitleProject>Titulo do Projeto</TitleProject>
        <TextAboutProject>
          Projeto desenvolvido com o intuito de 
          praticar buscas no banco de dados
        </TextAboutProject>
        <TechsUsed>Techs usadas:</TechsUsed>
        <TextAboutProject>queryes com order by, inner joins etc</TextAboutProject>
        <ButtonGitHub
          target="_blank"
          href="https://github.com/brunocdeveloper"
        >
          Veja no GitHub
        </ButtonGitHub>
       </ContainerInfoProjects>
     </ContainerCarousel>
    </div>
  )

}

export default Carousel;
