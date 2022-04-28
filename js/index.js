import { handleFormSubmission } from './api.js';
import { searchButton } from './dom.js';

searchButton.addEventListener("click", (e) => handleFormSubmission(e));