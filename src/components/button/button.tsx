import React from 'react';

import './button.scss';

export enum ButtonType {
  DEFAULT,
  PRIMARY,
  ALERT,
  DANGER,
  INFO
}

export interface IButtonProps {
  buttonType: ButtonType;
  buttonText: string;
  action: () => void;
  isLoading?: boolean;
  customClass?: string;
  disabled?: boolean;
}

const Button = ({
  action,
  buttonText,
  buttonType,
  isLoading = false,
  customClass = '',
  disabled = false,
}: IButtonProps) => {

  const getCorrectButtonClass = () => {
    let buttonClass = 'hello-button focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex transition-all';
    buttonClass += customClass;
    switch (buttonType) {
      case ButtonType.ALERT:
        buttonClass += 'bg-yellow-400 hover:bg-yellow-500 btn-alert';
        break;
      case ButtonType.PRIMARY:
        buttonClass += 'bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700';
        break;
      case ButtonType.DANGER:
        buttonClass += 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700';
        break;
      case ButtonType.INFO:
        buttonClass += 'bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 ';
        break;
      default:
        buttonClass += 'btn-default';
        break;
    }

    if (disabled) {
      buttonClass += ' opacity-20';
    }

    return buttonClass;
  }

  const renderLoading = () => {
    if (isLoading) {
      return (
        <svg className="w-5 h-5 mr-3 -ml-1 text-white-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
      )
    }
    return null;
  }

  return (
    <button
      type="button"
      className={"hello-button"}
      onClick={action}
      disabled={disabled || isLoading}
    >
      {renderLoading()}{buttonText}
    </button>
  );
}

export default Button;
