const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const paramBook = urlParams.get("book");

const activeBook = getBook(paramBook);

function getBook(id) {
    for (const book of DATABASE.books)
        if (book.name === id) return book;

    bookNotFound();
}

function bookNotFound() {
    //TODO
    console.log("Book not Found");
}
