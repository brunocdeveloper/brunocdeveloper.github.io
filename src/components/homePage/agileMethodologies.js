import React, { useState } from 'react';
import { zoomScaleText } from '../../styled-components/animations/animation';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { AgileMethodologiesTex, SoftSkillsTex } from '../../styled-components/home/soft-skills-section/style';
import { TitleSection } from '../../styled-components/home/technology-section/style';

function AgileMethods() { 
  const [zoomAnimate, setZoomAnimate] = useState('none');
  const [sofSkillsVisibility, setSoftSkillsVisibility] = useState('hidden');

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
    if (window.scrollY > 2181) {
      setZoomAnimate(zoomScaleText)
      setSoftSkillsVisibility('none')
    } else if (window.scrollY < 1967) {
      setZoomAnimate('none')
      setSoftSkillsVisibility('hidden')
    }
  }, 150))

  return ( 
    <div>
      <TitleSection margin="116px" weight="700" size="52px">Metodologias Ágeis</TitleSection>
      <AgileMethodologiesTex animate={zoomAnimate} visibility={sofSkillsVisibility}>
        As metodologias ágeis, como o
        <StyleGreenWithText> scrum</StyleGreenWithText> e <StyleGreenWithText>Kanban</StyleGreenWithText>,
        são uma forma de acelerar, de forma organizada,
        as entregas de um determinado projeto.
        Esse método visa estimular uma gestão de processos que garanta
        o controle e possíveis ajustes frequentemente, aumentando assim a
        sinergia entre os trabalhos em grupo, o cliente e o projeto.
      </AgileMethodologiesTex>
    </div>
  )
}

export default AgileMethods;
