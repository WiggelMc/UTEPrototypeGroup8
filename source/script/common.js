const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let reloadLang = () => {};

let paramLang = urlParams.get("lang");
let paramSearch = urlParams.get("search");
let paramDB = urlParams.get("db");
let paramBook = urlParams.get("book");
let paramUsername = urlParams.get("username");
let paramFilter = urlParams.get("filter");

const formLang = document.getElementsByClassName("formLang");
const formSearch = document.getElementsByClassName("formSearch");
const formDBHS = document.getElementsByClassName("formDBHS");
const formDBEUF = document.getElementsByClassName("formDBEUF");
const formBook = document.getElementsByClassName("formBook");
const formUsername = document.getElementsByClassName("formUsername");
const formFilter = document.getElementsByClassName("formFilter");

const keepLinkElements = document.getElementsByClassName("keepLink");

const accountBar = document.getElementById("accountBar")

const langDict = {
    "German": {
        "#date-locale": "de-DE",
        "#username": "Benutzernamen eingeben",
        "#password": "Passwort eingeben",
        "#logout": "Abmelden?",
        "##language": "Deutsch",
        "##submit": "Senden",
        "##search": "Suchen",
        "##searchTerm": "Suchbegriff",
        "##dbHS": "HS-Bestand",
        "##dbEUF": "EUF-Bestand",
        "##filterReset": "Filter zurücksetzen",
        "##abstract": "Beschreibung",
        "##tags": "Schlagwörter",
        "##releaseYear": "Erscheinungsjahr",
        "##availability": "Verfügbarkeit",
        "##availableThere": "Vor Ort lesen",
        "##availableRent": "Ausleihbar",
        "##availableEbook": "E-Book",
        "##availableNo": "Nicht Verfügbar",
        "##availableYesEbook": "E-Book lesen",
        "##availableYesRent": "Zur Ausleihe",
        "##availableYesntRent": "Ausgeliehen bis ",
        "##availableYesThere": "Verfügbar",
        "##apply": "Übernehmen",
        "##login": "Anmelden",
        "##navSearch": "Suche",
        "##navSuggest": "Anschaffungsvorschlag",
        "##navEvents": "Events",
        "##navMap": "Anfahrt",
        "##navOrd": "Ordnungen",
    },
    "English": {
        "#date-locale": "en-US",
        "#username": "Enter Username",
        "#password": "Enter Password",
        "#logout": "Log Out?",
        "##language": "English",
        "##submit": "Submit",
        "##search": "Search",
        "##searchTerm": "Search Term",
        "##dbHS": "HS Database",
        "##dbEUF": "EUF Database",
        "##filterReset": "Reset Filter",
        "##abstract": "Abstract",
        "##tags": "Tags",
        "##releaseYear": "Release Year",
        "##availability": "Availability",
        "##availableThere": "Read at Library",
        "##availableRent": "Borrowable",
        "##availableEbook": "E-Book",
        "##availableNo": "Not Available",
        "##availableYesEbook": "Read E-Book",
        "##availableYesRent": "Get Book",
        "##availableYesntRent": "Gone until ",
        "##availableYesThere": "Available",
        "##apply": "Apply",
        "##login": "Log In",
        "##navSearch": "Search",
        "##navSuggest": "Suggest Books",
        "##navEvents": "Events",
        "##navMap": "Plan",
        "##navOrd": "Regulations",
    }
}
const lang = langDict[paramLang] ?? langDict.German;

function reloadLinks() {
    for (const elem of keepLinkElements) {
        const path = elem.dataset.kl;
        let newPath = path;
        if (!path.includes("?")) newPath += "?";

        if (path.charAt(newPath.length-1) !== '?' && path.charAt(newPath.length-1) !== '&') newPath += "&";

        if (!path.includes("lang=") && paramLang != undefined) newPath += "lang="+paramLang+"&";
        if (!path.includes("search=") && paramSearch != undefined) newPath += "search="+paramSearch+"&";
        if (!path.includes("db=") && paramDB != undefined) newPath += "db="+paramDB+"&";
        if (!path.includes("book=") && paramBook != undefined) newPath += "book="+paramBook+"&";
        if (!path.includes("username=") && paramUsername != undefined) newPath += "username="+paramUsername+"&";
        if (!path.includes("filter=") && paramFilter != undefined) newPath += "filter="+paramFilter+"&";
        elem.setAttribute("href",newPath);
    }

    setFormValues(formLang, paramLang ?? "");
    //setFormValues(formSearch, paramSearch ?? "");
    setFormValues(formBook, paramBook ?? "");
    setFormValues(formUsername, paramUsername ?? "");
    setFormValues(formFilter, paramFilter ?? "");

    if (paramDB === "HS") activateFormElements(formDBHS);
    if (paramDB === "EUF") activateFormElements(formDBEUF);

}

reloadLinks()

function setFormValues(elements, value) {
    for (const elem of elements) {
        elem.setAttribute("value",value)
    }
}

function activateFormElements(elements) {
    for (const elem of elements) {
        elem.setAttribute("checked",true)
    }
}

function promptLogin() {
    if (isLoggedIn()) {
        let isLogOut = confirm(lang["#logout"]);
        if (isLogOut) {
            paramUsername = "";
            reloadLinks();
            updateAccountBar();
            reloadLang();
        }
    } else {
        let username = prompt(lang["#username"], "") ?? null;
        let password = prompt(lang["#password"], "") ?? null;
        if (username !== null && password !== null) {
            paramUsername = username;
            reloadLinks();
            updateAccountBar();
        }
    }
}

function updateAccountBar() {
    const nameString = isLoggedIn() ? paramUsername : "##login";
    accountBar.innerHTML = nameString;
}
updateAccountBar();

function isLoggedIn() {
    return ((paramUsername ?? "") !== "")
}


/*
    Examples:
     <a class="keepLink" data-kl="LINK?book=abc&" href=""></elem>
*/