import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonContato, LogoName, NavbarStyle, StyledLink } from '../../styled-components/home/Navbar/style';

function NavBar(props) {
  const bgcolorProjects = props.bgcolor;
  const { pathname } = useLocation();
  const history = useNavigate();
  const [colorNavBar, setColorNavBar] = useState("");

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 53) {
      setColorNavBar("#312D45");
    } else {
      setColorNavBar("");
    }
  }, 200))

  function topPage() {
    window.scroll(0,0);
  };

  return (
    <NavbarStyle bgcolor={ pathname !== "/" ?  bgcolorProjects : colorNavBar  }>
      <LogoName onClick={ () => {
        history("/");
        topPage()
      } }>BC</LogoName>
      <div>
        <StyledLink to="/projetos" onClick={ () => topPage() }>Projetos</StyledLink>
        <StyledLink to="/sobre" onClick={ () => topPage() }>Sobre Mim</StyledLink>
        <ButtonContato onClick={ () =>  {
          history("/contato")
          topPage()
        } }>Contate</ButtonContato>
      </div>
    </NavbarStyle>
  )
}

export default NavBar;
