import styled from 'styled-components';
import { animeLeft } from '../../animations/animation';

const TitleSection = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : 'normal' };
  font-size: ${props => props.size ? props.size : "40px" };
  margin-top: ${props => props.margin ? props.margin: 'none' };
  line-height: 125.2%;
  letter-spacing: -0.005em;
  color: #FBFAFF;
  width: 100%;
  text-align: center;
`;

const TechnologieSection = styled.section`
  display: flex;
  padding: 94px 50px 76px 50px;
  justify-content: space-between;

  @media(max-width: 1288px) {
    height: 980px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TechText = styled.div`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 125.2%;
  width: 604px;
  letter-spacing: -0.005em;
  color: #E5E5E6;
  
  animation: ${props => props.animate ? props.animate : 'none'} 0.6s 0s normal;
  visibility: ${props => props.visibility ? props.visibility : 'hidden' };


  @media(max-width: 1288px) {
    text-align: center;
  }
`;

const TechImage = styled.img`
  animation: ${props => props.animate ? props.animate : 'none'} 0.6s 0s normal;
  visibility: ${props => props.visibility ? props.visibility : 'hidden' };

  @media(max-width: 762px) {
    width: 100%;
  };
`;

export { 
  TitleSection,
  TechnologieSection,
  TechText,
  TechImage,
}
