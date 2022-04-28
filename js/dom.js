// Imports
// import { fetchRequest } from './api';

//
const form = document.getElementById("form");
const results = document.getElementById("results");
const searchButton = document.getElementById("search");

const createCard = (type, text, parent) => {
    const newElement = document.createElement(type);
    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
    parent.appendChild(newElement);
};

const clearDom = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export {
    form,
    results,
    searchButton,
    clearDom,
    createCard
}