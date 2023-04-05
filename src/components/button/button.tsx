import React from 'react';

import { Button as StyledButton } from './styled';

export enum ButtonType {
  DEFAULT,
  PRIMARY,
  ALERT,
  DANGER,
  INFO
}

export interface IButtonProps {
  // buttonType: ButtonType;
  buttonText: string;
  action: () => void;
  isLoading?: boolean;
  // customClass?: string;
  disabled?: boolean;
}

const Button = ({
  action,
  buttonText,
  // buttonType,
  isLoading = false,
  // customClass = '',
  disabled = false,
}: IButtonProps) => {

  return (
    <StyledButton
      type="button"
      onClick={action}
      disabled={disabled || isLoading}
    >
      {buttonText}
    </StyledButton>
  );
}

export default Button;
