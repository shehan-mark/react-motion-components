export enum ButtonType {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  ALERT = 'ALERT',
  DANGER = 'DANGER',
  INFO = 'INFO',
}

export interface IButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  buttonType?: ButtonType;
  className?: string;
}

export type StyledButtonProps = {
  buttonType: ButtonType;
};
