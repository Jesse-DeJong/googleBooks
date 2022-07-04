# Google Books UI

## Description
A webpage to provide a graphical user interface for the Google Books API which will allow a user to search a title and recieve batches of results relating to that title.

### How to install/run the project:
This site is hosted at the following link: 
https://jesse-dejong.github.io/googleBooks/

### Implementation: 
This project was kept minimal in design in order to mimic the styling of the rest of the google suite. Implemented in vanilla Javascript to keep the program lightweight and more easily maintainable.

### Future goals/extensions:
- Advanced Search: to allow for more specific search queries
- More complicated/informative error handling to provide a user additional feedback when a result was corrupted at the API end.







## MVP:
Create a page that allows users to `search` for books
#### Page should include the following:
- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books
#### Instructions:
When the `submit button` is clicked you need the request books from the Google books API using the `input value as your query string` (can be additional paramaters)
The books that you receive should be rendered in the books grid.
Each book in the grid should have an `image`, `author`, `title` and `description`
The grid should be `responsive` on different screen sizes
You should use `async / await` for your request code, NOT .then
#### Application Design (required):
You should separate DOM functions and non-DOM functions in different modules Example: https://github.com/chillcaw/el-salvador-code-alongs/tree/master/js-modules
Write as many non-DOM functions as you can
Functions should do 1 thing, and should be as pure and reusable as possible
Always use `iterators` over loops
Always parametrize and abstract large pieces of duplicate code.
#### Bonus (optional, but highly recommended):
Give feedback to the user when no book results can be found for the query.
When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

### License:
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.