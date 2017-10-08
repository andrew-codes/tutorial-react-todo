import React, {Component} from 'react';
import NewsList from '../components/NewsList';

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
          body: "This is a description of this news item.",
          href: "http://www.google.com"
        }
      ];

        return (
            <div>
              <NewsList newsItems={newsItems} />
            </div>
        );
    }
}

export default App;
