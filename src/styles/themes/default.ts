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
      30: 'rgb(0 0 0 / 0.30)',
      50: 'rgb(0 0 0 / 0.50)',
      75: 'rgb(0 0 0 / 0.75)',
    },
  },

  white: {
    alpha: {
      5: 'rgb(255 255 255 / 0.05)',
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
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '2rem',
    '5xl': '2.25rem',
    '6xl': '2.5rem',
    '7xl': '2.75rem',
    '8xl': '3rem',
    '9xl': '3.25rem',
  },

  line: {
    md: '1',
    lg: '1.25',
    xl: '1.625',
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
    15: '4.6875rem',
    20: '6.25rem',
    25: '7.8125rem',
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
    sm: 'blur(3px)',
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
    md: '48rem',
    lg: '87.5rem',
  },
} as const
