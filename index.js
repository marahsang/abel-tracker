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
        inputEl.value = ""
        renderLeads()
    })

    function renderLeads() {
        let listItems = ""
        for (i = 0; i < myLeads.length; i++) {
            console.log(myLeads)
          //  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"        
          //const li = document.createElement("li")
          //li.textContent = myLeads[i]
          //ulEl.append(li)
          listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}