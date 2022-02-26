import styled, { keyframes } from 'styled-components';

const RemoveOpacity = keyframes`
  from { 
    opacity: 0;
    filter: blur(1.5px)
  }
  to {
    opacity: 1;
    filter: blur(0)
  }
`;

const TranslateYAndOpacity = keyframes`
  from {
    transform: translateY(-30%);
  }
  to {
    transform: translateY(0);
  }
`;

const Typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const BlindText = keyframes`
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const animeLeft = keyframes`
  0% {
    transform: translate3d(-25px, 0, 0);
    opacity: 0.1;
  }
`;

const animeRight = keyframes`
  0% {
    transform: translate3d(25px, 0, 0);
    opacity: 0.1;
  }
`;

const animeMid = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
`

const zoomScaleText = keyframes`
  0% {
    transform: scale(0.75);
  }
`;


export {
  RemoveOpacity,
  Typing,
  TranslateYAndOpacity,
  BlindText,
  animeLeft,
  animeRight,
  zoomScaleText,
  animeMid
}