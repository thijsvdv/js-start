import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Dog from './dog';

const dogBark = new Dog('Browser Toby').bark();

fetch('http://loripsum.net/api', {
  method: 'get',
}).then((response) => {
  console.log(response);
}).catch((err) => {
  console.log(err);
});

const App = props => (
  <div>
    The dog happily says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
