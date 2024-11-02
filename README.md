# odin-library

# Explanation

    HTML: Includes a “NEW BOOK” button to open a form for new books and a <dialog> for the form modal. The booksContainer div displays book cards.

    CSS: Basic styling to arrange book cards and form inputs.

    JavaScript:
        Book class defines the book object with properties title, author, pages, and read.

        addBookToLibrary function pushes a new book to myLibrary and calls displayBooks to refresh the display.

        displayBooks loops over myLibrary and generates HTML for each book, adding event listeners for toggling read status and removing books.

        toggleReadStatus and removeBook functions update individual books and refresh the display.

        Form handling includes event.preventDefault() to stop form submission, adds the new book to the library, and resets the form.

This implementation separates data storage and display, enhancing code organization and maintainability.

# WALK THROUGH

    Let’s dive deeper into each part of the code to understand the functionality and design principles in this library app.

    ### 1. **HTML Structure**

    The HTML sets up the basic structure for the app, including:
    - **Title and Header**: The `h1` header displays the app title.
    - **"NEW BOOK" Button**: This button, with the ID `newBookBtn`, opens the form modal when clicked, allowing the user to input details for a new book.
    - **Dialog Form**: 
        - The form is in a `<dialog>` tag, which opens as a modal window when triggered. This dialog is useful here because it allows users to enter book details without redirecting or refreshing the page.
        - Inside the form (`bookForm`), fields are provided to enter book details (title, author, pages, and read status) and two buttons:
        - A **Submit** button that adds a new book to the library.
        - A **Cancel** button that closes the dialog without adding a book.
    - **Books Display Container**: The `booksContainer` div is a flexible container that will hold and display the list of books as they’re added.

    ### 2. **CSS Styling**

    The CSS defines the styling and layout of the application:
    - **Basic Layout**: Styles the body, making the app centered on the page.
    - **Dialog Styling**: Styles for the dialog, which gives the form a modal look.
    - **Book Card Layout**: Each book is displayed in a "card" format (with the `book-card` class), using a flexbox layout for alignment. This layout makes it easier to see each book’s details at a glance and interact with each book individually (e.g., removing or toggling read status).
    - **Button and Form Styling**: Styles for buttons and form fields to ensure a consistent and clean appearance.

    ### 3. **JavaScript**

    The JavaScript code handles all the interactivity and data management. Let’s break it down:

    #### a. **Book Class**

    The `Book` class is a blueprint for each book. It defines:
    - **Constructor**: This method is called whenever we create a new book. It accepts four parameters (`title`, `author`, `pages`, and `read`) and assigns them to the book’s instance properties. Each book instance stores its own data.
    - **Toggle Read Status**: The `toggleReadStatus` method switches the `read` property of the book between `true` and `false`. This allows users to mark books as read/unread.

    #### b. **Library Array**

    `myLibrary` is an array that acts as a storage container for all `Book` instances. This array:
    - Centralizes the data for the entire library.
    - Enables easy manipulation and rendering of books by looping through the array.

    #### c. **Adding Books to the Library**

    `addBookToLibrary(book)` function:
    - **Parameter**: Accepts a `book` object (a `Book` instance).
    - **Pushes the Book to Array**: Adds the new book to `myLibrary`.
    - **Displays the Updated Library**: Calls `displayBooks()` to refresh the display, so the user immediately sees the new book.

    #### d. **Displaying Books on the Page**

    The `displayBooks()` function is responsible for rendering the books in `myLibrary`:
    - **Clears the Container**: Clears the existing content of `booksContainer` to avoid duplicate entries every time the function is called.
    - **Loop through `myLibrary`**: For each book, it creates a new `book-card` div, filling it with:
        - Title, author, pages, and read status displayed using HTML.
        - **Toggle Read Button**: Calls `toggleReadStatus(index)` function, toggling the book’s `read` property.
        - **Remove Button**: Calls `removeBook(index)`, which deletes the book from the library.
    - **Append to Container**: Adds each book card to `booksContainer`, displaying it on the page.

    #### e. **Toggling Read Status**

    The `toggleReadStatus(index)` function:
    - Accepts an `index` (position in `myLibrary` array).
    - Calls `toggleReadStatus()` on the book object at that index, updating its `read` property.
    - Calls `displayBooks()` to refresh the display, so users see the updated status.

    #### f. **Removing a Book**

    `removeBook(index)`:
    - Removes a book from `myLibrary` by its `index` using `splice`.
    - Calls `displayBooks()` to refresh the view without the removed book.

    #### g. **Form Handling**

    The form allows users to add new books and performs actions on submit and cancel:
    - **Submit Event Listener**: 
        - Uses `event.preventDefault()` to stop the form from refreshing the page by default.
        - Retrieves values from form inputs and creates a new `Book` instance with these values.
        - Calls `addBookToLibrary(newBook)` to add the new book to the library and update the display.
        - Closes the dialog and resets the form fields for the next input.
    - **Open and Close Dialog**:
        - The `newBookBtn` click event shows the dialog.
        - The `cancelBtn` click event closes it.

    ### 4. **Example Books**

    Two example books are added at the bottom of the script to provide some initial data, demonstrating how the display works.

    ### Summary of the App Structure

    - **Data Structure (Model)**: `myLibrary` array and `Book` class manage the data.
    - **View (Display Logic)**: `displayBooks()` handles rendering.
    - **Controller (User Interaction)**: Form events, add, remove, and toggle functions handle all interactivity, ensuring that the model and view stay in sync.

    This separation between model, view, and controller (MVC) helps maintain the app’s functionality independently, making it easier to expand or modify in the future. For example, you could easily add features like book sorting or search functionality without changing the core library storage or display mechanisms.