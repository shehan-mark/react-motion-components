import styled from '@emotion/styled';

import { StyledButtonProps } from './types';

const ButtonColors: { [key: string]: string } = {
  DEFAULT: '#e9e9ed',
  PRIMARY: '#59ad6a',
  ALERT: '#ffbb49',
  DANGER: '#e2574c',
  INFO: '#59bacc',
};

export const Button = styled.button(
  ({ buttonType }: StyledButtonProps) => ({
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: ButtonColors[buttonType],
  }),
);
