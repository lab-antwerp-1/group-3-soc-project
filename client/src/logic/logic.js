/* eslint-disable boundaries/element-types */
/* eslint-disable folders/match-regex */
import { data } from '../../data.js';

export const add = (userInput) => {
  return data.pending.push(userInput);
};
