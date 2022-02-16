import React, { useEffect, useState, useRef } from 'react';
import data from '../../data/projects.js';
import { ButtonGitHub, CardCarousel, CardsAnButtonsCarousel, ContainerCarousel, ContainerCompleteCarousel, ContainerInfoProjects, ImgProject, LeftButton, RightButton, TechsUsed, TextAboutProject, TitleProject } from '../../styled-components/projects/style.js';
import leftBTN from '../projectspage/images/leftBTN.png';
import rightBTN from '../projectspage/images/rightBTN.png';


function Carousel() {
  const [dataProjects, setDataProjects] = useState(data);
  const refCarousel = useRef(null);

  useEffect(() => {
    setDataProjects(data);
  }, [])

  function nextBtn() {
    refCarousel.current.scrollLeft += refCarousel.current.offsetWidth
  }

  function lastBtn() {
    refCarousel.current.scrollLeft -= refCarousel.current.offsetWidth
  }

  return (
    <CardsAnButtonsCarousel>
      <LeftButton onClick={() => lastBtn()}>
        <img src={leftBTN} alt="image indicating left"/>
      </LeftButton>
      <CardCarousel ref={refCarousel}>
        { dataProjects.map((data) => (
          <ContainerCompleteCarousel>
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
      <RightButton onClick={() => nextBtn()}>
        <img src={rightBTN} alt="image indicating right"/>
      </RightButton>
    </CardsAnButtonsCarousel>
  )

}

export default Carousel;
