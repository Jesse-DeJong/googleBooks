// Imports
// import { fetchRequest } from './api';

// 
const _ = null;
//
const form = document.getElementById("form");
const results = document.getElementById("results");
const searchButton = document.getElementById("search");

// HTML constructor function
const createCard = (image, title, authors, description) => {
    // Instantiate a container
    const outerDiv = document.createElement("section");
    // Add a class for styling
    outerDiv.setAttribute("class", "card");

        // IMAGE containing the book cover        
        elementCreator("img", _, outerDiv, "src", image)
    
        // TITLE containing the books title
        elementCreator("h2", title, outerDiv, "class", "card__title");
    
        // AUTHORS containing a list of all authors
        const listElement = document.createElement("ul");
            // MAP authors array and append an LI for each to the UL
            authors.map( (author) => {
                elementCreator("li", author, listElement, "class", "card__listItem");
            })
            outerDiv.appendChild(listElement);
        
        // DESCRIPTION containing the provided description
        elementCreator("p", description, outerDiv, "class", "card__description");

    // Append completed Card to the DOM
    results.appendChild(outerDiv);
};



// Reusable function for element creation including assignment of necessary attributes (class)
const elementCreator = (type, text, parent, attribute, className) => {
    const newElement = document.createElement(type);
    if (text) {
    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
    }
    parent.appendChild(newElement);

    newElement.setAttribute(attribute, className);
};



// Reset function for clearing the previous results from the DOM
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