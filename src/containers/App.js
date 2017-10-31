import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import UserSearch from '../components/UserSearch';
import RepoList from '../components/RepoList';
import { getOrderedRepos } from '../selectors';

class App extends Component {
  render() {
    let { repos } = this.props;
    return (
      <Router>
        <div>
          <UserSearch />
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
