import 'styled-components'
import { defaultTheme } from '../static/styles/default-theme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
