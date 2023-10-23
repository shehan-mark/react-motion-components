export interface IColor {
  color: string;
  background: string;
  boxColor: string;
  shadowAround: string;
  shadowBottom: string;
  hoverColor: string;
  activeColor: string;
  outlineColor: string;
}

export const StyleColors: { [key: string]: IColor } = {
  DEFAULT: {
    background: '#e9e9ed',
    boxColor: '#a0a0a3',
    color: 'black',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
    outlineColor: '',
    shadowAround: '#262626',
    shadowBottom: '#ddd',
  },
  PRIMARY: {
    background: '#59ad6a',
    boxColor: '#276e36',
    color: 'black',
    activeColor: '#7dff97',
    hoverColor: '#e1e8e3a8',
    outlineColor: '#01971edb',
    shadowAround: '#262626',
    shadowBottom: '#ddd',
  },
  ALERT: {
    background: '#ffbb49',
    boxColor: '#b58638',
    color: 'black',
    activeColor: '#fab94b',
    hoverColor: '#ffeac7',
    outlineColor: '#e99304',
    shadowAround: '#262626',
    shadowBottom: '#ddd',
  },
  DANGER: {
    background: '#e2574c',
    boxColor: '#913730',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
    outlineColor: '',
    shadowAround: '#262626',
    shadowBottom: '#ddd',
  },
  INFO: {
    background: '#59bacc',
    boxColor: '#3e808c',
    color: 'white',
    activeColor: '#e9e9ed',
    hoverColor: '#e9e9ed',
    outlineColor: '',
    shadowAround: '#262626',
    shadowBottom: '#ddd',
  },
};
