import * as types from '../actions/actionTypes'

const initialState = {
  selectedTeamId: ''
}

export default function team(state = initialState, action = {}) {
  const {payload} = action
  switch (action.type) {
  case types.SELECT_TEAM:
    return {
      ...state,
      selectedTeamId: payload.selectedTeamId
    }
  default:
    return state
  }
}
