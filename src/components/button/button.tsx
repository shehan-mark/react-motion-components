import React, { useRef } from 'react';

import { Button as StyledButton } from './styled';
import { ButtonType, IButtonProps } from './types';

function Button({
  onClick,
  text,
  isLoading = false,
  disabled = false,
  buttonType = ButtonType.DEFAULT,
  className = '',
}: IButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = buttonRef.current;
    if (!element) return;
    const circle = document.createElement('div');
    const x = e.clientX;
    const y = e.clientY;
    circle.classList.add('ripple');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    element.appendChild(circle);
    onClick(e);
  };

  return (
    <StyledButton
      buttonType={buttonType}
      type="button"
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${className}`}
      ref={buttonRef}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
