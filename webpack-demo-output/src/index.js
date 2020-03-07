import _ from 'lodash';
import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  let btn =  document.createElement('button')
  element.innerHTML = _.join(['Hello', 'webpack','你好！'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());