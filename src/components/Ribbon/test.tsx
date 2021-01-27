import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    const { container } = renderWithTheme(
      <Ribbon rating={4.5}>
        <div>My city</div>
      </Ribbon>
    )

    expect(screen.getByText(/4.5/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
