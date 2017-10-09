import React, {Component} from 'react';
import NewsList from '../components/NewsList';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {

        };
    }

    render() {
      const newsItems = [
        {
          title: "Test News Item",
          id: 1,
          body: "This is a description of this news item."
        }
      ];

        return (
          <Router>
            <div>
              <NewsList newsItems={newsItems} />
            </div>
          </Router>
        );
    }
}

export default App;
