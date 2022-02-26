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

export {
  RemoveOpacity,
  Typing,
  TranslateYAndOpacity
}