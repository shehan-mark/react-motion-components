/* eslint-disable */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { IStyledInputProps, InputType } from './types';
import { ESTYLE } from '../../constants/enums';
import { StyleColors } from '../../constants/colors';

const primaryColor = '#59ad6a';
const secondaryColor = '#276e36';

// object style keyframe definition
const blink = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: '100%',
  }
});

const pressed = keyframes({
  '0%': {
    left: '-5px',
  },
  '25%': {
    left: '-10px',
  },
  '75%': {
    left: '-2px',
  },
  '100%': {
    left: '-5px',
  }
});

const getDirectionValue = (inputStyle: InputType) => {
  if (inputStyle === 'top-left') return ({ top: '-5px', left: '-5px' });
  if (inputStyle === 'bottom-left') return ({ top: '5px', left: '-5px' });
  if (inputStyle === 'front') return ({ top: '5px', left: '0px' });
  if (inputStyle === 'top-right') return ({ top: '-5px', left: '5px' });
  if (inputStyle === 'bottom-right') return ({ top: '5px', left: '5px' });
}

const InputWrapper = styled.div(({ inputStyle = 'top-left', inputType = ESTYLE.DEFAULT }: IStyledInputProps) => ({
  width: '100%',
  height: '50px',
  borderRadius: '6px',
  background: 'rgba(39, 110, 54, 0.7)',
  position: 'relative',
  transition: 'all 0.3s ease-in',
  
  ".input-skeleton": {
    background: 'white',
    width: '100%',
    height: '50px',
    borderRadius: '6px',
    position: 'absolute',
    top: getDirectionValue(inputStyle)?.top,
    left: getDirectionValue(inputStyle)?.left,
    border: `3px solid rgba(89, 173, 106, 0.7)`,
    outline: 'none',
    padding: '5px 8px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s ease-in',

    ".input-shadow-span": {
      width: 'auto',
      fontSize: 'inherit',
      position: 'absolute',
      fontFamily: 'Arial, sans-serif',
      whiteSpace: 'pre-wrap',
      visibility: 'hidden',
    },

    "input": {
      width: '0',
      maxWidth: 'calc(100% - 16px)',
      fontSize: '16px',
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      caretColor: 'transparent',
      outline: 'none',
      border: 'none',
      background: 'transparent',
    },
    ".input-caret": {
      display: 'none',
      width: '12px',
      height: '16px',
      borderBottom: `3px solid ${StyleColors[inputType].background}`,
      animation: `${blink} 1s ease infinite`
    },
  },
  ':focus-within': {
    background: 'rgba(39, 110, 54, 1)',
    ".input-skeleton": {
      border: `3px solid rgba(89, 173, 106, 1)`,
      ".input-caret": {
        display: 'block',
      }
    }
  }
}));

export {
  InputWrapper,
};
