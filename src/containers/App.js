import React, {Component} from 'react';
import HelloWorld from '../components/HelloWorld';


class App extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <HelloWorld />
        );
    }
}

export default App;
