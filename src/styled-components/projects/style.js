import styled from 'styled-components';
import { RemoveOpacity, TranslateYAndOpacity } from '../animations/animation';

const ContainerProjects = styled.div`
  width: 1440px;
  height: 930px;
  animation: ${RemoveOpacity} 2.5s 0s normal;
`;

const CardsAnButtonsCarousel = styled.div`
  display: flex;
  margin: 0 8px;
`;

const CardCarousel = styled.div`
  width: 1272px;
  display: flex;
  overflow-x: auto;
  margin: 50px auto 15px;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ContainerCompleteCarousel = styled.div`
  width: 1440px;
`;

const TitleSectionProjects = styled.h1`
  padding-top: 140px;
  text-align: center;
  margin: 0 0 0 30%;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : 'normal' };
  font-size: ${props => props.size ? props.size : "4.0rem" };
  line-height: 125.2%;
  width: 604px;
  letter-spacing: -0.005em;
  color: #E5E5E6;
  animation: ${TranslateYAndOpacity} 1.5s 0s normal;
`;

const ContainerCarousel = styled.div`
  display: flex;
  background-color: #666086;
  width: 1272px;
  height: 577px;
  padding: 15px;
  border-radius: 5px;
  z-index: 0;
`;

const ContainerInfoProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: 3.8rem;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`

const TextAboutProject = styled.p`
  margin-top: 10px;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.6rem;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`;

const TechsUsed = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  margin-top: 15px;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`;

const ButtonGitHub = styled.a`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 125.2%;
  text-decoration: none;
  letter-spacing: -0.005em;
  color: #00E493;
  align-self: flex-end;
`

const LeftButton = styled.button`
  width: 68px;
  height: 101px;
  align-self: center;
  border-radius: 5px;
  border-style: none;
  opacity: ${props => props.opacity ? props.opacity : '1' };
  pointer-events: ${props => props.events ? props.events : '' };

  :focus {
    box-shadow: none;
    outline: 0;
  }

  img {
    border-radius: 5px;
  }

  img:hover {
    cursor: pointer;
    border-radius: 50%;
    transition: border-radius 0.5s;
  }
`;

const RightButton = styled.button`
  width: 68px;
  height: 101px;
  align-self: center;
  border-radius: 5px;
  border-style: none;
  opacity: ${props => props.opacity ? props.opacity : '1' };
  pointer-events: ${props => props.events ? props.events : '' };

  :focus {
    box-shadow: none;
    outline: 0;
  }
  
  img {
    border-radius: 5px;
  }

  img:hover {
    cursor: pointer;
    border-radius: 50%;
    transition: border-radius 0.5s;
  }
`;

const ContainerAbout = styled.div`
  width: 500px;
  height: 353px;
  margin-left: 89px;
`;

const SectionAboutText = styled.p`
  font-weight: ${props => props.weight ? props.weight : 400};
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-size: 3.6rem;
  line-height: 125.2%;
  letter-spacing: -0.005em;
  margin-bottom: 15px;
  color: #FBFAFF;
`
const ListTechs = styled.ul`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-size: 3.6rem;
  line-height: 125.2%;
  letter-spacing: -0.005em;
  margin-bottom: 5px;
  color: #FBFAFF;
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
  ButtonGitHub,
  ContainerCompleteCarousel,
  LeftButton,
  RightButton,
  CardCarousel,
  CardsAnButtonsCarousel,
  ContainerAbout,
  SectionAboutText,
  ListTechs
};
