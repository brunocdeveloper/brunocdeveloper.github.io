import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonContato, LogoName, NavbarStyle, StyledLink } from '../../styled-components/home/Navbar/style';

function NavBar() {
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
    <NavbarStyle bgcolor={colorNavBar}>
      <LogoName>BC</LogoName>
      <div>
        <StyledLink to="/projetos">Projetos</StyledLink>
        <StyledLink to="/sobre">Sobre Mim</StyledLink>
        <ButtonContato onClick={ () => history("/contato") }>Contate</ButtonContato>
      </div>
    </NavbarStyle>
  )
}

export default NavBar;
