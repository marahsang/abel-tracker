let myLeads = []
const inputEl = document.getElementById("input-el")
function saveLead() {
    console.log("button clicked")
}

const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
    inputBtn.addEventListener("click", function saveLead() {
        myLeads.push(inputEl.value)
        console.log(myLeads)
    })