import {
  SEARCH_USER,
  UPDATE_USER,
} from '../actions';

export default function Repos(state = {
  repoOrder: [],
}, action) {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        searchedUsername: action.payload,
      }
    case UPDATE_USER:
      return {
        ...state,
        githubUsername: action.payload,
      }
    default:
      return state;
  }
}
