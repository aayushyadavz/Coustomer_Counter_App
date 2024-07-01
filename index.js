// Selecting span & h2 element
const saveEl = document.querySelector("#save-el span");
const countEl = document.getElementById("count-el");
// Setting count value as 0
let count = 0;

// function for incrementing count on every time we click increment btn
function increment() {
    count += 1;
    countEl.textContent = count;
}

// function for saving the previous entries on clicking save btn 
function save() {
    let countStr = `${count} - `;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    saveEntries();
}

// function for clearing previous entries on clicking clear btn
function clearEntries(){
    saveEl.textContent = ""; 
    saveEntries();
}

// function for saving and loading task
function saveEntries() {
    localStorage.setItem("entries", saveEl.textContent);
}

function loadEntries() {
    saveEl.textContent = localStorage.getItem("entries");
}
loadEntries();