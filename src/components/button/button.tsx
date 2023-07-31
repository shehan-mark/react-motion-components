import React, { useRef } from 'react';

import { FrontButton, TopLeftButton } from './styled';
import { ButtonType, IButtonProps } from './types';

function Button({
  onClick,
  text,
  isLoading = false,
  disabled = false,
  buttonType = ButtonType.DEFAULT,
  className = '',
  buttonStyle = 'front',
}: IButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // const timeoutRef = useRef<any>(null);

  // const handleClick = (e: any) => {
  //   const element = buttonRef.current;
  //   if (!element) return;
  //   // console.log('--event', e.nativeEvent, e.clientX, e.clientY);
  //   const circle = document.createElement('div');
  //   const x = e.nativeEvent.clientX;
  //   const y = e.nativeEvent.clientY;
  //   circle.classList.add('ripple');
  //   circle.style.left = `${x}px`;
  //   circle.style.top = `${y}px`;
  //   element.appendChild(circle);

  //   clearTimeout(timeoutRef.current);
  //   timeoutRef.current = setTimeout(() => {
  //     element.removeChild(circle);
  //   }, 800);
  //   onClick(e);
  // };
  if (buttonStyle === 'front') {
    return (
      <FrontButton
        buttonType={buttonType}
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`${className}`}
        ref={buttonRef}
        buttonStyle={buttonStyle}
      >
        <p>{text}</p>
      </FrontButton>
    );
  }

  if (buttonStyle === 'top-left') {
    return (
      <TopLeftButton
        buttonType={buttonType}
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`${className}`}
        ref={buttonRef}
        buttonStyle={buttonStyle}
      >
        <p>{text}</p>
      </TopLeftButton>
    );
  }

  return null;

  // return (
  //   <StyledButton
  //     buttonType={buttonType}
  //     type="button"
  //     onClick={onClick}
  //     disabled={disabled || isLoading}
  //     className={`${className}`}
  //     ref={buttonRef}
  //     buttonStyle={buttonStyle}
  //   >
  //     <p>{text}</p>
  //   </StyledButton>
  // );
}

export default Button;
