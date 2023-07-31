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
  p: {
    margin: 0,
  },
}));

const TopLeftButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '10%',
    width: '100%',
    left: '1.5%',
    bottom: '-10%',
    boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround}, 2px 0px 0 0 ${ButtonColors[buttonType].boxColor}`,
    transform: 'skew(45deg)',
    transition: `all ${animationDuration}s`,
  },
  ':after': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '100%',
    width: '4%',
    right: '-4%',
    top: '5.5%',
    transform: 'skewY(45deg)',
    boxShadow: `1px 0 0 0 ${ButtonColors[buttonType].shadowAround}`,
    transition: `all ${animationDuration}s`,
  },
  ':active': {
    transform: 'translate(5%, 5%)',
  },
  ':active:before': {
    height: '1px',
    bottom: '0px',
    left: '0px',
    boxShadow: `0 1px 0 0px ${ButtonColors[buttonType].shadowAround}, 0 0 0 0 ${ButtonColors[buttonType].boxColor}`,
  },
  ':active:after': {
    width: '1px',
    right: '0px',
    top: '0px',
  },
}));

const FrontButton = styled(BasicButton)(({ buttonType }: StyledButtonProps) => ({
  ':before': {
    content: '""',
    backgroundColor: ButtonColors[buttonType].boxColor,
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxShadow: `0 0 0 1px ${ButtonColors[buttonType].shadowAround}, 0 0.625em 0 0 ${ButtonColors[buttonType].shadowBottom}`,
    transform: 'translate3d(0, 0.75em, -1em)',
    transition: `all ${animationDuration}s`,
  },
  ':active': {
    transform: 'translate(0em, 0.75em)',
  },
  ':active:before': {
    boxShadow: `0 0 0 1px ${ButtonColors[buttonType].shadowAround}, 0 0 ${ButtonColors[buttonType].shadowBottom}`,
    transform: 'translate3d(0, 0, -1em)',
  },
}));

export {
  TopLeftButton,
  FrontButton,
};
