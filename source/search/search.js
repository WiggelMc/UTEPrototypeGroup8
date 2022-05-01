const pathBookview = "../bookview/bookview.html?book=";

function getBookElement(match) {
  //CODE HERE
  const item = match.item;

  const bookId = item.id;

  const bookCover = item.cover ?? "../../The Art.jpeg";

  const title = shortenString(item.title, 120);
  const authors = shortenArray(item.authors, 3).join("<br>");
  const abstract = shortenString(item.abstract?.join(", "), 140);
  const tags = shortenString(item.tags?.join(", "), 100);
  const displayReleaseYear = item.releaseYear !== undefined;
  const releaseYear = item.releaseYear;

  const availableEbook = item.availableEbook;
  const availableRent = item.availableRent;
  const rentDelay = item.rentDelay;
  const availableThere = item.availableThere;

  const rating = Number(item.rating);

  return `
  <a class="keepLink" data-kl="../bookview/bookview.html?book=${bookId}" href="">
    <div class="row my-2 mx-1 bg-success p-2 bg-opacity-50">
      <div class="col-lg-2">
        <img src="${bookCover}" class="img-fluid" alt="..." />
      </div>
      <div class="col-lg-10">
        <div class="row ">
          <p class="card-title  fw-bold my-2">
          ${title}
          </p>
        </div>
        <div class="row">
          <div class="col-lg-3"> 
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
          <div class="col-lg-3">
            <p class="mt-5">
              <span class="local">##abstract</span>: ${abstract}
            </p>
            <p class="mt-4"><span class="local">##tags</span>: ${tags}</p>
            <p class="mt-4 ${
              displayReleaseYear ? "" : "hide"
            }"><span class="local">##releaseYear</span>: ${releaseYear}</p>
          </div>
          <div class="col-lg-6">
            <div class="text-end">
              <span class="fa fa-star"></span>
            </div>
            <p class="mt-4"><span class="local">##availability</span>:</p>
            <div class="py-2 row">
              <span
                class="col-lg-4 my-1 text-center rounded-pill text-white local availability ${
                  availableThere == 0 ? "avNo" : "avYes"
                }"
                >##availableThere</span
              >
              <span
                class="col-lg-4 my-1  text-center rounded-pill text-white local availability ${
                  availableRent == 0
                    ? "avNo"
                    : availableRent == 1
                    ? "avYes"
                    : "avYesnt"
                }"
                >##availableRent</span
              >
              <span
                class="col-lg-4 my-1 text-center rounded-pill text-white local availability ${
                  availableEbook == 0 ? "avNo" : "avYes"
                }"
                >##availableEbook</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
    `;
}

const divResults = document.getElementById("results");
const divSearchbar = document.getElementById("search");
const divPreSearch = document.getElementById("preSearch");

const divSearchForm = document.getElementById("searchForm");

const filterAvEbook = document.getElementById("filterAvEbook");
const filterAvRent = document.getElementById("filterAvRent");
const filterAvThere = document.getElementById("filterAvThere");
const filterYearA = document.getElementById("filterYearA");
const filterYearB = document.getElementById("filterYearB");

const filterRESET = document.getElementById("resetFilter");

// noinspection JSUnresolvedFunction
const fuse = new Fuse(DATABASE.books, DATABASE.fuseOptions);

const filter = {};

let searchResult = [];
if (divResults !== null) {
    searchResult = fuse.search(paramSearch ?? "").filter(x => filterMatchDB(x));

    if (searchResult.length < 3) {
        const newOptions = JSON.parse(JSON.stringify(DATABASE.fuseOptions));
        newOptions.threshold = 1.0;
        // noinspection JSUnresolvedFunction
        const newFuse = new Fuse(DATABASE.books, newOptions);
        const tempResult = newFuse.search(paramSearch ?? "").filter(x => filterMatchDB(x));
        searchResult = tempResult.slice(0,Math.min(5,tempResult.length));
    }
}

loadFilter(paramFilter);
displayOptions(paramSearch);

if (divResults !== null) {
    displayResult(searchResult);
}

reloadLinks();

function displayOptions(searchTerm) {
  divSearchbar.setAttribute("value", searchTerm ?? "");

  filterAvEbook.checked = filter.availableEbook > 0;
  filterAvRent.checked = filter.availableRent > 0;
  filterAvThere.checked = filter.availableThere > 0;
  if (filter.yearA > 0) filterYearA.value = filter.yearA;
  if (filter.yearB > 0) filterYearB.value = filter.yearB;
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
  if (filter.yearA != 0 && item.releaseYear <= filter.yearA) return false;
  // noinspection EqualityComparisonWithCoercionJS
  if (filter.yearB != 0 && item.releaseYear >= filter.yearB) return false;

  if (item.availableEbook < filter.availableEbook) return false;
  if (item.availableRent < filter.availableRent) return false;
  if (item.availableThere < filter.availableThere) return false;

  return true;
}

function filterMatchDB(match) {
    const item = match.item;
    if (paramDB === "HS") {
        return (item.database != 1);
    } else if (paramDB === "EUF") {
        return (item.database != -1);
    }
    return false;
}

function displayMatch(match) {
  const newElem = Object.assign(document.createElement(`div`), {
    id: `divid`,
    className: `test`,
    innerHTML: getBookElement(match),
  });
  divResults.appendChild(newElem);
}

function loadFilter(filterString) {
  filter.yearA = filterString?.substr(0, 4);
  filter.yearB = filterString?.substr(4, 4);
  filter.availableEbook = filterString?.substr(8, 1);
  filter.availableRent = filterString?.substr(9, 1);
  filter.availableThere = filterString?.substr(10, 1);

  if (filterString == 0) {
      filterRESET.classList.add("hide");
  } else {
      filterRESET.classList.remove("hide");
  }

}

function saveFilter() {
    let yearA = Number(filterYearA.value);
    if (isNaN(yearA) || yearA < 0 || yearA > 9999) yearA = 0;
    let yearB = Number(filterYearB.value);
    if (isNaN(yearB) || yearB < 0 || yearB > 9999) yearB = 0;

    if (yearA > yearB && yearA != 0 && yearB != 0) {
        let tmp = yearA;
        yearA = yearB;
        yearB = tmp;
    }

    let filterString = pad(yearA,4) + pad(yearB, 4) + (+filterAvEbook.checked) + (+filterAvRent.checked) + (+filterAvThere.checked)
    paramFilter = filterString;
    loadFilter(paramFilter);
    reloadLinks();

    submitSearch();
}

function resetFilter() {
    paramFilter = "00000000000";
    loadFilter(paramFilter);
    reloadLinks();
    submitSearch();
}

function pad(num, size) {
    let s = "000000000" + num;
    return s.substr(s.length-size);
}

function preSearch(e) {
  // noinspection JSUnresolvedFunction
  const fuse2 = new Fuse(DATABASE.books, DATABASE.fuseOptions);
  const preResult = fuse2.search(e.target.value).filter(x => filterMatchDB(x));

    divPreSearch.innerHTML = "";
    let resultCount = 0;
    for (let match of preResult) {
        if (!filterMatch(match)) continue;
        resultCount++;
        if (resultCount > 8) break;

        let text = document.createElement("input");
        text.setAttribute("type", "button")
        text.setAttribute("onclick",`preSearchClick('${match.item.title}')`)
        text.setAttribute("value", match.item.title);
        divPreSearch.appendChild(text);
    }
}

function preSearchClick(term) {
    divSearchbar.value = term;
    submitSearch();
}

function submitSearch() {
    divSearchForm.reportValidity();
    if (divSearchForm.checkValidity()) {
        divSearchForm.submit();
    }
}

function changeDB(db) {
    if (paramDB !== db) {
        paramDB=db;
        reloadLinks();
        divSearchForm.submit();
    }
}

function shortenString(str,maxLength) {
    if (str === undefined || str === null) return "-";
    if (str?.length <= maxLength) return str;
    return str?.substr(0,maxLength-3)+"...";
}

function shortenArray(arr, maxLength) {
  if (arr === undefined || arr === null) return ["-"];
  if (arr?.length <= maxLength) return arr;
  const newArr = arr.slice(0, maxLength - 1);
  newArr.push("...");
  return newArr;
}
