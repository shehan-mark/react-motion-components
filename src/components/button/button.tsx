import React from 'react';

import { Button as StyledButton } from './styled';
import { ButtonType, IButtonProps } from './types';

function Button({
  action,
  buttonText,
  isLoading = false,
  // customClass = '',
  disabled = false,
  buttonType = ButtonType.DEFAULT,
}: IButtonProps) {
  // console.log('this is the button type ', buttonType);

  return (
    <StyledButton
      buttonType={buttonType}
      type="button"
      onClick={action}
      disabled={disabled || isLoading}
    >
      {buttonText}
    </StyledButton>
  );
}

export default Button;
