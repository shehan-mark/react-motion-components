import React, { useState, useRef, useEffect } from 'react';

import { InputWrapper } from './styled';
import { IInputProps } from './types';

const Input = ({
  inputStyle,
  inputType,
}: IInputProps) => {
  const [text, setText] = useState<string>('');
  const [shadowText, setShadowText] = useState<string>('');
  const [inputWidth, setInputWidth] = useState<number>();

  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      setInputWidth(width);
      setText(shadowText);
    }
  }, [shadowText]);

  const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShadowText(e.target.value);
  };

  return (
    <InputWrapper
      inputStyle={inputStyle}
      inputType={inputType}
    >
      <div className="input-skeleton">
        <input onChange={inputChangeHandle} ref={inputRef} value={text} style={{ width: `${inputWidth}px` }} tabIndex={0} />
        <div className="input-caret" />
        <span ref={spanRef} className="input-shadow-span">{shadowText}</span>
      </div>
    </InputWrapper>
  );
};

export default Input;
