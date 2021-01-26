import { screen } from '@testing-library/react'
import { Camera } from '@styled-icons/bootstrap/Camera'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
  icon: <Camera />,
  title: 'Pontos Turísticos',
  count: 65
}

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(screen.getByLabelText(/título do cartão/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/quantidade do cartão/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
