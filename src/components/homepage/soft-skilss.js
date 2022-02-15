import React from 'react';
import { StyleGreenWithText } from '../../styled-components/home/home-page/style';
import { CardSoftSkills, ContainerCards, SoftSkillsTex, TextCard, TitleCard } from '../../styled-components/home/soft-skills-section/style';
import { TitleSection } from '../../styled-components/home/technology-section/style';


function SoftSkills() {
  return (
    <div>
      <TitleSection weight="700" size="52px">Soft Skills</TitleSection>
      <SoftSkillsTex>
        Na Trybe temos um módulo inteiro dedicado a
        <StyleGreenWithText> soft-skills </StyleGreenWithText>
        a fim de desenvolvermos as principais habilidades requisitadas para
        a carreira de Desenvolvimento Web.
        <ContainerCards>
          <CardSoftSkills>
            <TitleCard>Inteligência Emocional</TitleCard>
            <TextCard>
              Desenvolve a empatia e resiliência, demonstrando
              <StyleGreenWithText> autoconhecimento </StyleGreenWithText> e
              buscando conhecer as próprias emoções
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills>
            <TitleCard>Comunicação</TitleCard>
            <TextCard>
              Desenvolve a escuta de forma ativa e curiosa estimulando
              descobertas e criando um 
              <StyleGreenWithText> ambiente de confiança </StyleGreenWithText> ,
              com abertura para feedbacks
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills>
            <TitleCard>Colaboração</TitleCard>
            <TextCard>
              Desenvolve o
              <StyleGreenWithText> trabalho cooperativo </StyleGreenWithText>
              de forma respeitosa
              a partir de pontos de vista diferentes.
              Foco em soluções.
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills>
            <TitleCard>Pensamento Critico</TitleCard>
            <TextCard>
              Ajuda a transformar
              <StyleGreenWithText> problemas em oportunidades </StyleGreenWithText>
              incluindo múltiplos pontos de vista,
              para a tomada de decisão consciente e lógica.
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills>
            <TitleCard>Criatividade</TitleCard>
            <TextCard>
            Instigar a criar ideias, alternativas origin ais e
            <StyleGreenWithText> inovadoras </StyleGreenWithText>
            diante de problemas. Enxergando desafios como oportunidades
            de aprendizado
            </TextCard>
          </CardSoftSkills>
          <CardSoftSkills>
            <TitleCard>Liderança</TitleCard>
            <TextCard>
              Compreende os erros como processo inerente ao aprendizado. Busca
              <StyleGreenWithText> proatividade </StyleGreenWithText>
               e condições necessarias para alcançar
              os objetivos
            </TextCard>
          </CardSoftSkills>
        </ContainerCards>
      </SoftSkillsTex>
    </div>
  )
}

export default SoftSkills;
