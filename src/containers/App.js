import React, {Component} from 'react';
import NewsList from '../components/NewsList';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { getNewsItems } from '../selectors/index';

class App extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
  }

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
    newsItems: getNewsItems(state),
  }
}

export default connect(
  mapStateToProps
)(App);
