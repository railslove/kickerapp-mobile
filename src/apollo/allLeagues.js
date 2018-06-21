import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export const ALL_LEAGUES_QUERY = gql`
  query AllLeaguesQuery {
    leagues(limit: 100) {
      id
      slug
      name
      matches_count
    }
  }
`

const componentWrapper = (component) => (
  graphql(ALL_LEAGUES_QUERY, {
    name: 'allLeagues',
    options: {
      fetchPolicy: 'network-only'
    }
  })(component))


export default componentWrapper
