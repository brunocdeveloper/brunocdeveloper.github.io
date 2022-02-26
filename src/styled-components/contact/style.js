import styled from "styled-components";
import { TitleAbout } from "../aboutMe/style";

const Container = styled.div`
  height: 900px;
  padding-top: 14%;
`;

const CenterContent = styled.div`
  width: 1298px;
  height: 430px;
  margin: 0 auto;
`;

const TitleContact = styled(TitleAbout)`
`;

const ContentList = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ListContacts = styled.a`
  text-decoration: none;
;`

const ImgContact = styled.img`
  width: 80px;
`;

const TextLink = styled.span`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.08em;
  text-decoration: none;

  color: #FBFAFF;
`;


export {
  Container,
  CenterContent,
  TitleContact,
  ListContacts,
  ImgContact,
  TextLink,
  ContentList
}
