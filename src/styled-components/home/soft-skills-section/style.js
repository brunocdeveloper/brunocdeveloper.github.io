import styled from 'styled-components';
import { zoomScaleText } from '../../animations/animation';

const SoftSkillsTex = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 4.5rem;
  line-height: 125.2%;
  text-align: center;
  letter-spacing: -0.005em;
  color: #E5E5E6;
  margin-top: 90px;
  padding: 0px 50px;
  animation: ${props => props.animate ? props.animate : 'none' } 0.6s 0s normal;
  visibility: ${props => props.visibility ? props.visibility : 'hidden' };

  @media(max-width: 425px) {
    padding: 0 30px;
    margin-top: 55px;
  }
`;

const AgileMethodologiesTex = styled(SoftSkillsTex)`
  height: 500px;

  @media(max-width: 425px) {
    padding: 0 8px;
    font-size: 4rem;
    height: 300px;
  }
`;

const ContainerCards = styled.div`
  padding: 0 45px;
  height: 900px;
  width: 100%;
  max-width: 1440px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 1243px) {
    height: 1300px;
  }

  @media(max-width: 837px) {
    height: 2350px;
  }

  @media(max-width: 425px) {
    padding-top: 45px;
    height: 1800px;
  }

  @media(max-width: 375px) {
    height: 1700px;
  }
`;

const CardSoftSkills = styled.div`
  width: 374px;
  height: 269px;
  margin-top: 100px;

  animation: ${props => props.animate ? props.animate : 'none' } 0.6s 0s normal;
  visibility: ${props => props.visibility ? props.visibility : 'hidden' };

  @media(max-width: 425px) {
    margin-top: 15px;
  }

`;

const TitleCard = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3.1rem;
  line-height: 125.2%;
  margin-bottom: 28px;
  text-align: center;
  letter-spacing: -0.005em;
  color: #FBFAFF;

  @media(max-width: 671px) {
    font-size: 4.5rem;
  }
`;

const TextCard = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 3.0rem;
  line-height: 125.2%;
  text-align: center;
  letter-spacing: -0.005em;

  color: #E5E5E6;

  @media(max-width: 671px) {
    font-size: 4.0rem;
  }
`;

export { 
  SoftSkillsTex,
  ContainerCards,
  CardSoftSkills,
  TitleCard,
  TextCard,
  AgileMethodologiesTex,
}