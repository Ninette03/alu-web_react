import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append(`
  <main>
    <button>Click here to get started</button>
    <p id="count"></p>
  </main>
`);

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
