import {
  SEARCH_USER,
  UPDATE_USER,
  ADD_REPOS,
  ADD_REPOS_FAILURE,
} from '../actions';

export function searchUser() {
  return (dispatch, getState) => {
    const githubUsername = getState().githubUsername;
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        dispatch({ type: ADD_REPOS, payload: json });
      })
      .catch(function(e) {
        dispatch({ type: ADD_REPOS_FAILURE, payload: `Error occured fetching repos for ${githubUsername}`  });
      });
  }
}

export function updateUser(githubUsername='') {
  return { type: UPDATE_USER, payload: githubUsername }
}
