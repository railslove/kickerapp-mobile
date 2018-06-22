import * as types from './actionTypes'

export function flushStore() {
  return {
    type: types.FLUSH_STORE
  }
}

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
export function selectLeague(leagueObject) {
  return {
    type: types.SELECT_LEAGUE,
    payload: leagueObject
  }
}
