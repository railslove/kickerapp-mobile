import * as types from '../actions/actionTypes'

const initialState = {
  selectedLeagueSlug: ''
}

export default function league(state = initialState, action = {}) {
  const {payload} = action
  switch (action.type) {
  case types.SELECT_LEAGUE:
    return {
      ...state,
      selectedLeagueSlug: payload.selectedLeagueSlug
    }
  default:
    return state
  }
}
