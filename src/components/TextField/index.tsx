import { InputHTMLAttributes, useState } from 'react'
import { Search } from '@styled-icons/material-outlined/Search'
import { Close } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  initialValue?: string
  iconPosition?: 'left' | 'right'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

const TextField = ({
  iconPosition,
  name,
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Icon iconPosition="left" aria-label="Search">
          <Search />
        </S.Icon>

        {!!value && (
          <S.Icon
            iconPosition="right"
            style={{ cursor: 'pointer' }}
            aria-label="Close search"
            onClick={handleClear}
          >
            <Close />
          </S.Icon>
        )}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          name={name}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
