const ebookLink = "https://www.loremipsum.de/";

const bookProperties = document.getElementById("bookProperties");

const activeBook = getBook(paramBook);
if (activeBook) displayBook(activeBook);


function getBookview(item) {

    const bookCover = item.cover ?? "../../The Art.jpeg";

    const title = item.title;
    const authors = item.authors?.join("<br>") ?? "-";
    const abstract = `<div class="bookToRight">
    ${item.abstract?.join(", ") ?? "-"}
    </div>`;
    const tags = `<div class="bookToRight">
    ${item.tags?.map(
        tag => {
            return `<a class="keepLink tagLink" data-kl="search.html?search=${tag}" href="">${tag}</a>`
        }
    ).join(", ") ?? "-"}
    </div>`;
    const releaseYear = `<div class="bookToRight">
    ${item.releaseYear ?? "-"}
    </div>`;

    const series = `<div class="bookToRight">
    ${item.series !== undefined ? `<a class="keepLink tagLink" data-kl="search.html?search=${item.series}" href="">${item.series}</a>` : "-"}
    </div>`;

    const publicationInfo = `<div class="bookToRight">
    ${item.publicationInfo ?? "-"}
    </div>`;

    const isbn = `<div class="bookToRight">
    ${item.isbn?.join(", ") ?? "-"}
    </div>`;

    const notes = `<div class="bookToRight">
    ${item.notes?.join(", ") ?? "-"}
    </div>`;

    const availableEbook = item.availableEbook;
    const availableRent = item.availableRent;

    const rentDelay = Number(item.rentDelay);
    const now = new Date(Date.now());
    const rentFinal = new Date(now.getFullYear(),now.getMonth(),now.getDate()+rentDelay);
    const formattedDate = rentFinal.toLocaleDateString(lang["#date-locale"]);

    const availableThere = item.availableThere;

    return `<div class="container bg-secondary bg-opacity-25 pt-2">
        <span class="bg-success py-1 px-3 text-center rounded">
          <a class="keepLink text-white" data-kl="../pages/search.html" href="">&larr; <span class="local">##back</span></a>
        </span>
        <h1 class="text-center fw-bold">${title}</h1>
        <p class="text-center fw-bold">${authors}</p>
        <p class="ps-5"><span class="local">##availability</span>:</p>
        <div class="row ps-5">
          <div class="col-lg-3 col-md-4 col-sm-12">
            <p class="availability ${availableThere == 0 ? "avNo" : "avYes"} py-1 px-3 text-center text-white rounded local">##availableThere</p>
            <p class="${availableThere == 0 ? "" : "bg-white hoverArrow"} py-1 px-3 text-center rounded local" onclick="${availableThere == 0 ? "" : "avbThere()"}">${availableThere == 0 ? "##availableNo" : "##availableYesThere"}</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <p class="availability ${availableRent == 0 ? "avNo" : availableRent == 1 ? "avYes" : "avYesnt"} py-1 px-3 text-center text-white rounded local">##availableRent</p>
            <p class="${availableRent == 0 ? "" : "bg-white hoverArrow"} py-1 px-3 text-center rounded" onclick="${availableRent == 0 ? "" : availableRent == 1 ? "avbRent()" : "avbRentYesnt()"}"><span class="local">${availableRent == 0 ? "##availableNo" : availableRent == 1 ? "##availableYesRent" : "##availableYesntRent"}</span>${availableRent == 0 ? "" : availableRent == 1 ? "" : formattedDate}</p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <p class="availability ${availableEbook == 0 ? "avNo" : "avYes"} py-1 px-3 text-center text-white rounded local">##availableEbook</p>
            ${availableEbook == 0 ? "" : "<a href='"+ebookLink+"' target='_blank'>"}
            <p class="${availableEbook == 0 ? "" : "bg-white hoverArrow"} py-1 px-3 text-center rounded local">${availableEbook == 0 ? "##availableNo" : "##availableYesEbook"}</p>
            ${availableEbook == 0 ? "" : "</a>"}
          </div>
        </div>
        <div class="row mt-5 ps-5 py-3">
          <div class="col-10">
            <p class="mt-4">
                <span class="local resultCatTitle">##tags</span>:<br> ${tags}
            </p>
            <p class="mt-4">
                <span class="local resultCatTitle">##releaseYear</span>:<br> ${releaseYear}
            </p>
            
            <p class="mt-5">
              <span class="local resultCatTitle">##abstract</span>:<br> ${abstract}
            </p>
            
            <p class="mt-4">
                <span class="local resultCatTitle">##notes</span>:<br> ${notes}
            </p>
            <p class="mt-4">
                <span class="local resultCatTitle">##publicationInfo</span>:<br> ${publicationInfo}
            </p>
     
            <p class="mt-4">
                <span class="local resultCatTitle">##series</span>:<br> ${series}
            </p>
            <p class="mt-4">
                <span class="local resultCatTitle">##isbn</span>:<br> ${isbn}
            </p>
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

function avbThere() {
    alert(lang["##avbThere"]);
}

function avbRent() {
    if (isLoggedIn()) {
        confirm(lang["##avbRent"]);
    } else {
        alert(lang["##mustLogin"]);
    }
}

function avbRentYesnt() {
    if (isLoggedIn()) {
        confirm(lang["##avbRentYesnt"]);
    } else {
        alert(lang["##mustLogin"]);
    }
}