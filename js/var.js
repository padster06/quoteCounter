var itemDiv;
var name;
var items = [];
var totalActual = 0;
var totalQuoted = 0;
var submit;
const localStorageListKey = 'itemList';
var itemList = JSON.parse(localStorage.getItem(localStorageListKey)) || [];
var oldTotalActual;
var show;
var oldTotalQuoted;
var dirs = [];
