import React, { useEffect, useState } from 'react';
import data from '../../data/projects.js';
import { ButtonGitHub, ContainerCarousel, ContainerCompleteCarousel, ContainerInfoProjects, ImgProject, LeftButton, RightButton, TechsUsed, TextAboutProject, TitleProject } from '../../styled-components/projects/style.js';
import leftBTN from '../projectspage/images/leftBTN.png';
import rightBTN from '../projectspage/images/rightBTN.png';


function Carousel() {
  const [dataProjects, setDataProjects] = useState(data);
  const [initialProjects, setInitialProjects] = useState(data[0]);
  const [disableNextBtn, setDisableNextBtn] = useState('true');
  const [disableLastBtn, setDisableLastBtn] = useState('none');
  const [opacityRightBtn, setOpacityRightBtn] = useState();
  const [opacityLeftBtn, setOpacityLeftBtn] = useState('0.5');

  function nextBtn() {
    const indexActual = dataProjects.indexOf(initialProjects);
    const manipulationIndex = indexActual + 1;
    const lengthDataProjects = dataProjects.length - 1;
  
    if (manipulationIndex === lengthDataProjects) {
      setDisableNextBtn("none");
      setOpacityRightBtn("0.5");
    } else {
      setDisableNextBtn("true");
      setOpacityLeftBtn("");
    }

    if (manipulationIndex > 0) {
      setDisableLastBtn('true');
    };
    
    setInitialProjects(data[manipulationIndex])
  }

  function lastBtn() {
    const indexActual = dataProjects.indexOf(initialProjects);
    const manipulationIndex = indexActual - 1;
    
    if (indexActual < 0) {
      setDisableLastBtn('true');
      setOpacityRightBtn(1);
    };

    if(indexActual > -1) {
      setOpacityRightBtn("1");
      setDisableNextBtn("true");
    }

    if (manipulationIndex === 0) {
      setDisableLastBtn('none');
      setOpacityLeftBtn("0.5");
    }

    setInitialProjects(data[manipulationIndex]);
  }

  return (
    <div>
      <ContainerCompleteCarousel>
        <LeftButton 
          src={leftBTN}
          alt="image indicating left"
          onClick={ () => lastBtn() }
          disable={disableLastBtn}
          opacity={opacityLeftBtn}
        />
        <ContainerCarousel>
          <ImgProject src={initialProjects.projectIMG} alt={initialProjects.alt}/>
          <ContainerInfoProjects>
            <div>
              <TitleProject>{initialProjects.title}</TitleProject>
              <TextAboutProject>
                {initialProjects.textAbout}
              </TextAboutProject>
            </div>
            <div>
              <TechsUsed>Techs usadas:</TechsUsed>
              <TextAboutProject>{initialProjects.techs}</TextAboutProject>
            </div>
            <ButtonGitHub
              target="_blank"
              href={initialProjects.linkGH}
            >
              Veja no GitHub
            </ButtonGitHub>
          </ContainerInfoProjects>
        </ContainerCarousel>
        <RightButton
          src={rightBTN}
          alt="image indicating right"
          onClick={ () => nextBtn() }
          disable={disableNextBtn}
          opacity={opacityRightBtn}
        />
      </ContainerCompleteCarousel>
    </div>
  )

}

export default Carousel;
