import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContainerProjects = styled.div`
  width: 1440px;
  height: 815px;
  border-style: dashed;
  border-color: red;
`;

const TitleSectionProjects = styled.h1`
  margin: 150px 0 0 50px;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : 'normal' };
  font-size: ${props => props.size ? props.size : "40px" };
  line-height: 125.2%;
  width: 604px;
  letter-spacing: -0.005em;
  color: #E5E5E6;
`;

const ContainerCarousel = styled.div`
display: flex;

  background-color: #666086;
  margin: 15px 0 0 50px;
  width: 1272px;
  height: 577px;
  padding: 15px;
`;

const ContainerInfoProjects = styled.div`
  width: 623px;
  height: 536px;
  margin-left: 46px;
`

const ImgProject = styled.img`
  width: 556px;
  height: 517px;
`;

const TitleProject = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`

const TextAboutProject = styled.p`
  margin-top: 18px;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`;

const TechsUsed = styled.p`
  margin-top: 130px;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`;

const ButtonGitHub = styled.a`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 125.2%;
  text-decoration: none;
  margin-top: 45px;
  text-align: end;
  display: block;
  letter-spacing: -0.005em;

  color: #00E493;
`

export { 
  ContainerProjects,
  TitleSectionProjects,
  ContainerCarousel,
  ImgProject,
  TitleProject,
  ContainerInfoProjects,
  TextAboutProject,
  TechsUsed,
  ButtonGitHub
}

