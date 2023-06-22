import { defaultTheme } from '../styles/themes/defaultTheme'

type defaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType {}
}
