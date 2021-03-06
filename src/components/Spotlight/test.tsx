import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Spotlight from '.'

const props = {
  city: 'Cidade Linda',
  description:
    'Um belo lugar maravilhoso que um dia eu quero que você venha conhecer',
  imageUrl: 'https://source.unsplash.com/user/willianjusten/'
}

describe('<Spotlight />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Spotlight {...props} />)

    expect(
      screen.getByRole('heading', { name: props.city })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `Picture of ${props.city}` })
    ).toHaveAttribute('src', props.imageUrl)

    expect(screen.getByText(/destaque/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
