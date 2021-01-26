import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Navbar>
        <div>my content</div>
      </Navbar>
    )

    expect(screen.getByLabelText(/traveler/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
