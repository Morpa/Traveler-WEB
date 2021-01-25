import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/traveler/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a small logo', () => {
    renderWithTheme(<Logo size="small" />)
    expect(screen.getByLabelText(/traveler/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })
})
