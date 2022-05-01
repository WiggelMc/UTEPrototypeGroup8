const bookProperties = document.getElementById("bookProperties");

const activeBook = getBook(paramBook);
if (activeBook) displayBook(activeBook);


function getBookview(item) {

    const bookCover = item.cover ?? "../../The Art.jpeg";

    const title = item.title;
    const authors = item.authors?.join("<br>") ?? "-";
    const abstract = shortenString(item.abstract?.join(", "), 140);
    const tags = shortenString(item.tags?.join(", "), 100);
    const displayReleaseYear = item.releaseYear !== undefined;
    const releaseYear = item.releaseYear;

    const availableEbook = item.availableEbook;
    const availableRent = item.availableRent;

    const rentDelay = Number(item.rentDelay);
    const now = new Date(Date.now());
    const rentFinal = new Date(now.getFullYear(),now.getMonth(),now.getDate()+rentDelay);
    const formattedDate = rentFinal.toLocaleDateString(lang["#date-locale"]);

    const availableThere = item.availableThere;

    return `<div class="container bg-secondary bg-opacity-25 pt-2">
        <span class="bg-success py-1 px-3 text-center rounded">
          <a class="keepLink text-white" data-kl="../pages/search.html" href="">&larr; BACK</a>
        </span>
        <h1 class="text-center fw-bold">${title}</h1>
        <p class="text-center fw-bold">${authors}</p>
        <p class="ps-5"><span class="local">##availability</span>:</p>
        <div class="row ps-5">
          <div class="col-lg-3 col-md-4 col-sm-12">
            <p class="availability ${availableThere == 0 ? "avNo" : "avYes"} py-1 px-3 text-center text-white rounded local">##availableThere</p>
            <p class="${availableThere == 0 ? "" : "bg-white"} py-1 px-3 text-center rounded local">${availableThere == 0 ? "##availableNo" : "##availableYesThere"}</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <p class="availability ${availableRent == 0 ? "avNo" : availableRent == 1 ? "avYes" : "avYesnt"} py-1 px-3 text-center text-white rounded local">##availableRent</p>
            <p class="${availableRent == 0 ? "" : "bg-white"} py-1 px-3 text-center rounded"><span class="local">${availableRent == 0 ? "##availableNo" : availableRent == 1 ? "##availableYesRent" : "##availableYesntRent"}</span>${availableRent == 0 ? "" : availableRent == 1 ? "" : formattedDate}</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <p class="availability ${availableEbook == 0 ? "avNo" : "avYes"} py-1 px-3 text-center text-white rounded local">##availableEbook</p>
            <p class="${availableEbook == 0 ? "" : "bg-white"} py-1 px-3 text-center rounded local">${availableEbook == 0 ? "##availableNo" : "##availableYesEbook"}</p>
          </div>
        </div>
        <div class="row mt-5 ps-5 py-3">
          <div class="col-10">
            <p>Schlagwörter</p>
            <p>Erscheinungsjahr</p>
            <p>Beschreibung</p>
            <p>Beschreibung</p>
            <p>Beschreibung</p>
            <p>Beschreibung</p>
            <p>Beschreibung</p>
            <p>Beschreibung</p>
            <p>ISBN</p>
          </div>
          <div class="col-2">
            <img src="${bookCover}" class="img-fluid" alt="..." />
          </div>
        </div>
      </div>`;
}

function displayBook(book) {

    const newElem = Object.assign(
        document.createElement(`div`), { id: `divid`, className: `test`, innerHTML: getBookview(book)});
    bookProperties.appendChild(newElem);
    reloadLinks();
}

function getBook(id) {
    for (const book of DATABASE.books)
        if (book.id === id) return book;
    console.log(id)
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
