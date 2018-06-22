import * as types from '../actions/actionTypes'

const initialState = {
  id: null,
  slug: '',
  name: '',
  matches_count: null
}

export default function league(state = initialState, action = {}) {
  const {payload} = action
  switch (action.type) {
  case types.SELECT_LEAGUE:
    return {
      ...state,
      ...payload
    }
  case types.FLUSH_STORE:
    return {
      ...initialState
    }
  default:
    return state
  }
}
