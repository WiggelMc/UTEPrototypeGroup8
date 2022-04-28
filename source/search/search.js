const pathBookview = "../bookview/bookview.html?book=";

const divResults = document.getElementById("results");
const divSearchbar = document.getElementById("search");
const divPreSearch = document.getElementById("preSearch");

// noinspection JSUnresolvedFunction
const fuse = new Fuse(DATABASE.books, DATABASE.fuseOptions);

const filter = {}

const searchResult = fuse.search(paramSearch);

displayOptions(paramSearch);
loadFilter(paramFilter);
displayResult(searchResult);


function displayOptions(searchTerm) {
    divSearchbar.setAttribute("value", searchTerm)
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
    let book = match.item; //TODO

    let text = document.createElement("p");

    let link = document.createElement("a");
    link.innerText = book.title+" "+book.availableEbook+book.availableRent+book.availableThere;
    link.href = pathBookview+book.id;

    text.appendChild(link);
    divResults.appendChild(text);


    /*
    const newElem = Object.assign(
        document.createElement(`div`), { id: `divid`, className: `test`, innerHTML: `
            <p>hello-%Test%-%Test1%</p>
        `
                .replaceAll("%Test%","Injected Term")
                .replaceAll("%Test1%","Walfisch")
        });
    divResults.appendChild(newElem);
    */
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
        divPreSearch.appendChild(text)
    }
}
