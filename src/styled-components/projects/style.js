import styled from 'styled-components';

const ContainerProjects = styled.div`
  width: 1440px;
  height: 850px;
`;

const CardsAnButtonsCarousel = styled.div`
  display: flex;
  margin: 0 8px;
`;

const CardCarousel = styled.div`
  width: 1272px;
  display: flex;
  overflow-x: auto;
  margin: 50px auto; 
`;

const ContainerCompleteCarousel = styled.div`
  width: 1272px;
  display: flex;
  justify-content: space-around;
`;

const TitleSectionProjects = styled.h1`
  padding-top: 140px;
  text-align: center;
  margin: 0 0 0 30%;
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
  font-size: 38px;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`

const TextAboutProject = styled.p`
  margin-top: 10px;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 125.2%;

  letter-spacing: -0.005em;

  color: #FBFAFF;
`;

const TechsUsed = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin-top: 15px;

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
  CardsAnButtonsCarousel
}


