import styled from 'styled-components';


const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 950px;
`;

const ContainerText = styled.div`
  color: #FBFAFF;
  margin-left: 50px;
  align-self: center;
  z-index: 1;
`;

const PresentationText = styled.p`
  font-family: 'Share', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight ? props.weight : 'normal' };
  font-size: ${props => props.size ? props.size : "40px" };
  line-height: 125.2%;
  letter-spacing: -0.005em;
  color: #FBFAFF;
  width: 580px;
`;


const PresentationImage = styled.img`
  margin-left: -457px;
  z-index: 0;
`;


export { 
  PresentationContainer,
  ContainerText,
  PresentationImage,
  PresentationText
}