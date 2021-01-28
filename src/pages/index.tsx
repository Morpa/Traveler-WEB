import Home, { HomeTemplateProps } from 'templates/Home'

import mockCities from 'templates/Home/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      cities: mockCities
    }
  }
}
