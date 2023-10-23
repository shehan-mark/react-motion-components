/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';

import { InputWrapper } from './styled';
import { IInputProps } from './types';

const Input = ({
  inputStyle
}: IInputProps) => {
  const [text, setText] = useState<string>('');
  const [shadowText, setShadowText] = useState<string>('');
  const [inputWidth, setInputWidth] = useState<number>();
  
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      setInputWidth(width);
      setText(shadowText);
    }
  }, [shadowText]);

  const inputChangeHandle = (e: any) => {
    setShadowText(e.target.value);
  };

  const gettingFocused = () => {
    if (inputRef.current) {
      setFocused(true);
      inputRef.current.focus();
    }
  }

  const gettingBlurred = () => {
    setFocused(false);
  }

  return (
    <InputWrapper
      onFocus={gettingFocused}
      onClick={gettingFocused}
      onBlur={gettingBlurred}
      focused={focused}
      inputStyle={inputStyle}
    >
      <div className='input-skeleton'>
        <input onChange={inputChangeHandle} ref={inputRef} value={text} style={{ width: `${inputWidth}px` }}/>
        <div className='input-caret' />
        <span ref={spanRef} className='input-shadow-span'>{shadowText}</span>
      </div>
    </InputWrapper>
  );
};

export default Input;
