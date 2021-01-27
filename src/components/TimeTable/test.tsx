import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TimeTable from '.'

const props = {
  weekDay: 'Domingo',
  hours: '8h - 17h'
}

describe('<TimeTable />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<TimeTable {...props} />)

    expect(
      screen.getByRole('heading', { name: /domingo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /8h - 17h/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
