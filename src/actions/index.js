const SEARCH_USER = 'SEARCH_USER';
const UPDATE_USER = 'UPDATE_USER';

export function searchUser(githubUsername='') {
  // console.log("IN ACTION...");
  console.log(githubUsername);
  return { type: SEARCH_USER, githubUsername }
}

export function updateUser(githubUsername='') {
  // console.log("IN ACTION...");
  console.log(githubUsername);
  return { type: UPDATE_USER, githubUsername }
}
