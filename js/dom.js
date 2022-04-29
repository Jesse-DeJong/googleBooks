// Imports
// import { fetchRequest } from './api';

//
const form = document.getElementById("form");
const results = document.getElementById("results");
const searchButton = document.getElementById("search");

const createCard = (image, title, authors, description) => {
    // Section to contain each card
    const outerDiv = document.createElement("section");
    // Image of book cover, appended to section        
    const imageElement = document.createElement("img");
        imageElement.setAttribute("src", image);
        outerDiv.appendChild(imageElement);
    // Heading for title, appended to section
    const titleElement = document.createElement("h2");
    const titleTextNode = document.createTextNode(title);
        titleElement.appendChild(titleTextNode);
        outerDiv.appendChild(titleElement);
    // List for authors, appended to section
    const listElement = document.createElement("ul");
        const listItemElement = document.createElement("li");
        const listItemTextNodes = authors.map( (author) => document.createTextNode(author) );
        listItemTextNodes.map( (textNode) => listItemElement.appendChild(textNode) );
        listElement.appendChild(listItemElement);
        outerDiv.appendChild(listElement);
    // Paragraph for description, appended to section
    const paragraphElement = document.createElement("p");
    const paragraphTextNode = document.createTextNode(description);
        paragraphElement.appendChild(paragraphTextNode);
        outerDiv.appendChild(paragraphElement);
    // Append completed Card to the DOM
    results.appendChild(outerDiv);
};

// const createElement = (type, text, parent) => {
//     const newElement = document.createElement(type);
//     const textNode = document.createTextNode(text);
//     newElement.appendChild(textNode);
//     parent.appendChild(newElement);
// };

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