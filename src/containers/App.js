import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import UserSearch from '../components/UserSearch';
import RepoList from '../components/RepoList';
import { getOrderedRepos } from '../selectors';

class App extends Component {
  render() {
    let {
      repos,
      githubUsername,
      selectedUsername,
    } = this.props;
    return (
      <Router>
        <div>
          <UserSearch githubUsername={githubUsername} selectedUsername={selectedUsername}/>
          <RepoList repos={repos} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: getOrderedRepos(state),
  }
}
export default connect(
  mapStateToProps
)(App);
