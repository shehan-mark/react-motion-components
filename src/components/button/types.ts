import { ESTYLE } from '../../constants/enums';

export type ButtonStyle = 'front' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'front-down';

export interface IButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  buttonType?: ESTYLE;
  buttonStyle?: ButtonStyle;
}

export type StyledButtonProps = {
  buttonType: ESTYLE;
  buttonStyle: ButtonStyle;
};
