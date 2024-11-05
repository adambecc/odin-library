const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}


function displayBooks() {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = ''; // Clear the container before re-displaying

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? 'Read' : 'Not Read'}</p>
            <button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        booksContainer.appendChild(bookCard);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Handle form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
	event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    document.getElementById('bookFormModal').close(); // Close the dialog
    this.reset(); // Reset the form fields
});

// Show modal on NEW BOOK button click
document.getElementById('newBookBtn').addEventListener('click', () => {
    document.getElementById('bookFormModal').showModal();
});

// Hide modal on Cancel button click
document.getElementById('cancelBtn').addEventListener('click', () => {
    document.getElementById('bookFormModal').close();
});

// Example books
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('1984', 'George Orwell', 328, false));