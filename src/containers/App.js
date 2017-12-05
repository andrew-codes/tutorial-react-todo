import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import UserSearch from '../components/UserSearch';
import RepoList from '../components/RepoList';
import {getOrderedRepos, getGithubUsername, getErrorMessage} from '../selectors';
import {searchUser, updateUser} from '../actionCreators';
import {bindActionCreators} from 'redux';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class App extends Component {
  render() {
    let {
      repos,
      githubUsername,
      updateUser,
      searchUser,
      errorMessage,
    } = this.props;
    return (
      <Router>
        <div>
          <Card>
            <CardContent>
              <UserSearch value={githubUsername} onChange={updateUser} onSearch={searchUser} />
              {errorMessage && (
                <h1>{errorMessage}</h1>
              )}
              <RepoList repos={repos} />
            </CardContent>
          </Card>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: getOrderedRepos(state),
    githubUsername: getGithubUsername(state),
    errorMessage: getErrorMessage(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateUser, searchUser}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
