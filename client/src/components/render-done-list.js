/* eslint-disable folders/match-regex */
/**
 *
 *
 *
 *
 *
 *
 */

import { notDoneElementHandler } from '../handlers/not-done.js';

export const renderDoneList = (arrayOfElements = []) => {
  const ulEl = document.createElement('ul');
  ulEl.id = 'ulEl-done';
  for (const element of arrayOfElements) {
    const liEl = document.createElement('li');
    liEl.innerHTML = element;
    liEl.id = 'liEl-done';
    liEl.className = 'liEl-done';
    // Add button
    const notDoneButton = document.createElement('button');
    notDoneButton.innerHTML = 'Not done';
    notDoneButton.id = 'not-done-button';
    notDoneButton.onclick = notDoneElementHandler;
    // notDoneButton.onclick = notDoneElementHandler;
    liEl.appendChild(notDoneButton);

    ulEl.appendChild(liEl);
  }
  return ulEl;
};
