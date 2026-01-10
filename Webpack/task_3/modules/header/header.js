import $ from 'jquery';
import './header.css';

console.log('Init header');

$('body').prepend(`
  <header class="header">
    <div id="logo"></div>
    <h1>Holberton Dashboard</h1>
  </header>
`);
