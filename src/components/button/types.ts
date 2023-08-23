export enum ButtonType {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  ALERT = 'ALERT',
  DANGER = 'DANGER',
  INFO = 'INFO',
}

export type ButtonStyle = 'front' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'front-down';

export interface IButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  buttonType?: ButtonType;
  buttonStyle?: ButtonStyle;
}

export type StyledButtonProps = {
  buttonType: ButtonType;
  buttonStyle: ButtonStyle;
};

export type ButtonStyleType = {
  color: string;
  background: string;
  boxColor: string;
  shadowAround: string;
  shadowBottom: string;
  hoverColor: string;
  activeColor: string;
  outlineColor: string;
};
