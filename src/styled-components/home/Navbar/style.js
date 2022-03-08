import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bgcolor ? props.bgcolor : '' };
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 1440px;
  height: 80px;
  padding: 0 50px;
  z-index: 2;
  transition: background-color 0.2s;

  @media(max-width: 425px) {
    max-width: 425px;
    width: 100%;
    padding: 0 40px;
  }

  @media(max-width: 375px) {
    max-width: 375px;
    width: 100%;
    padding: 0;
  }

  @media(max-width: 320px) {
    max-width: 320px;
    width: 100%;
  }
`;

const LogoName = styled.span`
  font-family: 'Saira Stencil One', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 4.8rem;
  line-height: 76px;

  letter-spacing: 0.03em;

  color: #11DC94;

  @media(max-width: 425px) {
    display: none;
  }

  :hover {
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  font-family: 'Pragati Narrow', sans-serif;
  margin-right: 36px;
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 30px;

  color: #FBFAFF;
  text-decoration: none;
`;

const ButtonContato = styled.button`
  width: 145px;
  height: 43px;
  background-color: #26BCBF;
  border-radius: 19px;
  text-decoration: none;
  border: none;
  font-family: 'Pragati Narrow', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 30px;

  color: #FBFAFF;
  text-decoration: none;

  :focus {
    box-shadow: none;
    outline: 0;
  }
`;


export {
  NavbarStyle,
  LogoName,
  StyledLink,
  ButtonContato,
}
