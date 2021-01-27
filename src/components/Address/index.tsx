import Link from 'next/link'
import dynamic from 'next/dynamic'

import * as S from './styles'

export type AddressProps = {
  address: string
  coords: number[]
}

const MapWithNoSSR = dynamic(() => import('../Map/Map'), {
  ssr: false
})

const Address = ({ address, coords }: AddressProps) => (
  <S.Wrapper>
    <S.Header>
      <h1>Endereço</h1>
      <Link href="/" passHref>
        <a>Ver no Google Maps</a>
      </Link>
    </S.Header>
    <S.Map>
      <MapWithNoSSR coords={coords} />
    </S.Map>
    <S.Address>{address}</S.Address>
  </S.Wrapper>
)

export default Address
