import styled from 'styled-components';

const SoftSkillsTex = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 125.2%;
  width: 1233px; 
  text-align: center;
  letter-spacing: -0.005em;
  color: #E5E5E6;
  margin: 90px  61px;
`;

const ContainerCards = styled.div`
  width: 1380px;
  margin: 50px 0 190px 61px;
  display: flex;
  flex-wrap: wrap;
`;

const CardSoftSkills = styled.div`
  width: 374px;
  height: 269px;
  margin-right: 75px;
  margin-top: 126px;
`;

const TitleCard = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 31.8547px;
  line-height: 125.2%;
  margin-bottom: 28px;
  text-align: center;
  letter-spacing: -0.005em;

  color: #FBFAFF;

`;

const TextCard = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30.085px;
  line-height: 125.2%;
  text-align: center;
  letter-spacing: -0.005em;

  color: #E5E5E6;
`;

export { 
  SoftSkillsTex,
  ContainerCards,
  CardSoftSkills,
  TitleCard,
  TextCard,
}