import React from 'react';
import { CenterContent, Container, ContentList, ImgContact, ListContacts, TextLink, TitleContact } from '../../styled-components/contact/style';
import { BodyPage, GlobalStyle } from '../../styled-components/home/body/style';
import NavBar from '../homePage/navbar';
import whatsapp from './image/whatsapp.png';
import github from './image/github.png';
import linkedin from './image/linkedin.png';

function ContactPage() {
  return (
    <BodyPage height="1300px;">
      <GlobalStyle />
      <NavBar bgcolor="#312D45"/>
      <Container>
        <CenterContent>
          <TitleContact>Meus contatos e minhas redes:</TitleContact>
          <ContentList>
            <ListContacts
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5535988196563&text="
            >
              <ImgContact src={ whatsapp } alt="teste"/>
              <TextLink>Whatsapp</TextLink>
            </ListContacts>
            <ListContacts
              target="_blank"
              href="https://github.com/brunocdeveloper"
            >
              <ImgContact src={ github } alt="teste"/>
              <TextLink>GitHub</TextLink>
            </ListContacts>
            <ListContacts
              target="_blank"
              href="https://github.com/brunocdeveloper"
            >
              <ImgContact src={ linkedin } alt="teste"/>
              <TextLink>Linkedin</TextLink>
            </ListContacts>
          </ContentList>
        </CenterContent>
      </Container>
    </BodyPage>
  )
}

export default ContactPage;
