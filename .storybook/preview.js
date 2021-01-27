import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'trav-light',
    values: [
      {
        name: 'trav-light',
        value: theme.colors.background
      },
      {
        name: 'trav-dark',
        value: theme.colors.textColor
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    </>
  )
]
