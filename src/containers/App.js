import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import UserSearch from '../components/UserSearch';
import RepoList from '../components/RepoList';
import {getOrderedRepos, getGithubUsername, getSearchedUsername} from '../selectors';
import {searchUser, updateUser} from '../actionCreators';
import {bindActionCreators} from 'redux';

class App extends Component {
  render() {
    let {
      repos,
      githubUsername,
      searchedUsername,
      updateUser,
      searchUser,
    } = this.props;
    return (
      <Router>
        <div>
          <UserSearch username={githubUsername} updateUser={updateUser} searchUser={searchUser} />
          <p>{searchedUsername}</p>
          <RepoList repos={repos} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: getOrderedRepos(state),
    githubUsername: getGithubUsername(state),
    searchedUsername: getSearchedUsername(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateUser, searchUser}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
