import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonContato, LogoName, NavbarStyle, StyledLink } from '../../styled-components/home/Navbar/style';

function NavBar(props) {
  const bgcolorProjects = props.bgcolor;
  const { pathname } = useLocation();
  const history = useNavigate();
  const [colorNavBar, setColorNavBar] = useState("");

  (() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 84) {
        setColorNavBar("#312D45");
      } else {
        setColorNavBar("");
      }
    })
  })();

  return (
    <NavbarStyle bgcolor={ pathname !== "/" ?  bgcolorProjects : colorNavBar  }>
      <LogoName onClick={ () => history("/") }>BC</LogoName>
      <div>
        <StyledLink to="/projetos">Projetos</StyledLink>
        <StyledLink to="/sobre">Sobre Mim</StyledLink>
        <ButtonContato onClick={ () => history("/contato") }>Contate</ButtonContato>
      </div>
    </NavbarStyle>
  )
}

export default NavBar;
