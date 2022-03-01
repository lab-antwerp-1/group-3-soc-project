/* eslint-disable folders/match-regex */
import { data } from '../../data.js';
import { renderList } from '../components/render.js';
import { add } from '../logic/logic.js';

export const addElementHandler = () => {
  const userInput = document.getElementById('item').value;

  add(userInput);
  const pendingArr = data.pending;
  renderList(pendingArr);
};
