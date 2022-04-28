const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const paramLang = urlParams.get("lang");
const paramSearch = urlParams.get("search");
const paramDB = urlParams.get("db");
const paramBook = urlParams.get("book");
const paramUsername = urlParams.get("username");
const paramFilter = urlParams.get("filter");

const divSearchLang = document.getElementById("langSearch");

divSearchLang.setAttribute("value",paramLang)