/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { renderList } from '../components/render.js';
import { add } from '../logic/logic.js';
/**
 * This is the very first interaction of the user.
 * It's ran every time the user adds a new item to the list.
 *
 * @param {Event} event - Click event from the add button.
 */

export const addElementHandler = () => {
  const userInput = document.getElementById('item').value;
  const pendingArr = data.pending;
  add(userInput);
  renderList(pendingArr);
};
