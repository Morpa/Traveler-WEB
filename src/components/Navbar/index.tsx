import Link from 'next/link'

import Logo from 'components/Logo'

import * as S from './styles'

export type NavbarProps = {
  children?: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => (
  <S.Wrapper>
    <Link href="/" passHref>
      <a>
        <Logo />
      </a>
    </Link>

    {!!children && <>{children}</>}
  </S.Wrapper>
)

export default Navbar
