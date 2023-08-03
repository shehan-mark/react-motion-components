import styled from '@emotion/styled';

import { StyledButtonProps } from './types';
import { ButtonColors } from './colors';
import { animationDuration } from '../../constants/common';

const BasicButton = styled.button(({ buttonType }: StyledButtonProps) => ({
  border: 'none',
  backgroundColor: ButtonColors[buttonType].background,
  position: 'relative',
  transformStyle: 'preserve-3d',
  padding: '10px',
  // fontSize: '20px',
  // eslint-disable-next-line max-len
  // transition: 'transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)',
  transition: `all ${animationDuration}s`,
  color: ButtonColors[buttonType].color,
  cursor: 'pointer',
  zIndex: 100,
  p: {
    margin: 0,
  },
}));

const TopLeftButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.shadow': {
    height: '100%',
    width: '100%',
    background: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    zIndex: '-1',
    transition: `all ${animationDuration}s`,
  },
  ':before': {
    content: '""',
    zIndex: 100,
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '10px',
    width: '100%',
    left: '5px',
    bottom: '-10px',
    transform: 'skewX(45deg)',
    transition: `all ${animationDuration}s`,
  },
  ':after': {
    content: '""',
    zIndex: 100,
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '100%',
    width: '10px',
    right: '-10px',
    top: '5px',
    transform: 'skewY(45deg)',
    transition: `all ${animationDuration}s`,
  },
  ':active': {
    transform: 'translate(5px, 5px)',
    '.shadow': {
      // backgroundColor: 'blue',
      transform: 'translate(-10px, -10px)',
    },
  },
  ':active:before': {
    height: '1px',
    bottom: '0px',
    left: '1px',
    width: '98%',
  },
  ':active:after': {
    width: '1px',
    right: '0px',
    top: '0px',
    height: '98%',
  },
}));

const FrontButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    height: '20%',
    width: '100%',
    bottom: '-20%',
    left: 0,
    position: 'absolute',
    // boxShadow: `0 10px 0 0 ${ButtonColors[buttonType].shadowBottom}`,
    transition: `all ${animationDuration}s`,
  },
  ':active': {
    transform: 'translate(0em, 20%)',
  },
  ':active:before': {
    boxShadow: `0 0 ${ButtonColors[buttonType].shadowBottom}`,
    height: '1px',
    bottom: 0,
  },
}));

const TopRightButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '10%',
    width: '100%',
    left: '-1.5%',
    bottom: '-10%',
    boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround}`,
    transform: 'skew(-45deg)',
    transition: `all ${animationDuration}s`,
  },
  ':after': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '100%',
    width: '4%',
    left: '-4%',
    top: '6.2%',
    transform: 'skewY(-45deg)',
    boxShadow: `0 1px 0 0 ${ButtonColors[buttonType].shadowAround}`,
    transition: `all ${animationDuration}s`,
  },
  ':active': {
    transform: 'translate(-5%, 5%)',
  },
  ':active:before': {
    height: '1px',
    bottom: '0px',
    left: '0px',
    boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround}, 0 0 0 0 ${ButtonColors[buttonType].boxColor}`,
  },
  ':active:after': {
    width: '2px',
    left: '0px',
    // top: '0px',
    boxShadow: 'none',
  },
}));

const BottomRightButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '10%',
    width: '100%',
    left: '-2%',
    top: '-10%',
    // boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround}`,
    transform: 'skew(45deg)',
    transition: `all ${animationDuration}s`,
  },
  ':after': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '100%',
    width: '4%',
    left: '-4%',
    top: '-5%',
    transform: 'skewY(45deg)',
    transition: `all ${animationDuration}s`,
    // boxShadow: `0 1px 0 0 ${ButtonColors[buttonType].shadowAround}`,
  },
  ':active': {
    transform: 'translate(-5%, -5%)',
  },
  ':active:before': {
    height: '1px',
    top: '0px',
    left: '0px',
    // boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround},
    // 0 0 0 0 ${ButtonColors[buttonType].boxColor}`,
  },
  ':active:after': {
    width: '1px',
    left: '0px',
    top: '0px',
    // boxShadow: 'none',
  },
}));

const BottomLeftButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '10%',
    width: '100%',
    left: '2%',
    top: '-10%',
    // boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround}`,
    transform: 'skew(-45deg)',
    transition: `all ${animationDuration}s`,
  },
  ':after': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '100%',
    width: '4%',
    right: '-4%',
    top: '-5%',
    transform: 'skewY(-45deg)',
    transition: `all ${animationDuration}s`,
    // boxShadow: `0 1px 0 0 ${ButtonColors[buttonType].shadowAround}`,
  },
  ':active': {
    transform: 'translate(5%, -5%)',
  },
  ':active:before': {
    height: '1px',
    top: '0px',
    left: '0px',
    // boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround},
    // 0 0 0 0 ${ButtonColors[buttonType].boxColor}`,
  },
  ':active:after': {
    width: '1px',
    right: '0px',
    top: '0px',
    // boxShadow: 'none',
  },
}));

export {
  TopLeftButton,
  FrontButton,
  TopRightButton,
  BottomRightButton,
  BottomLeftButton,
};
