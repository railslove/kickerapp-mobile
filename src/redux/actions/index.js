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

// League Selection
export function selectLeagueSlug(leagueSlug) {
  return {
    type: types.SELECT_LEAGUE,
    payload: {selectedLeagueSlug: leagueSlug}
  }
}
