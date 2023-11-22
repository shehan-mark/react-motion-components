import { ESTYLE } from '../../constants/enums';

export type InputType = 'front' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface IInputProps {
  disabled?: boolean;
  inputStyle?: InputType;
  inputType?: ESTYLE;
}

export type IStyledInputProps = IInputProps;
