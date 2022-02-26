import React, { useState } from 'react';
import { zoomScaleText, animeLeft, animeRight, animeMid } from '../../styled-components/animations/animation';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { CardSoftSkills, ContainerCards, SoftSkillsTex, TextCard, TitleCard } from '../../styled-components/home/soft-skills-section/style';
import { TitleSection } from '../../styled-components/home/technology-section/style';


function SoftSkills() {
  const [zoomAnimate, setZoomAnimate] = useState();
  const [sofSkillsVisibility, setSoftSkillsVisibility] = useState('hidden');
  const [animeLeftIE, setAnimaLeftIE] = useState('none');
  const [animeRightIe, setAnimaRightIE] = useState('none');
  const [animeMidIE, setAnimaMidIE] = useState('none');
  const [animeLeftPC, setAnimaLeftPC] = useState('none');
  const [animeRightPC, setAnimaRightPC] = useState('none');
  const [animeMidPC, setAnimaMidPC] = useState('none');
  const [visibilityLineIE, setVisibilityLineIE] = useState('hidden');
  const [visibilityLinePC, setVisibilityLinePC] = useState('hidden');



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
    if (window.scrollY > 743) {
      setZoomAnimate(zoomScaleText)
      setSoftSkillsVisibility('none')
    } else if (window.scrollY < 652) {
      setZoomAnimate('none')
      setSoftSkillsVisibility('hidden')
    }

    if (window.scrollY > 1166) {
      setAnimaLeftIE(animeLeft);
      setAnimaMidIE(animeMid);
      setAnimaRightIE(animeRight);
      setVisibilityLineIE('none');
    } else if (window.scrollY < 1182) {
      setAnimaLeftIE('none');
      setAnimaMidIE('none');
      setAnimaRightIE('none');
      setVisibilityLineIE('hidden');
    }

    if (window.scrollY > 1509) {
      setAnimaLeftPC(animeLeft);
      setAnimaMidPC(animeMid);
      setAnimaRightPC(animeRight);
      setVisibilityLinePC('none');
    } else if (window.scrollY < 1538) {
      setAnimaLeftPC('none');
      setAnimaMidPC('none');
      setAnimaRightPC('none');
      setVisibilityLinePC('hidden');
    }
  }, 250));

  
  return (
    <div>
      <TitleSection weight="700" size="52px">Soft Skills</TitleSection>
      <SoftSkillsTex animate={zoomAnimate} visibility={sofSkillsVisibility}>
        Na Trybe temos um módulo inteiro dedicado a
        <StyleGreenWithText> soft-skills </StyleGreenWithText>
        a fim de desenvolvermos as principais habilidades requisitadas para
        a carreira de Desenvolvimento Web.
      </SoftSkillsTex>
        <ContainerCards>
          <CardSoftSkills animate={animeLeftIE} visibility={visibilityLineIE}>
            <TitleCard>Inteligência Emocional</TitleCard>
            <TextCard>
              Desenvolve a empatia e resiliência, demonstrando
              <StyleGreenWithText> autoconhecimento </StyleGreenWithText> e
              buscando conhecer as próprias emoções
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills animate={animeMidIE} visibility={visibilityLineIE}>
            <TitleCard>Comunicação</TitleCard>
            <TextCard>
              Desenvolve a escuta de forma ativa e curiosa estimulando
              descobertas e criando um 
              <StyleGreenWithText> ambiente de confiança </StyleGreenWithText> ,
              com abertura para feedbacks
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills animate={animeRightIe} visibility={visibilityLineIE}>
            <TitleCard>Colaboração</TitleCard>
            <TextCard>
              Desenvolve o
              <StyleGreenWithText> trabalho cooperativo </StyleGreenWithText>
              de forma respeitosa
              a partir de pontos de vista diferentes.
              Foco em soluções.
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills animate={animeLeftPC} visibility={visibilityLinePC}>
            <TitleCard>Pensamento Critico</TitleCard>
            <TextCard>
              Ajuda a transformar
              <StyleGreenWithText> problemas em oportunidades </StyleGreenWithText>
              incluindo múltiplos pontos de vista,
              para a tomada de decisão consciente e lógica.
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills animate={animeMidPC} visibility={visibilityLinePC}>
            <TitleCard>Criatividade</TitleCard>
            <TextCard>
            Instigar a criar ideias, alternativas origin ais e
            <StyleGreenWithText> inovadoras </StyleGreenWithText>
            diante de problemas. Enxergando desafios como oportunidades
            de aprendizado
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills animate={animeRightPC} visibility={visibilityLinePC}>
            <TitleCard>Liderança</TitleCard>
            <TextCard>
              Compreende os erros como processo inerente ao aprendizado. Busca
              <StyleGreenWithText> proatividade </StyleGreenWithText>
               e condições necessarias para alcançar
              os objetivos
            </TextCard>
          </CardSoftSkills>
        </ContainerCards>
    </div>
  )
}

export default SoftSkills;
