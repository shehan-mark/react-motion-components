/* eslint-disable */
import styled from '@emotion/styled';

const primaryColor = '#59ad6a';
const secondaryColor = '#276e36';

const Input = styled.input((props: any) => ({
  width: '100%',
  height: '30px',
  borderRadius: '4px',
  outline: 'none',
  padding: '20px 10px',
  boxSizing: 'border-box',
  backgroundColor: primaryColor,
  color: 'white',
  border: `20px ${secondaryColor}`,
  borderStyle: 'inset',
  fontSize: '14px',
  // border: 'none',
}));

const InputWrapper = styled.div(() => ({
  width: '100%',
  height: '40px',
  backgroundColor: primaryColor,
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
  '.input': {
    background: 'transparent',
    width: '100%',
    height: 'calc(100%-10px)',
    padding: '10px',
    color: 'white',
    fontSize: '14px',
    letterSpacing: '1.5px',
    fontWeight: 'bold',
  },
  '.top': {
    position: 'absolute',
    top: 0,
    width: '100%',
    '.right': {
      position: 'absolute',
      right: '5px',
      height: '10px',
      width: '50%',
      background: 'linear-gradient(180deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 20%, rgba(39,110,54,1) 100%)',
      transform: 'skewX(-45deg)',
    },
    '.left': {
      position: 'absolute',
      height: '10px',
      width: '50%',
      background: 'linear-gradient(180deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 20%, rgba(39,110,54,1) 100%)',
      transform: 'skewX(45deg)',
      left: '5px',
    },
  },
  '.bottom': {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    '.right': {
      position: 'absolute',
      right: '5px',
      height: '10px',
      width: '50%',
      background: 'linear-gradient(0deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 40%, rgba(39,110,54,1) 100%)',
      transform: 'skewX(45deg)',
    },
    '.left': {
      position: 'absolute',
      height: '10px',
      width: '50%',
      background: 'linear-gradient(0deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 40%, rgba(39,110,54,1) 100%)',
      transform: 'skewX(-45deg)',
      left: '5px',
    },
  },
  '.right': {
    position: 'absolute',
    right: '0',
    width: '10px',
    height: '100%',
    '.top': {
      position: 'absolute',
      top: '5px',
      width: '10px',
      height: '50%',
      background: 'linear-gradient(-90deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 40%, rgba(39,110,54,1) 100%)',
      transform: 'skewY(-45deg)',
    },
    '.bottom': {
      position: 'absolute',
      width: '10px',
      height: '50%',
      background: 'linear-gradient(-90deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 40%, rgba(39,110,54,1) 100%)',
      transform: 'skewY(45deg)',
      bottom: '5px',
    },
  },
  '.left': {
    position: 'absolute',
    left: '0',
    width: '10px',
    height: '100%',
    '.top': {
      position: 'absolute',
      top: '5px',
      width: '10px',
      height: '50%',
      background: 'linear-gradient(90deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 40%, rgba(39,110,54,1) 100%)',
      transform: 'skewY(45deg)',
    },
    '.bottom': {
      position: 'absolute',
      width: '10px',
      height: '50%',
      background: 'linear-gradient(90deg, rgba(3,3,3,1) 0%, rgba(12,66,24,1) 40%, rgba(39,110,54,1) 100%)',
      transform: 'skewY(-45deg)',
      bottom: '5px',
    },
  },
}));

export {
  Input,
  InputWrapper,
};
