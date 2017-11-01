import React, {Component, PropTypes} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {searchUser, updateUser} from '../actions';
import { bindActionCreators } from 'redux';

const UserSearch = (props, searchUser, updateUser) => (
  <div>
    <input placeholder="github-username" type="text" name="github-username" value={props.githubUsername} onChange={() => props.updateUser(props.githubUsername)} />
    <button onClick={() => props.searchUser(props.githubUsername)}>Search</button>
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
    searchUser(githubUsername) {
      // console.log("SEARCH DISPATCH TO PROPS...");
      dispatch(searchUser(githubUsername));
    },
    updateUser(githubUsername) {
      // console.log("UPDATE DISPATCH TO PROPS...");
      dispatch(updateUser(githubUsername));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserSearch);
