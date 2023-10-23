import styled from '@emotion/styled';

import { StyledButtonProps } from './types';
import { StyleColors as ButtonColors } from '../../constants/colors';
import { animationDuration } from '../../constants/common';

const BasicButton = styled.button(({ buttonType }: StyledButtonProps) => ({
  border: 'none',
  backgroundColor: 'transparent',
  position: 'relative',
  width: 'fit-content',
  // transformStyle: 'preserve-3d',
  // boxSizing: 'content-box',
  // fontSize: '20px',
  // eslint-disable-next-line max-len
  // transition: 'transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)',
  transition: `all ${animationDuration}s`,
  color: ButtonColors[buttonType].color,
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  p: {
    margin: 0,
  },
}));

const TopLeftButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.face': {
    backgroundColor: ButtonColors[buttonType].background,
    height: '100%',
    width: 'inherit',
    padding: '10px',
    transition: `all ${animationDuration}s`,
    zIndex: 100,
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
      transform: 'translate(10px, 10px)',
    },
    ':active:after': {
      width: '1px',
      right: '0px',
      top: '0px',
      height: '98%',
    },
    ':active:before': {
      height: '1px',
      bottom: '0px',
      left: '1px',
      width: '98%',
    },
  },
  '.background-shadow': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    zIndex: '-1',
    transition: `all ${animationDuration}s`,
    backgroundColor: ButtonColors[buttonType].boxColor,
  },
  ':active': {
    '.background-shadow': {
      // right: '0px',
      // bottom: '0px',
    },
  },
}));

const FrontButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.face': {
    backgroundColor: ButtonColors[buttonType].background,
    height: '100%',
    width: 'inherit',
    padding: '10px',
    transition: `all ${animationDuration}s`,
    zIndex: 100,
    ':before': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      height: '10px',
      width: '100%',
      bottom: '-10px',
      left: 0,
      position: 'absolute',
      // boxShadow: `0 10px 0 0 ${ButtonColors[buttonType].shadowBottom}`,
      transition: `all ${animationDuration}s`,
    },
    ':active': {
      transform: 'translate(0, 10px)',
    },
    ':active:before': {
      boxShadow: `0 0 ${ButtonColors[buttonType].shadowBottom}`,
      height: '1px',
      bottom: 0,
    },
  },
}));

const TopRightButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.face': {
    backgroundColor: ButtonColors[buttonType].background,
    height: '100%',
    width: 'inherit',
    padding: '10px',
    transition: `all ${animationDuration}s`,
    zIndex: 100,
    ':before': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      position: 'absolute',
      height: '10px',
      width: '100%',
      bottom: '-10px',
      left: '-5px',
      transform: 'skew(-45deg)',
      transition: `all ${animationDuration}s`,
    },
    ':after': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      position: 'absolute',
      height: '100%',
      width: '10px',
      left: '-10px',
      top: '5px',
      transform: 'skewY(-45deg)',
      transition: `all ${animationDuration}s`,
    },
    ':active': {
      transform: 'translate(-10px, 10px)',
    },
    ':active:before': {
      height: '1px',
      bottom: '0px',
      left: '0px',
    },
    ':active:after': {
      width: '1px',
      left: '0px',
      top: '0px',
    },
  },
  '.background-shadow': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: '-10px',
    left: '-10px',
    zIndex: '-1',
    transition: `all ${animationDuration}s`,
    backgroundColor: ButtonColors[buttonType].boxColor,
  },
  ':active': {
    '.background-shadow': {
      // left: '-5px',
      // bottom: '-5px',
    },
  },
}));

const BottomRightButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.face': {
    backgroundColor: ButtonColors[buttonType].background,
    height: '100%',
    width: 'inherit',
    padding: '10px',
    transition: `all ${animationDuration}s`,
    zIndex: 100,
    ':before': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      position: 'absolute',
      height: '10px',
      width: '100%',
      left: '-5px',
      top: '-10px',
      transform: 'skew(45deg)',
      transition: `all ${animationDuration}s`,
    },
    ':after': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      position: 'absolute',
      height: '100%',
      width: '10px',
      left: '-10px',
      top: '-5px',
      transform: 'skewY(45deg)',
      transition: `all ${animationDuration}s`,
    },
    ':active': {
      transform: 'translate(-10px, -10px)',
    },
    ':active:before': {
      height: '1px',
      top: '0px',
      left: '0px',
    },
    ':active:after': {
      width: '1px',
      left: '0px',
      top: '0px',
    },
  },
  '.background-shadow': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    zIndex: '-1',
    transition: `all ${animationDuration}s`,
    backgroundColor: ButtonColors[buttonType].boxColor,
  },
  ':active': {
    '.background-shadow': {
      // top: '-5px',
      // left: '-5px',
    },
  },
}));

const BottomLeftButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.face': {
    backgroundColor: ButtonColors[buttonType].background,
    height: '100%',
    width: 'inherit',
    padding: '10px',
    transition: `all ${animationDuration}s`,
    zIndex: 100,
    ':before': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      position: 'absolute',
      height: '10px',
      width: '100%',
      left: '5px',
      top: '-10px',
      transform: 'skew(-45deg)',
      transition: `all ${animationDuration}s`,
    },
    ':after': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      position: 'absolute',
      height: '100%',
      width: '10px',
      right: '-10px',
      top: '-5px',
      transform: 'skewY(-45deg)',
      transition: `all ${animationDuration}s`,
    },
    ':active': {
      transform: 'translate(10px, -10px)',
    },
    ':active:before': {
      height: '1px',
      top: '0px',
      left: '0px',
    },
    ':active:after': {
      width: '1px',
      right: '0px',
      top: '0px',
    },
  },
  '.background-shadow': {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    zIndex: '-1',
    transition: `all ${animationDuration}s`,
    backgroundColor: ButtonColors[buttonType].boxColor,
  },
  ':active': {
    '.background-shadow': {
      // top: '-5px',
      // right: '-5px',
    },
  },
}));

const FrontDownButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  '.face': {
    backgroundColor: ButtonColors[buttonType].background,
    height: '100%',
    width: 'inherit',
    padding: '10px',
    transition: `all ${animationDuration}s`,
    zIndex: 100,
    ':before': {
      content: '""',
      backgroundColor: ButtonColors[buttonType].boxColor,
      height: '10px',
      width: '100%',
      top: '-10px',
      left: 0,
      position: 'absolute',
      transition: `all ${animationDuration}s`,
    },
    ':active': {
      transform: 'translate(0, -10px)',
    },
    ':active:before': {
      // boxShadow: `0 0 ${ButtonColors[buttonType].shadowBottom}`,
      height: '1px',
      top: 0,
    },
  },
}));

export {
  TopLeftButton,
  FrontButton,
  TopRightButton,
  BottomRightButton,
  BottomLeftButton,
  FrontDownButton,
};
