let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.clear()
console.log(localStorage.getItem("urLeads"))
function saveLead() {
    console.log("button clicked")
}
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
          listItems += `
            <li>  
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a> 
            </li>
        `
            }               
    ulEl.innerHTML = listItems
}