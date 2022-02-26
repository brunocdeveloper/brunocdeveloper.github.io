import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerAbout, TitleAbout, TextAbout, ProfileImage, ContainerTextAndImage, ButtonContactAbout } from '../../styled-components/aboutMe/style';
import { BodyPage, GlobalStyle } from '../../styled-components/home/body/style';
import NavBar from '../homePage/navbar';
import bruno from './image/bruno.png';

function AboutMe() {
  const history = useNavigate();

  return (
    <BodyPage height="1300px;">
      <GlobalStyle />
      <NavBar bgcolor="#312D45"/>
      <Container>
        <ContainerAbout>
          <TitleAbout>Olá, visitante!</TitleAbout>
          <ContainerTextAndImage>
          <TextAbout>Eu  me chamo Bruno e estou em transição de carreira para 
            o desenvolvimento web. Tenho pouco mais de um ano de 
            experiência como Dev em projetos acadêmicos e pessoais.
            Atualmente estou tentando me aprofundar nas stacks já 
            aprendidas e em paralelo conhecendo um pouco mais sobre
            TypeScript.
          </TextAbout>
          <ProfileImage src={ bruno }/>
          </ContainerTextAndImage>
        </ContainerAbout>
      <ButtonContactAbout onClick={ () => history("/contato") } >Contate</ButtonContactAbout>
      </Container>
    </BodyPage>
  );
}

export default AboutMe;
