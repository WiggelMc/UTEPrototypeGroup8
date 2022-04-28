const langDict = {
    "German": {
        "##test1": "Deutsch",
        "##submit": "Senden",
        "##abstract": "Beschreibung",
        "##tags": "Schlagwörter",
        "##releaseYear": "Erscheinungsjahr",
    },
    "English": {
        "##test1": "English",
        "##submit": "Submit",
        "##abstract": "Abstract",
        "##tags": "Tags",
        "##releaseYear": "Release Year",
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