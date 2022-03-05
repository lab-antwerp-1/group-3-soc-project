/* eslint-disable folders/match-regex */
import { doneElementHandler } from '../handlers/done.js';
import { deleteElementHandler } from '../handlers/delete.js';
/* eslint-disable folders/match-regex */
/**
 * This function takes the elements stored in an array of strings and creates an un-ordered list where each list element is one of the elements in the given array.
 *
 * @param {Array} arrayOfElements - Array whose elements will be listed in an un-ordered list.
 * @returns {Object} ulEl - DOM <ul> element containing all the listed items.
 *
 * @example
 *
 * elements = [element1, element2, element3, element4, element5]
 *
 * <ul>
 *  <li>element1</>
 *  <li>element2</>
 *  <li>element3</>
 *  <li>element4</>
 *  <li>element5</>
 * </ul>
 *
 */

export const renderList = (arrayOfElements = []) => {
  // Create ul element and give ID.
  const ulEl = document.createElement('ul');
  ulEl.id = 'ulEl-pending';
  for (const element of arrayOfElements) {
    const liEl = document.createElement('li');
    // eslint-disable-next-line prettier/prettier
    liEl.innerHTML = element;
    liEl.id = 'liEl';
    liEl.className = 'liEl';
    // Add Done button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = 'Done';
    doneButton.id = 'done-button';
    doneButton.className = 'done-button';
    doneButton.onclick = doneElementHandler;
    liEl.appendChild(doneButton);
    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.id = 'delete-button';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = deleteElementHandler;
    liEl.appendChild(deleteButton);
    // Append final list element.
    ulEl.appendChild(liEl);
  }
  return ulEl;
};
