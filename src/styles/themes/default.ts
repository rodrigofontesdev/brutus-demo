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

  input: `600 1rem ${fontFamily}`,
  'input-sm': `600 0.875rem ${fontFamily}`,
  'input-lg': `600 1.625rem ${fontFamily}`,
  'input-xl': `600 2.25rem ${fontFamily}`,

  shadow: '0 4px 4px 0 rgb(0 0 0 / 25%)',
  'shadow-inner': 'inset 0 4px 4px 0 rgb(0 0 0 / 25%)',

  'backdrop-blur': 'blur(5px)',

  outline: '3px solid rgb(80 107 241 / 30%)',
  'outline-success': '3px solid rgb(14 175 148 / 30%)',
  'outline-error': '3px solid rgb(241 80 107 / 30%)',
} as const
