import { form } from './dom.js';

const fetchRequest = async (bookTitle) => {
    // Take in search paramaters
    const searchTerms = bookTitle;
    // Execute the query string
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)
    // Parse the response into JSON
    const json = await response.json();
    // Return the JSON data
    // console.log(json);
    return json;
}

const handleFormSubmission = async (e) => {
    // Prevent default form behaviour
    e.preventDefault();

    // Create FormData object from user input to the page
    const userInput = new FormData(form);
    // Pull out individual fields for query string construction
    // Format userinput for API (spaces replaced by %20)
    const bookTitle = userInput.get("title").split(" ").join("%20");
    console.log(bookTitle);
    
    const data = await fetchRequest(bookTitle);
    console.log(data);


    
}

export {
    handleFormSubmission,
    fetchRequest
}