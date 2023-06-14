import styled from '@emotion/styled';

import { StyledButtonProps } from './types';

type ButtonStyle = {
  color: string;
  background: string;
  hoverColor: string;
  activeColor: string;
};

const ButtonColors: { [key: string]: ButtonStyle } = {
  DEFAULT: {
    background: '#e9e9ed',
    color: 'black',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
  },
  PRIMARY: {
    background: '#59ad6a',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
  },
  ALERT: {
    background: '#ffbb49',
    color: 'black',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
  },
  DANGER: {
    background: '#e2574c',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
  },
  INFO: {
    background: '#59bacc',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
  },
};

const rippleAnimation = `
@keyframes rippleAnim
  0%
    transform: scale(0, 0)
    opacity: 0
  75%
    transform: scale(450, 450)
    opacity: 0.75
  100%
    transform: scale(700, 700)
    opacity: 0
`;

export const Button = styled.button(
  ({ buttonType }: StyledButtonProps) => ({
    position: 'relative',
    cursor: 'pointer',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: ButtonColors[buttonType].background,
    fontSize: '14px',
    color: ButtonColors[buttonType].color,
    transition: 'all 0.3s ease-in',
    ':hover': {
      // backgroundColor: '#e3e3e3',
      transform: 'scale(1.01)',
      boxShadow: '0 6px 4px #e3e3e3',
    },
    '.ripple': {
      // background: `image:
      // radial-gradient(circle closest-side, white, lighten(palevioletred, 15%))`,
      background: 'purple',
      position: 'absolute',
      borderRadius: '4px',
      pointerEvents: 'none',
      width: '1px',
      height: '1px',
      zIndex: 3,
      animation: `name: ${rippleAnimation} duration: 0.5s timing-function: ease-in`,
    },
  }),
);
