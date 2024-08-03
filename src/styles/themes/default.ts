export const defaultTheme = {
  blue: {
    50: '#F6F9FB',
    400: '#506BF1',
    700: '#1D314B',
    800: '#142133',
  },

  green: {
    400: '#0EAF94',
  },

  red: {
    400: '#F1506B',
  },

  black: {
    alpha: {
      10: 'rgb(0 0 0 / 0.10)',
      15: 'rgb(0 0 0 / 0.15)',
      20: 'rgb(0 0 0 / 0.20)',
      25: 'rgb(0 0 0 / 0.25)',
      50: 'rgb(0 0 0 / 0.50)',
      75: 'rgb(0 0 0 / 0.75)',
    },
  },

  white: {
    alpha: {
      20: 'rgb(255 255 255 / 0.20)',
    },
  },

  font: {
    primary: '"Montserrat", montserrat-fallback',
    semibold: 600,
    bold: 700,
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.625rem',
    '3xl': '2.25rem',
  },

  line: {
    sm: '1',
    md: '1.25',
    lg: '1.625',
  },

  space: {
    1: '0.3125rem',
    2: '0.625rem',
    3: '0.9375rem',
    4: '1.25rem',
    5: '1.5625rem',
    6: '1.875rem',
    7: '2.1875rem',
    8: '2.5rem',
    9: '2.8125rem',
    10: '3.125rem',
    20: '6.25rem',
    30: '9.375rem',
    40: '12.5rem',
    50: '15.625rem',
    60: '18.75rem',
  },

  shadow: {
    outer: {
      md: '0 4px 4px 0 rgb(0 0 0 / 0.25)',
    },
    inner: {
      md: 'inset 0 4px 4px 0 rgb(0 0 0 / 0.25)',
    },
  },

  blur: {
    md: 'blur(5px)',
  },

  outline: {
    blue: {
      400: '3px solid #506BF1',
      alpha: {
        30: '3px solid rgb(80 107 241 / 0.3)',
      },
    },
    green: {
      alpha: {
        30: '3px solid rgb(14 175 148 / 0.3)',
      },
    },
    red: {
      alpha: {
        30: '3px solid rgb(241 80 107 / 0.3)',
      },
    },
  },

  duration: {
    normal: '400ms',
  },

  radii: {
    md: '0.5rem',
    full: '100%',
  },

  screen: {
    md: '47.5rem',
    lg: '85rem',
  },

  /* 'title-lg': `700 2.25rem ${fontFamily}`,
  title: `700 1.625rem ${fontFamily}`,
  'title-sm': `700 1.25rem ${fontFamily}`,
  'title-xs': `700 1.125rem ${fontFamily}`, */

  /* text: `600 1rem/1.625rem ${fontFamily}`,
  'text-sm': `600 0.875rem/1.25rem ${fontFamily}`,
  'text-xs': `600 0.75rem/1rem ${fontFamily}`, */

  /* 'input-xl': `600 2.25rem ${fontFamily}`,
  'input-lg': `600 1.625rem ${fontFamily}`,
  input: `600 1rem ${fontFamily}`,
  'input-sm': `600 0.875rem ${fontFamily}`,
  'input-xs': `600 0.75rem ${fontFamily}`, */
} as const
