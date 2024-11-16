let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
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

    for (i = 0; i < myLeads.length; i++) {
        console.log(myLeads)
        ulEl.textContent += myLeads[i] + " "        
    }