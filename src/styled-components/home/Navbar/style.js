import styled from 'styled-components';

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  position: fixed;
  width: 1440px;
  height: 80px;
  padding: 0 50px;
  z-index: 1;
`;

const LogoName = styled.span`
  font-family: 'Saira Stencil One', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 76px;

  letter-spacing: 0.03em;

  color: #11DC94;

`

export {
  NavbarStyle,
  LogoName,
}
