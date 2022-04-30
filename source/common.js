const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

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


/*
    Examples:
     <a class="keepLink" data-kl="LINK?book=abc&" href=""></elem>
*/