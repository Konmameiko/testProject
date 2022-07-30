import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './reduxLearn';
import store from './redux/store';
import { Provider } from 'react-redux';

export default class reduxIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
