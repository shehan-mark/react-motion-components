/* eslint-disable */
import React from 'react';

import { Input as StyledInput, InputWrapper } from './styled';

// const Input = () => <StyledInput />;

const Input = () => {
  const inputChangeHandle = (e: any) => {
    console.log('input changed', e);
  };

  return (
    <InputWrapper>
      <div className="left">
        <div className="top" />
        <div className="bottom" />
      </div>
      <div className="top">
        <div className="left" />
        <div className="right" />
      </div>
      <input className="input" onChange={inputChangeHandle} />
      <div className="bottom">
        <div className="left" />
        <div className="right" />
      </div>
      <div className="right">
        <div className="top" />
        <div className="bottom" />
      </div>
    </InputWrapper>
  );
};

export default Input;
