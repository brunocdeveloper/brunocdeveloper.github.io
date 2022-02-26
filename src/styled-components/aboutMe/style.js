import styled from 'styled-components';
import { ButtonContato } from '../home/Navbar/style';

const Container = styled.div`
  width: 100%;
  height: 900px;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerAbout = styled.div`
  width: 1298px;
  height: 430px;
  margin: 0 auto;
`;

const ContainerTextAndImage = styled.div`
  height: 320px;
  display: flex;
  justify-content: space-between;
`;

const TitleAbout = styled.h1`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 125.2%;
  margin-bottom: 49px;
  letter-spacing: -0.005em;

  color: #FBFAFF;
`;

const TextAbout = styled.p`
  width: 891px;
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 125.2%;
  letter-spacing: -0.005em;
  color: #FBFAFF;
`;

const ProfileImage = styled.img`
  width: 351px;
  height: 354px;
  margin-top: -20px;
`;

const ButtonContactAbout = styled(ButtonContato)`
  margin-left: 70px;
`;

export {
  Container,
  ContainerAbout,
  TitleAbout,
  TextAbout,
  ProfileImage,
  ContainerTextAndImage,
  ButtonContactAbout
};

