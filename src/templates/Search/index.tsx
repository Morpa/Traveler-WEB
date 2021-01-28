import Link from 'next/link'

import CityCard, { CityCardProps } from 'components/CityCard'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type SearchTemplateProps = {
  cities: CityCardProps[]
}

const Search = ({ cities }: SearchTemplateProps) => (
  <S.Wrapper>
    <Container>
      <S.HeadWrapper>
        <h1>Selecione uma cidade</h1>
        <S.OptionsWrapper>
          <span>Todas</span>
          <span>Mais acessadas</span>
          <span>A - Z</span>
        </S.OptionsWrapper>
      </S.HeadWrapper>
      <Grid>
        {cities.map((item) => (
          <Link key={item.city} href={`city/${item.city}`} passHref>
            <a>
              <CityCard {...item} />
            </a>
          </Link>
        ))}
      </Grid>
    </Container>
  </S.Wrapper>
)

export default Search
