import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bgcolor ? props.bgcolor : '' };
  align-items: center;
  position: fixed;
  width: 1440px;
  height: 80px;
  padding: 0 50px;
  z-index: 2;

  transition: background-color 0.5s;
`;

const LogoName = styled.span`
  font-family: 'Saira Stencil One', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 76px;

  letter-spacing: 0.03em;

  color: #11DC94;

  :hover {
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  font-family: 'Pragati Narrow';
  margin-right: 36px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
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

  font-family: 'Pragati Narrow';
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;

  color: #FBFAFF;
  text-decoration: none;

  :focus {
    box-shadow: none;
    outline: 0;
  }
`


export {
  NavbarStyle,
  LogoName,
  StyledLink,
  ButtonContato,
}
