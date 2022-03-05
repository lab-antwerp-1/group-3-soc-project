/* eslint-disable folders/match-regex */
import { renderDoneList } from '../components/render-done-list.js';
import { renderList } from '../components/render-list.js';
import { data } from '../../data.js';

/**
 *
 *
 *
 *
 */

export const notDoneElementHandler = (event) => {
  // Get the data
  const doneArr = data.done;
  const pendingArr = data.pending;
  // Get data from DOM and send them to data array
  const liElText = event.target.parentNode.firstChild;
  for (const element of pendingArr) {
    if (liElText.data === element) return;
  }
  pendingArr.push(liElText.data);
  // Update data
  const find = (elm) => liElText.data === elm;
  const index = doneArr.findIndex(find);
  doneArr.splice(index, 1);
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
