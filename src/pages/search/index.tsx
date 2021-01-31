import Navbar from 'components/Navbar'
import TextField from 'components/TextField'

import * as S from 'components/SearchPage/styles'

import Search, { SearchTemplateProps } from 'templates/Search'

import mockCities from 'templates/Search/mock'

export default function SearchPage(props: SearchTemplateProps) {
  return (
    <>
      <S.NavWrapper>
        <Navbar>
          <TextField
            name="search"
            initialValue=""
            placeholder="Qual cidade você procura?"
          />
        </Navbar>
      </S.NavWrapper>

      <Search {...props} />
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      cities: mockCities
    }
  }
}
