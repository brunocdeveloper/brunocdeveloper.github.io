import React, { useEffect, useState, useRef } from 'react';
import data from '../../data/projects.js';
import { ButtonGitHub, CardCarousel, CardsAnButtonsCarousel, ContainerCarousel, ContainerCompleteCarousel, ContainerInfoProjects, ImgProject, IndexBtn, IndexProject, LeftButton, RightButton, TechsUsed, TextAboutProject, TitleProject } from '../../styled-components/projects/style.js';
import leftBTN from '../projectspage/images/leftBTN.png';
import rightBTN from '../projectspage/images/rightBTN.png';


function Carousel() {
  const [dataProjects, setDataProjects] = useState(data);
  const [opacityLastBtn, setOpacityLastBtn] = useState('0.5');
  const [opacityNextBtn, setOpacityNextBtn] = useState();
  const [eventRightBtn, setEventRightBtn] = useState();
  const [eventLeftBtn, setEventLeftBtn] = useState('none');
  const [initialIndex, setInitialIndex] = useState(0);
  const refCarousel = useRef(null);

  useEffect(() => {
    setDataProjects(data);
  }, []);

  function doteIndex(index) {
    const positionCarousel = index * 1272;
    const dataLength = dataProjects.length -1;

    if (positionCarousel > 0) {
      setEventLeftBtn('true');
      setOpacityLastBtn('1');
    } else {
      setEventLeftBtn('none');
      setOpacityLastBtn('0.5');
    }
    
    if (positionCarousel === (dataLength * 1272)) {
      setOpacityNextBtn('0.5');
      setEventRightBtn('none');
    } else {
      setOpacityNextBtn('1');
      setEventRightBtn('true');
    }
    
    refCarousel.current.scrollLeft = positionCarousel;
  };

  function nextBtn() {
    const dataLength = dataProjects.length - 1;
    const maxLength = (dataLength * 1272) - 1272;
    const one = 1;
    if(maxLength <= refCarousel.current.scrollLeft) {
      setOpacityNextBtn('0.5');
      setEventRightBtn('none');
    }

    if(one > 0){
      setEventLeftBtn('true');
      setOpacityLastBtn('1');
    }

    refCarousel.current.scrollLeft += 1272;
  };

  function lastBtn() {
    const dataLength = dataProjects.length - 1;
    const maxLength = (dataLength * 1272) - 1272;
    
    if(maxLength < refCarousel.current.scrollLeft) {
      setOpacityNextBtn('1');
      setEventRightBtn('true');
    }

    if (refCarousel.current.scrollLeft <= 1272) {
      setEventLeftBtn('none');
      setOpacityLastBtn('0.5');
    }

    refCarousel.current.scrollLeft -= 1272;
  };

  return (
    <div>
      <CardsAnButtonsCarousel>
        <LeftButton
          onClick={() => {
            lastBtn();
          }}
          opacity={opacityLastBtn}
          events={eventLeftBtn}
        >
          <img src={leftBTN} alt="indicating left"/>
        </LeftButton>
        <CardCarousel ref={refCarousel}>
          { dataProjects.map((data, index) => (
            <ContainerCompleteCarousel key={index}>
              <ContainerCarousel>
                <ImgProject src={data.projectIMG} alt={data.alt}/>
                <ContainerInfoProjects>
                  <div>
                    <TitleProject>{data.title}</TitleProject>
                    <TextAboutProject>
                      {data.textAbout}
                    </TextAboutProject>
                  </div>
                  <div>
                    <TechsUsed>Techs usadas:</TechsUsed>
                    <TextAboutProject>{data.techs}</TextAboutProject>
                  </div>
                  <ButtonGitHub
                    target="_blank"
                    href={data.linkGH}
                  >
                    Veja no GitHub
                  </ButtonGitHub>
                </ContainerInfoProjects>
              </ContainerCarousel>
            </ContainerCompleteCarousel>
          ))}
        </CardCarousel>
        <RightButton
          onClick={() => { 
            nextBtn();
          }}
          opacity={opacityNextBtn}
          events={eventRightBtn}
        >
          <img src={rightBTN} alt="indicating right"/>
        </RightButton>
      </CardsAnButtonsCarousel>
    </div>
  )
}

export default Carousel;