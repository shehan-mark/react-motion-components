/* eslint-disable */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
})

const InputWrapper = styled.div(() => ({
  width: '90%',
  height: '50px',
  borderRadius: '6px',
  background: primaryColor,
  position: 'relative',
  transition: 'all 0.3s ease-in',
  
  ".input-skeleton": {
    background: 'white',
    width: '100%',
    height: '50px',
    borderRadius: '6px',
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    border: `3px solid ${primaryColor}`,
    outline: 'none',
    padding: '5px 8px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',

    ".input-shadow-span": {
      width: 'auto',
      fontSize: '16px',
      position: 'absolute',
      // right: '100px',
      fontFamily: 'Arial, sans-serif',
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
      background: 'transparent'
    },
    ".input-caret": {
      width: '12px',
      height: '16px',
      borderBottom: `3px solid ${primaryColor}`,
      animation: `${blink} 1.2s ease infinite`
    
    }
    

  }
}));

export {
  InputWrapper,
};
