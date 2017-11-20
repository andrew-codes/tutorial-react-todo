import {
  SEARCH_USER,
  UPDATE_USER,
} from '../actions';

export function searchUser(githubUsername='') {
  return { type: SEARCH_USER, payload: githubUsername }
}

export function updateUser(githubUsername='') {
  return { type: UPDATE_USER, payload: githubUsername }
}
