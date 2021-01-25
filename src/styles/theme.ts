export default {
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },

  border: {
    radius: '0.4rem'
  },

  font: {
    family:
      "Barlow, Heebo, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans- serif",
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },

  colors: {
    background: '#F5F8FA',
    blue: '#115D8C',
    orange: '#F25D27',
    titleColor: '#123952',
    textColor: '#617480',
    textComplementary: '#A0ACB3',
    primary: '#FFFFFF',
    secondary: '#DCE2E6',
    green: '#51B853',
    blueLight: '#DDE9F0'
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
