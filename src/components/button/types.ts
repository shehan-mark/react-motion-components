export enum ButtonType {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  ALERT = 'ALERT',
  DANGER = 'DANGER',
  INFO = 'INFO',
}

export interface IButtonProps {
  buttonText: string;
  action: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  buttonType?: ButtonType;
}

export type StyledButtonProps = {
  buttonType: ButtonType;
};
