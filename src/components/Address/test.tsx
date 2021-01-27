import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Address from '.'

const props = {
  address: 'Av. da Boavista, 850 Nevolgide, Porto - PT, 8801-290',
  coords: [41.1621376, -8.6569731]
}

describe('<Address />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Address {...props} />)

    expect(
      screen.getByRole('heading', { name: /Endereço/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
