import styled from 'styled-components';

const TitleSection = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : 'normal' };
  font-size: ${props => props.size ? props.size : "40px" };
  line-height: 125.2%;
  letter-spacing: -0.005em;
  color: #FBFAFF;
  width: 1440px;
  text-align: center;
`;

const TechnologieSection = styled.section`
  display: flex;
  margin-left: 50px;
  margin-top: 94px;
`;

const TechText = styled.div`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 125.2%;
  width: 604px;
  letter-spacing: -0.005em;
  margin-right: 120px;
  color: #E5E5E6;
`;

const TechImage = styled.img`
`;


export { 
  TitleSection,
  TechnologieSection,
  TechText,
  TechImage,
}
