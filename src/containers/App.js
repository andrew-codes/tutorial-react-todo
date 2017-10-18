import React, {Component} from 'react';
import NewsList from '../components/NewsList';
import { BrowserRouter as Router} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mostRecent } from '../actions/NewsItemActions';

class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(mostRecent());
  }

  render() {
    let { newsItems, dispatch } = this.props;
    let boundActionCreators = bindActionCreators(mostRecent, dispatch);
    return (
      <Router>
        <div>
          <NewsList newsItems={newsItems} {...boundActionCreators} />
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ newsItems: state.newsItems })
)(App);
