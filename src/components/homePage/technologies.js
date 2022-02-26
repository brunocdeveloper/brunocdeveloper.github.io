import React, { useState } from 'react';
import { animeLeft, animeRight } from '../../styled-components/animations/animation';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { 
  TechImage,
  TechnologieSection,
  TechText,
  TitleSection } from '../../styled-components/home/technology-section/style';
import tech from './images/tech.png';


function Technologies() {
  const [animaLeft, setAnimaLeft] = useState('none');
  const [animaRight, setAnimaRight] = useState('none');
  const [visibility, setVisibility] = useState('hidden');

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
    if (window.scrollY > 150) {
      setAnimaLeft(animeLeft);
      setAnimaRight(animeRight);
      setVisibility('none');
    } else {
      setAnimaLeft("");
      setAnimaRight("")
      setVisibility('hidden');
    }
  }, 150));

  return (
    <div>
      <TitleSection weight="700" size="52px">Tecnologias</TitleSection>
      <TechnologieSection>
        <TechText animate={animaLeft} visibility={visibility}>
          Aqui apresento algumas das tecnologias que venho desenvolvendo
          ao longo da minha jornada como estudante de
          <StyleGreenWithText> desenvolvimento</StyleGreenWithText> web. 
        </TechText>
        <TechImage animate={animaRight} visibility={visibility} src={tech} alt="technology image"/>
      </TechnologieSection>
    </div>
  )
}

export default Technologies;
