/* eslint-disable folders/match-regex */
export const renderList = (pending = []) => {
  const pendingList = document.getElementById('pending-items-ul');
  const liEl = document.createElement('li');
  const element = pending[pending.length - 1];
  liEl.innerHTML = element;
  pendingList.appendChild(liEl);
};
