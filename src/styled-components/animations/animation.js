import styled, { keyframes } from 'styled-components';

const PullToSide = keyframes`
  from { 
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(75px);
    opacity: 0.0;
  }
`;

export {
  PullToSide,
}