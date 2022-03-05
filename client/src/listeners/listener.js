/* eslint-disable folders/match-regex */
// import { data } from '../../data.js';
/* eslint-disable folders/match-regex */
// import { data } from '../../data.js';
import { addElementHandler } from '../handlers/add.js';
import { clearHandler } from '../handlers/clear-all.js';

// Add button
document
  .getElementById('add-button')
  .addEventListener('click', addElementHandler);

// Clear all button
document.getElementById('clear-button').addEventListener('click', clearHandler);
