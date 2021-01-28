import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

import mockCities from './mock'

jest.mock('components/CityCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CityCard"></div>
    }
  }
})

jest.mock('components/Button', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Button"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the cities and text', () => {
    renderWithTheme(<Home cities={mockCities.slice(0, 4)} />)

    expect(
      screen.getByRole('heading', { name: /Viva uma grande aventura/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock Button')).toHaveLength(2)

    expect(screen.getAllByTestId('Mock CityCard')).toHaveLength(4)
  })
})
