/* eslint-disable folders/match-regex */
/**
 *
 *
 *
 *
 *
 *
 */

import { data } from '../../data.js';

export const clearHandler = () => {
  // Clear the data
  data.pending.splice(0);
  data.done.splice(0);
  // Clear the DOM
  const displayPendingList = document.getElementById('pending-items');
  const displayDoneList = document.getElementById('done-items');
  while (displayPendingList.firstChild) {
    displayPendingList.removeChild(displayPendingList.firstChild);
  }
  while (displayDoneList.firstChild) {
    displayDoneList.removeChild(displayDoneList.firstChild);
  }
};
