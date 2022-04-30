const pathBookview = "../bookview/bookview.html?book=";

function getBookElement(match) {

    //CODE HERE
    const item = match.item;

    const bookId = item.id;

    const bookCover = item.cover ?? "../../The Art.jpeg";

    const title = shortenString(item.title, 60);
    const authors = shortenArray(item.authors,3).join("<br>");
    const abstract = shortenString(item.abstract?.join(", "), 140);
    const tags = shortenString(item.tags?.join(", "), 100);
    const displayReleaseYear = (item.releaseYear !== undefined);
    const releaseYear = item.releaseYear;

    const availableEbook = item.availableEbook;
    const availableRent = item.availableRent;
    const rentDelay = item.rentDelay;
    const availableThere = item.availableThere;

    const rating = Number(item.rating);

    return `
    <a class="keepLink" data-kl="../bookview/bookview.html?book=${bookId}" href="">
    <div class="row my-2 mx-1 bg-success p-2 bg-opacity-50">
      <div class="col-2">
        <img src="${bookCover}" class="img-fluid" alt="..." />
      </div>
      <div class="col-2">
        <p class="card-title text-center fw-bold my-2">
          ${title}
        </p>
        <p class="text-center my-5">
            ${authors}
        </p>
        <div class="text-center my-5">
          <span class="fa fa-star ${rating >= 1 ? "checked" : ""}"></span>
          <span class="fa fa-star ${rating >= 2 ? "checked" : ""}"></span>
          <span class="fa fa-star ${rating >= 3 ? "checked" : ""}"></span>
          <span class="fa fa-star ${rating >= 4 ? "checked" : ""}"></span>
          <span class="fa fa-star ${rating >= 5 ? "checked" : ""}"></span>
        </div>
      </div>
      <div class="col-4">
        <p class="mt-5">
          <span class="local">##abstract</span>: ${abstract}
        </p>
        <p class="mt-4"><span class="local">##tags</span>: ${tags}</p>
        <p class="mt-4 ${displayReleaseYear ? "" : "hide"}"><span class="local">##releaseYear</span>: ${releaseYear}</p>
      </div>
      <div class="col-4">
        <div class="text-end">
          <span class="fa fa-star"></span>
        </div>
        <p class="mt-4"><span class="local">##availability</span>:</p>
        <div class="py-2">
          <span
            class="rounded-pill px-2 text-white local availability ${availableThere == 0 ? "avNo" : "avYes"}"
            >##availableThere</span
          >
          <span
            class="rounded-pill px-2 text-white local availability ${availableRent == 0 ? "avNo" : availableRent == 1 ? "avYes" : "avYesnt"}"
            >##availableRent</span
          >
          <span
            class="rounded-pill px-2 text-white local availability ${availableEbook == 0 ? "avNo" : "avYes"}"
            >##availableEbook</span
          >
        </div>
      </div>
    </div>
    </a>
    `
}

const divResults = document.getElementById("results");
const divSearchbar = document.getElementById("search");
const divPreSearch = document.getElementById("preSearch");

// noinspection JSUnresolvedFunction
const fuse = new Fuse(DATABASE.books, DATABASE.fuseOptions);

const filter = {}

const searchResult = fuse.search(paramSearch ?? "");

displayOptions(paramSearch);
loadFilter(paramFilter);
displayResult(searchResult);
reloadLinks();


function displayOptions(searchTerm) {
    divSearchbar.setAttribute("value", searchTerm ?? "")
}

function displayResult(result) {
    if (result.length === 0) {
        //TODO
    }

    for (const match of result) {
        if (filterMatch(match)) displayMatch(match);
    }
}


function filterMatch(match) {
    const item = match.item;
    // noinspection EqualityComparisonWithCoercionJS
    if ((filter.yearA != 0 && item.releaseYear <= filter.yearA)) return false;
    // noinspection EqualityComparisonWithCoercionJS
    if ((filter.yearB != 0 && item.releaseYear >= filter.yearB)) return false;

    if (item.availableEbook < filter.availableEbook) return false;
    if (item.availableRent < filter.availableRent) return false;
    if (item.availableThere < filter.availableThere) return false;

    return true;
}

function displayMatch(match) {
    const newElem = Object.assign(
        document.createElement(`div`),
        { id: `divid`,
            className: `test`,
            innerHTML: getBookElement(match)
        }
    );
    divResults.appendChild(newElem);
}

function loadFilter(filterString) {
    filter.yearA = filterString?.substr(0,4);
    filter.yearB = filterString?.substr(4,4);
    filter.availableEbook = filterString?.substr(8,1);
    filter.availableRent = filterString?.substr(9,1);
    filter.availableThere = filterString?.substr(10,1);
}

function saveFilter() {
    //TODO
}

function preSearch(e) {
    // noinspection JSUnresolvedFunction
    const fuse2 = new Fuse(DATABASE.books, DATABASE.fuseOptions);
    const preResult = fuse2.search(e.target.value);

    divPreSearch.innerHTML = "";
    for (let match of preResult) {
        if (!filterMatch(match)) continue;
        let text = document.createElement("p");
        text.innerText = match.item.title;
        divPreSearch.appendChild(text);
    }
}

function shortenString(str,maxLength) {
    if (str === undefined || str === null) return "-";
    if (str?.length <= maxLength) return str;
    return str?.substr(0,maxLength-3)+"...";
}

shortenArray([1,2,3], 1)

function shortenArray(arr, maxLength) {
    if (arr === undefined || arr === null) return ["-"];
    if (arr?.length <= maxLength) return arr;
    const newArr = arr.slice(0,maxLength-1);
    newArr.push("...");
    return newArr;
}
