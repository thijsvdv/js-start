import 'babel-polyfill';
import $ from 'jquery';
import Dog from './dog';


$(window).load(() => {
  const browserToby = new Dog('Browser Toby');
  document.querySelector('.app').innerText = browserToby.bark();
});
