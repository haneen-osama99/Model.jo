
// step 1
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB
    || window.msIndexedDB;
// step 2
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
// step3 
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

// open our database
//version number = 1
var request = window.indexedDB.open("MyTestDatabase", 1);

// step 4 
var db;
request.onerror = function (event) {
    console.log("error", event.target.result);
};
request.onsuccess = function (event) {
    db = request.result;
    console.log("succes", db);
};

request.onupgradeneeded = function (event) {
    // Save the IDBDatabase interface
    var db = event.target.result;
    // Create an objectStore for this database
    var objectStore = db.createObjectStore("name");
    
};




//   var objectStore = db.createObjectStore("name", { keyPath: "myKey" });