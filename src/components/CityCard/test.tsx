import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CityCard from '.'

const props = {
  city: 'Cidade Linda',
  locals: 34,
  imageUrl: 'https://source.unsplash.com/user/willianjusten/'
}

describe('<CityCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<CityCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.city })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `Picture of ${props.city}` })
    ).toHaveAttribute('src', props.imageUrl)

    expect(screen.getByText(/locais/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
