const langDict = {
    "German": {
        "##language": "Deutsch",
        "##submit": "Senden",
        "##abstract": "Beschreibung",
        "##tags": "Schlagwörter",
        "##releaseYear": "Erscheinungsjahr",
        "##availability": "Verfügbarkeit",
        "##availableThere": "Vor Ort lesen",
        "##availableRent": "Ausleihbar",
        "##availableEbook": "E-Book",
    },
    "English": {
        "##language": "English",
        "##submit": "Submit",
        "##abstract": "Abstract",
        "##tags": "Tags",
        "##releaseYear": "Release Year",
        "##availability": "Availability",
        "##availableThere": "Read at Library",
        "##availableRent": "Borrowable",
        "##availableEbook": "E-Book",
    }
}
const lang = langDict[paramLang] ?? langDict.English;


const localElements = document.getElementsByClassName("local");
const localPropertyElements = document.getElementsByClassName("localP");

for (const elem of localElements) {
    const str = elem.innerHTML;
    elem.innerHTML = lang[str];
}

for (const elem of localPropertyElements) {
    const str = elem.getAttribute(elem.dataset.local);
    elem.setAttribute("value", lang[str]);
}

/*
    Examples:
     <elem value="##translation_key" class="localP" data-local="value">
     <elem placeholder="##translation_key" class="localP" data-local="placeholder">
     <elem class="local">##translation_key</elem>
*/