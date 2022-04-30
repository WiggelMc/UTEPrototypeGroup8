const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let paramLang = urlParams.get("lang");
let paramSearch = urlParams.get("search");
let paramDB = urlParams.get("db");
let paramBook = urlParams.get("book");
let paramUsername = urlParams.get("username");
let paramFilter = urlParams.get("filter");

const divSearchLang = document.getElementById("langSearch");

divSearchLang.setAttribute("value",paramLang)

const keepLinkElements = document.getElementsByClassName("keepLink");

function reloadLinks() {
    for (const elem of keepLinkElements) {
        const path = elem.dataset.kl;
        let newPath = path;
        if (!path.includes("?")) newPath += "?";
        if (!path.includes("lang=") && paramLang != undefined) newPath += "lang="+paramLang+"&"
        if (!path.includes("search=") && paramSearch != undefined) newPath += "search="+paramSearch+"&"
        if (!path.includes("db=") && paramDB != undefined) newPath += "db="+paramDB+"&"
        if (!path.includes("book=") && paramBook != undefined) newPath += "book="+paramBook+"&"
        if (!path.includes("username=") && paramUsername != undefined) newPath += "username="+paramUsername+"&"
        if (!path.includes("filter=") && paramFilter != undefined) newPath += "filter="+paramFilter+"&"
        console.log(path)
        elem.setAttribute("href",newPath);
    }
}

reloadLinks()


/*
    Examples:
     <a class="keepLink" data-kl="LINK?book=abc&" href=""></elem>
*/