import * as types from './actionTypes'

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

// Team Selection
export function selectLeagueSlug(teamId) {
  return {
    type: types.SELECT_TEAM,
    payload: {selectedTeamId: teamId}
  }
}
