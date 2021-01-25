import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'orange' | 'blueLow' | 'green'
  textColor?: 'primary' | 'textColor'
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    color = 'blueLow',
    textColor = 'textColor',
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    ref={ref}
    hasIcon={!!icon}
    color={color}
    textColor={textColor}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
