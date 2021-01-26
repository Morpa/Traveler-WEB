import { fireEvent, screen } from '@testing-library/react'
import BeautyStars from 'beauty-stars'

import { renderWithTheme } from 'utils/tests/helpers'

import ReviewCard from '.'

const props = {
  name: 'Patricksom Vieras',
  imageUrl: 'https://source.unsplash.com/user/willianjusten/300x140',
  description:
    'Todos os produtos comercializados são de excelente qualidade, recomendo!',
  starry: 4
}

describe('<ReviewCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<ReviewCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.name })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `Avatar of ${props.name}` })
    ).toHaveAttribute('src', props.imageUrl)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render stars', () => {
    const star = jest.fn()

    renderWithTheme(
      <ReviewCard {...props}>
        <BeautyStars value={4} onChange={star} />
      </ReviewCard>
    )

    fireEvent.click(screen.getByRole('listitem', { name: /5 star/i }))
  })
})
