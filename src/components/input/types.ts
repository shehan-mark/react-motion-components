export type InputType = 'front' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface IInputProps {
  disabled?: boolean;
  inputStyle?: InputType;
  focused: boolean;
}

export type IStyledInputProps = IInputProps;
