import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const ALL_PLAYERS = gql`
  query NewMatchQuery($id: String!) {
    leagues(league_slug: $id) {
      id
      name
      users{
        id
        name
        image
      }
    }
  }
`

const componentWrapper = (component, options) => {
  return (
    graphql(ALL_PLAYERS, {
      name: 'newMatchQuery',
      // see documentation on computing query variables from props in wrapper
      // http://dev.apollodata.com/react/queries.html#options-from-props
      options: () => ({
        variables: {
          id: options.id
        }
      })
    })(component))
}



export default componentWrapper
