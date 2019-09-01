import {
    HOME_INFO, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
  } from '../constants/home'
  
  const INITIAL_STATE = {
    homeInfo: {},
    searchCount: 0,
    pin: [],
    recommend: []
  }
  
  export default function home(state = INITIAL_STATE, action) {
    switch(action.type) {
      case HOME_INFO: {
        return {
          ...state,
          homeInfo: action.payload
        }
      }
      case HOME_RECOMMEND: {
        return {
          ...state,
          recommend: state.recommend.concat(action.payload)
        }
      }
      default:
        return state
    }
  }