import { form, results, createCard, clearDom } from './dom.js';

const fetchRequest = async (searchTerms) => {
    // FETCH the user query from the API, parse the response into JSON and return it
    return await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`)).json();
}

const handleFormSubmission = async (e, pageIndex) => {
    // Prevent default form behaviour
    e.preventDefault();
    // Remove the previous search results
    clearDom(results);

    // Create FormData object from user input to the page
    const userInput = new FormData(form);
    // Pull out individual fields for query string construction
    // Format userinput for API (spaces replaced by %20)
    const bookTitle = userInput.get("title").split(" ").join("%20");

    // IF trigger for first run where no pageIndex is defined
    if (!pageIndex) {
    // Make the FETCH request
    const data = await fetchRequest(bookTitle);
    console.log(data);
    return data;
    }
    // Followup FETCH request for additional results
    const data = await fetchRequest(`${bookTitle}&startIndex=${pageIndex}`);

    // Extract useful part of the returned object
    const resultData = data.items.map( (items) => items.volumeInfo )

    console.log(resultData);
    resultData.map( (book) => createCard(
        book.imageLinks.thumbnail,
        book.title,
        book.authors,
        book.description
        )
    );

    
}

export {
    handleFormSubmission,
    fetchRequest
}