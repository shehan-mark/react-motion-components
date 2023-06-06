import React from 'react';

// import { Button as StyledButton } from './styled';

export enum ButtonType {
  DEFAULT,
  PRIMARY,
  ALERT,
  DANGER,
  INFO,
}

export interface IButtonProps {
  buttonText: string;
  action: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

function Button({
  action,
  buttonText,
  // buttonType,
  isLoading = false,
  // customClass = '',
  disabled = false,
}: IButtonProps) {
  return (
    <button
      type="button"
      onClick={action}
      disabled={disabled || isLoading}
    >
      {buttonText}
    </button>
  );
}

export default Button;
