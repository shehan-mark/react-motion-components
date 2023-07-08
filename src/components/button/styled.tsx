/* eslint-disable */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledButtonProps } from './types';

type ButtonStyle = {
  color: string;
  background: string;
  shadow: string;
  hoverColor: string;
  activeColor: string;
  outlineColor: string;
};

const ButtonColors: { [key: string]: ButtonStyle } = {
  DEFAULT: {
    background: '#e9e9ed',
    shadow: '#a0a0a3',
    color: 'black',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
    outlineColor: '',
  },
  PRIMARY: {
    background: '#59ad6a',
    shadow: '#276e36',
    color: 'white',
    activeColor: '#7dff97',
    hoverColor: '#e1e8e3a8',
    outlineColor: '#01971edb',
  },
  ALERT: {
    background: '#ffbb49',
    shadow: '#b58638',
    color: 'black',
    activeColor: '#fab94b',
    hoverColor: '#ffeac7',
    outlineColor: '#e99304',
  },
  DANGER: {
    background: '#e2574c',
    shadow: '#913730',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
    outlineColor: '',
  },
  INFO: {
    background: '#59bacc',
    shadow: '#3e808c',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
    outlineColor: '',
  },
};

// const rippleAnimation = keyframes({
//   '0%': {
//     transform: 'scale(0, 0)',
//     opacity: 0,
//   },
//   '70%': {
//     transform: 'scale(250, 250)',
//     opacity: 0.75,
//   },
//   '100%': {
//     transform: 'scale(500, 500)',
//     opacity: 0,
//   },
// });

// export const Button = styled.button(
//   ({ buttonType }: StyledButtonProps) => ({
//     position: 'relative',
//     overflow: 'hidden',
//     cursor: 'pointer',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '4px',
//     backgroundColor: ButtonColors[buttonType].background,
//     fontSize: '14px',
//     color: ButtonColors[buttonType].color,
//     transition: 'all 0.3s ease-in',
//     outline: `1px solid ${ButtonColors[buttonType].outlineColor}`,
//     ':hover': {
//       transform: 'scale(1.01)',
//       boxShadow: `0 6px 4px ${ButtonColors[buttonType].hoverColor}`,
//     },
//     '.ripple': {
//       backgroundImage: `radial-gradient(circle closest-side, ${ButtonColors[buttonType].hoverColor} 0, ${ButtonColors[buttonType].activeColor} 100%)`,
//       position: 'absolute',
//       borderRadius: '4px',
//       pointerEvents: 'none',
//       width: '1px',
//       height: '1px',
//       zIndex: 3,
//       animation: `${rippleAnimation} 0.5s ease-in`,
//     },
//   }),
// );

export const Button = styled.button(({ buttonType }: StyledButtonProps) => ({
  border: 'none',
  padding: '10px',
  backgroundColor: ButtonColors[buttonType].background,
  position: 'relative',
  transformStyle: 'preserve-3d',
  // transition: 'transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)',
  transition: 'all 0.15s',

  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].shadow,
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxShadow: '0 0 0 1px #57575780, 0 0.625em 0 0 #ddd',
    transform: 'translate3d(0, 0.75em, -1em)',
    transition: 'all 0.15s',
  },
  ':active': {
    transform: 'translate(0em, 0.75em)',
  },
  ':active:before' : {
    boxShadow: '0 0 0 1px #57575780, 0 0 #ddd',
    transform: 'translate3d(0, 0, -1em)'
  },
  
  p: {
    margin: 0,
  }
}));
