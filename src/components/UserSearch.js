import React, {Component, PropTypes} from 'react';
import {Route} from 'react-router-dom';

const UserSearch = (props) => (
  <div>
    <input placeholder="github-username" type="text" name="github-username" value={props.username} onChange={(evt) => props.updateUser(evt.target.value)} />
    <button onClick={(evt) => props.searchUser(props.username)}>Search</button>
  </div>
)

UserSearch.propTypes = {
  username: PropTypes.string.isRequired,
  searchUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
}

UserSearch.defaultProps = {
  username: '',
  searchUser: (username) => {
  },
  updateUser: (username) => {
  },
}

export default UserSearch;
