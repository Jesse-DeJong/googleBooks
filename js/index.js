import { handleFormSubmission } from './api.js';
import { searchButton, moreButton } from './dom.js';

searchButton.addEventListener("click", (e) => handleFormSubmission(e));
moreButton.addEventListener("click", (e) => handleFormSubmission(e));