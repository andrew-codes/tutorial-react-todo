import React, {Component, PropTypes} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {searchUser, updateUser} from '../actionCreators';

const UserSearch = (props) => (
  <div>
    <input placeholder="github-username" type="text" name="github-username" value={props.githubUsername} onChange={(evt) => props.updateUser(evt.target.value)} />
    <button onClick={(evt) => props.searchUser(props.githubUsername)}>Search</button>
    <p>{props.selectedUsername}</p>
  </div>
)

UserSearch.propTypes = {
  githubUsername: PropTypes.string.isRequired,
  selectedUsername: PropTypes.string,
  searchUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
}

UserSearch.defaultProps = {
  githubUsername: '',
  selectedUsername: '',
  searchUser: (githubUsername) => {
  },
  updateUser: (githubUsername) => {
  },
}

const mapStateToProps = (state) => {
  return {
    githubUsername: state.githubUsername,
    selectedUsername: state.selectedUsername,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (githubUsername) => {
      dispatch(searchUser(githubUsername));
    },
    updateUser: (githubUsername) => {
      dispatch(updateUser(githubUsername));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSearch);
