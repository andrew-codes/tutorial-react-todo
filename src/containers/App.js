import React, {Component} from 'react';
import NewsList from '../components/NewsList';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { getOrderedNewsItems } from '../selectors';

class App extends Component {
  render() {
    let { newsItems } = this.props;
    return (
      <Router>
        <div>
          <NewsList newsItems={newsItems} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: getOrderedNewsItems(state),
  }
}

export default connect(
  mapStateToProps
)(App);
