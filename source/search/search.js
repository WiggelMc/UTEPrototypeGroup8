const pathBookview = "../bookview/bookview.html?book=";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const paramSearch = urlParams.get("search");

const divResults = document.getElementById("results");
const divSearchbar = document.getElementById("search");

// noinspection JSUnresolvedFunction
const fuse = new Fuse(DATABASE.books, DATABASE.fuseOptions);

const searchResult = fuse.search(paramSearch);

displayOptions(paramSearch);
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
    return true; //TODO
}

function displayMatch(match) {
    let book = match.item; //TODO

    let text = document.createElement("p");

    let link = document.createElement("a");
    link.innerText = book.name;
    link.href = pathBookview+book.name;

    text.appendChild(link);
    divResults.appendChild(text);
}
