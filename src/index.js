import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import NewsItems from './reducers/NewsItems';

const defaultState = {
  newsItems: {
    "1": {
      title: "Dispatched News Item",
      body: "Some sample text...",
    },
    "2": {
      title: 'Im first',
      body: 'First yo',
    },
    "3": {
      title: 'Im last',
      body: 'Last yo',
    },
    "4": {
      title: 'Im da best yo',
      body: 'In the middle yo',
    }
  },
  newsItemOrder: [
    "2",
    "1",
    "4",
    "3"
  ],
}

const store = createStore(
  NewsItems,
  defaultState,
  compose(
    applyMiddleware(thunk),
  )
)

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => render(App));
}
