/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';
import { renderDoneList } from '../components/render-done-list.js';

/**
 *
 *
 *
 *
 */

export const doneElementHandler = (event) => {
  // Get the data
  const doneArr = data.done;
  const pendingArr = data.pending;
  // Get data from DOM and send them to data array
  const liElText = event.target.parentNode.firstChild;
  for (const element of doneArr) {
    if (liElText.data === element) return;
  }
  doneArr.push(liElText.data);
  // Update data
  const find = (elm) => liElText.data === elm;
  const index = pendingArr.findIndex(find);
  pendingArr.splice(index, 1);
  // Render both arrays of elements
  const renderedPendingList = renderList(pendingArr);
  const renderedDoneList = renderDoneList(doneArr);
  // Update the DOM. Clean the containers
  const displayPendingList = document.getElementById('pending-items');
  const displayDoneList = document.getElementById('done-items');
  while (displayPendingList.firstChild) {
    displayPendingList.removeChild(displayPendingList.firstChild);
  }
  while (displayDoneList.firstChild) {
    displayDoneList.removeChild(displayDoneList.firstChild);
  }
  // Send the new elements to the DOM
  displayPendingList.appendChild(renderedPendingList);
  displayDoneList.appendChild(renderedDoneList);
};
