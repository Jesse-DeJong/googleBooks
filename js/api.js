import { form, results, createCard, clearDom } from './dom.js';

const fetchRequest = async (bookTitle) => {
    // Take in search paramaters
    const searchTerms = bookTitle;
    // Execute the query string
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)
    // Parse the response into JSON
    const json = await response.json();
    // Return the JSON data
    return json;
}

const handleFormSubmission = async (e) => {
    // Prevent default form behaviour
    e.preventDefault();
    // Remove the previous search results
    clearDom(results);

    // Create FormData object from user input to the page
    const userInput = new FormData(form);
    // Pull out individual fields for query string construction
    // Format userinput for API (spaces replaced by %20)
    const bookTitle = userInput.get("title").split(" ").join("%20");

    // Make the FETCH request
    const data = await fetchRequest(bookTitle);
    // Extract useful part of the returned object
    const resultData = data.items.map( (items) => items.volumeInfo )
    
    // console.log(resultData);
    resultData.map( (book) => createCard("h2", book.title, results));

    
}

export {
    handleFormSubmission,
    fetchRequest
}