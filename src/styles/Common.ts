import { theme } from "styles/Theme";

type FontPropsType = {
  weight?: number
  color?: string
  height?: number
  Fmin?: number
  Fmax?: number
  letterSpacing?: string
}

export const font = ({ weight, color, height, Fmin, Fmax, letterSpacing }: FontPropsType) => `
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: ${ weight || '400' };
  color: ${ color || theme.colors.primaryFont };
  line-height: ${ height || '1.2' };
  font-size: calc( (100vw - 360px)/(1440 - 360) * (${ Fmax } - ${ Fmin }) + ${ Fmin }px);
  letter-spacing: ${ letterSpacing || 'normal' };
`
