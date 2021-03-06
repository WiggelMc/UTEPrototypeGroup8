const localElements = document.getElementsByClassName("local");
const localPropertyElements = document.getElementsByClassName("localP");

reloadLang = () => {
    for (const elem of localElements) {
        const str = elem.innerHTML;
        if (lang[str] !== undefined) elem.innerHTML = lang[str];
    }

    for (const elem of localPropertyElements) {
        const str = elem.getAttribute(elem.dataset.local);
        if (lang[str] !== undefined) elem.setAttribute(elem.dataset.local, lang[str]);
    }
}
reloadLang()

/*
    Examples:
     <elem value="##translation_key" class="localP" data-local="value">
     <elem placeholder="##translation_key" class="localP" data-local="placeholder">
     <elem class="local">##translation_key</elem>
*/