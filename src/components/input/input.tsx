/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';

import { InputWrapper } from './styled';

const Input = () => {
  const [text, setText] = useState<string>('');
  const [inputWidth, setInputWidth] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      setInputWidth(width);
    }
  }, [text]);

  const inputChangeHandle = (e: any) => {
    console.log('input changed', e.target.value);
    setText(e.target.value);
  };

  const gettingFocused = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <InputWrapper onFocus={gettingFocused} onClick={gettingFocused}>
      <div className='input-skeleton'>
        <input onChange={inputChangeHandle} ref={inputRef} value={text} style={{ width: `${inputWidth}px` }}/>
        <div className='input-caret' />
        <span ref={spanRef} className='input-shadow-span'>{text}</span>
      </div>
    </InputWrapper>
  );
};

export default Input;
