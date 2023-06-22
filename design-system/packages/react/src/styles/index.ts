import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@d-kja/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
