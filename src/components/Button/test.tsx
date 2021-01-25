import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Fale conosco</Button>)

    expect(screen.getByRole('button', { name: /Fale conosco/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Fale conosco</Button>)

    expect(screen.getByRole('button', { name: /Fale conosco/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Fale conosco</Button>)

    expect(screen.getByRole('button', { name: /Fale conosco/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.8rem'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<Whatsapp data-testid="icon" />}>Fale conosco</Button>
    )

    expect(screen.getByText(/Fale conosco/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Fale conosco
      </Button>
    )

    expect(screen.getByRole('link', { name: /Fale conosco/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
