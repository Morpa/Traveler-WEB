import { Container } from 'components/Container'
import Button from 'components/Button'
import Logo from 'components/Logo'
import CityCard, { CityCardProps } from 'components/CityCard'

import * as S from './styles'

export type HomeTemplateProps = {
  cities: CityCardProps[]
}

const Home = ({ cities }: HomeTemplateProps) => (
  <Container>
    <S.HeaderWrapper>
      <Logo />
      <S.ButtonWrapper>
        <Button as="a" href="/admin">
          Acesso Restrito
        </Button>
      </S.ButtonWrapper>
    </S.HeaderWrapper>
    <S.HomeWrapper>
      <S.LeftSide>
        <S.HugeText>Viva uma grande aventura</S.HugeText>
        <S.Description>
          Descubra locais incríveis para se visitar em cidades maravilhosas!
        </S.Description>
        <Button
          size="large"
          color="orange"
          textColor="primary"
          as="a"
          href="/search"
        >
          Descobrir todos os lugares
        </Button>
      </S.LeftSide>
      <S.RightSide>
        <S.CitiesWrapperLeft>
          {cities.slice(0, 2).map((item) => (
            <CityCard key={item.city} {...item} />
          ))}
        </S.CitiesWrapperLeft>
        <S.CitiesWrapperRight>
          {cities.slice(2, 4).map((item) => (
            <CityCard key={item.city} {...item} />
          ))}
        </S.CitiesWrapperRight>
      </S.RightSide>
    </S.HomeWrapper>
  </Container>
)

export default Home
