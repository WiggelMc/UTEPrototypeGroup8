const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const paramBook = urlParams.get("book");

const activeBook = getBook(paramBook);
if (activeBook) displayBook(activeBook);


function displayBook(book) {

    const newElem = Object.assign(
        document.createElement(`div`), { id: `divid`, className: `test`, innerHTML: `
            <p>Title: %title%</p> <br>
            <p>Authors:</p> <p>%authors%</p> <br>
            <p>Tags:</p> <p>%tags%</p> <br>
            <p>Abstract:</p> <p>%abstract%</p> <br>
            <p>Notes:</p> <p>%notes%</p> <br>
        `
                .replaceAll("%title%",book.title)
                .replaceAll("%authors%", book.authors?.join("<br>"))
                .replaceAll("%tags%",book.tags?.join("<br>"))
                .replaceAll("%abstract%",book.abstract?.join("<br>"))
                .replaceAll("%notes%",book.notes?.join("<br>"))
        });
    document.body.appendChild(newElem);
}

function getBook(id) {
    for (const book of DATABASE.books)
        if (book.id === id) return book;

    bookNotFound();
}

function bookNotFound() {
    //TODO
    const newElem = Object.assign(
        document.createElement(`div`), { id: `divid`, className: `test`, innerHTML: `
            <p>Book Not Found</p>
        `});
    document.body.appendChild(newElem);
    console.log("Book not Found");
}
