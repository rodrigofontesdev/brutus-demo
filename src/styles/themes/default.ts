const fontFamily = '"Montserrat", sans-serif'

export const defaultTheme = {
  'blue-700': '#1D314B',
  'blue-400': '#506BF1',
  'blue-50': '#F6F9FB',

  'red-400': '#F1506B',

  'green-400': '#0EAF94',

  'title-lg': `700 2.25rem ${fontFamily}`,
  'title-sm': `700 1.25rem ${fontFamily}`,

  text: `600 1rem/1.625rem ${fontFamily}`,
  'text-sm': `600 0.875rem/1.25rem ${fontFamily}`,
  'text-xs': `600 0.75rem/1rem ${fontFamily}`,

  input: `700 1rem ${fontFamily}`,
  'input-sm': `700 0.875rem ${fontFamily}`,
  'input-lg': `700 1.625rem ${fontFamily}`,
  'input-xl': `700 2.25rem ${fontFamily}`,

  shadow: '0 4px 4px 0 rgb(0 0 0 / 25%)',
  'shadow-inner': 'inset 0 4px 4px 0 rgb(0 0 0 / 25%)',

  'backdrop-blur': 'blur(5px);',
} as const
