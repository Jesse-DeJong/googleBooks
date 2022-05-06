import { handleFormSubmission } from './api.js';
import { searchButton, moreButton } from './dom.js';

// Triggers for user initiating a search
searchButton.addEventListener("click", (e) => handleFormSubmission(e));
searchButton.addEventListener("submit", (e) => handleFormSubmission(e));
// Trigger for user recalling search for additional results
moreButton.addEventListener("click", (e) => handleFormSubmission(e));