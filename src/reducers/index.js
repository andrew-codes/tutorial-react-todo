import {
  SEARCH_USER,
  UPDATE_USER,
} from '../actions';

export default function Repos(state = {
  repoOrder: [],
}, action) {
  // console.log("IN REDUCER...");
  // console.log(state);
  // console.log(action);
  switch (action) {
    case SEARCH_USER:
      // console.log("TESTING SEARCH SPREAD");
      // console.log(...state);
      return {
        ...state,
        githubUsername: state.githubUsername,
        selectedUsername: state.githubUsername,
      }
    case UPDATE_USER:
      return {
        ...state,
        githubUsername: state.githubUsername,
      }
    default:
      return state;
  }
}
