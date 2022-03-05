/* eslint-disable prettier/prettier */
/* eslint-disable folders/match-regex */
/* eslint-disable no-unused-vars */
import { renderList } from '../components/render-list.js';
import { data } from '../../data.js';

export const addElementHandler = () => {
    // Gather and process user data.
    const item = document.getElementById('item').value;
    const pendingArr = data.pending;
    if (item === '') {
        return
    }
    for (const element of pendingArr) {
        if (item === element) return;
    }
    
    //  Execute core logic
    pendingArr.push(item);
    const renderedList = renderList(pendingArr);

    // Refresh the browser
    const displayList = document.getElementById('pending-items');
    while (displayList.firstChild) {
        displayList.removeChild(displayList.firstChild);
    }
    
    // Communicate
    displayList.appendChild(renderedList);
};
