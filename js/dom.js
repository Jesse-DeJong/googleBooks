// Imports
// import { fetchRequest } from './api';

//
const form = document.getElementById("form");
const results = document.getElementById("results");
const searchButton = document.getElementById("search");

// HTML constructor function
const createCard = (image, title, authors, description) => {
    // Instantiate a container
    const outerDiv = document.createElement("section");

    // IMAGE containing the book cover        
    const imageElement = document.createElement("img");
        imageElement.setAttribute("src", image);
        outerDiv.appendChild(imageElement);

    // TITLE containing the books title
    elementCreator("h2", title, outerDiv);
    // const titleElement = document.createElement("h2");
    // const titleTextNode = document.createTextNode(title);
    //     titleElement.appendChild(titleTextNode);
    //     outerDiv.appendChild(titleElement);

    // AUTHORS containing a list of all authors
    const listElement = document.createElement("ul");
        // MAP authors array and append an LI for each to the UL
        authors.map( (author) => {
            elementCreator("li", author, listElement);
            // const listItemElement = document.createElement("li");
            // const listItemTextNode = document.createTextNode(author);
            // listItemElement.appendChild(listItemTextNode);
            // listElement.appendChild(listItemElement);
        })
        outerDiv.appendChild(listElement);

    // DESCRIPTION containing the provided description
    elementCreator("p", description, outerDiv);
    // const paragraphElement = document.createElement("p");
    // const paragraphTextNode = document.createTextNode(description);
    //     paragraphElement.appendChild(paragraphTextNode);
    //     outerDiv.appendChild(paragraphElement);

    // Append completed Card to the DOM
    results.appendChild(outerDiv);
};

const elementCreator = (type, text, parent) => {
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