import { form, results, createCard, clearDom, searchMore } from './dom.js';

let pageIndex = 0;

const fetchRequest = async (searchTerms) => {
    // FETCH the user query from the API, parse the response into JSON and return it
    return await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)).json();
}

const handleFormSubmission = async (e) => {
    // Prevent default form behaviour
    e.preventDefault();
    // Remove the previous search results if a new search is performed
    // Allows the func to be reused for additional serachs when MORE is pressed 
    if(e.target.id === "search") {
        clearDom(results);
        searchMore.classList.remove("hideMore");
    };
    
    // Create FormData object from user input to the page
    const userInput = new FormData(form);
    // Pull out individual fields for query string construction
    // Format userinput for API (spaces replaced by %20)
    const bookTitle = userInput.get("title").split(" ").join("%20");
    // Make the FETCH call with the userinput and current 'page' value
    const data = await fetchRequest(`${bookTitle}&startIndex=${pageIndex}`);
    // Iterate current place in the results
    pageIndex += 10;

    // Extract useful part of the returned object
    const resultData = data.items.map( (items) => items.volumeInfo )

    // Render the data for each book to the DOM
    resultData.map( (book) => createCard(
        book.imageLinks.thumbnail || "https://www.josco.com.au/wp-content/uploads/2016/05/Image-Unavailable.jpg",
        book.title || "No title available",
        book.authors || "No author(s) available",
        book.description || "No description available"
        )
    );



}

export {
    handleFormSubmission,
    fetchRequest
}