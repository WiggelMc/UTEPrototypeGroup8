const langDict = {
    "German": {
        "#date-locale": "de-DE",
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
    },
    "English": {
        "#date-locale": "en-US",
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
    }
}
const lang = langDict[paramLang] ?? langDict.English;


const localElements = document.getElementsByClassName("local");
const localPropertyElements = document.getElementsByClassName("localP");

function reloadLang() {
    for (const elem of localElements) {
        const str = elem.innerHTML;
        elem.innerHTML = lang[str];
    }

    for (const elem of localPropertyElements) {
        const str = elem.getAttribute(elem.dataset.local);
        elem.setAttribute(elem.dataset.local, lang[str]);
    }
}
reloadLang()

/*
    Examples:
     <elem value="##translation_key" class="localP" data-local="value">
     <elem placeholder="##translation_key" class="localP" data-local="placeholder">
     <elem class="local">##translation_key</elem>
*/