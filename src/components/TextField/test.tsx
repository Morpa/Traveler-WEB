import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWithTheme(<TextField />)

    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('should call onClick method when close is clicked', async () => {
    const handleClear = jest.fn()
    const onInput = jest.fn()

    renderWithTheme(
      <TextField onInput={onInput} name="TextField" onClick={handleClear} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
    })

    fireEvent.click(screen.getByLabelText('Close search'))

    expect(handleClear).toBeCalled()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField onInput={onInput} name="TextField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField onInput={onInput} name="TextField" disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })
})
