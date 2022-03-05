/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
/**
 *
 * @param {} event - Click event of the Delete button.
 */

export const deleteElementHandler = (event) => {
  // Remove from array
  const pendingArr = data.pending;
  const liElText = event.target.parentNode.firstChild;
  const find = (elm) => liElText.data === elm;
  const index = pendingArr.findIndex(find);
  pendingArr.splice(index, 1);
  // Remove from DOM.
  const ulEl = event.target.parentNode.parentNode;
  ulEl.removeChild(event.target.parentNode);
};
