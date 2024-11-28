let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
     myLeads = leadsFromLocalStorage 
    render(myLeads)
}

const tabs = [
    {url: "https://ww.linnkedin.com/in/abel-ebenezer-sangmortey/"}
]


function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
      listItems += `
        <li>  
            <a href="${leads[i]}" target="_blank">
                ${leads[i]}
            </a> 
        </li>
    `
        }               
ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function (){
    console.log("double click")
    localStorage.clear()
    myLeads = []
    render(myLeads)
    /* ulEl.innerHTML = "" */
})

    inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)
        console.log(myLeads)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)
    })

    tabBtn.addEventListener("click", function() {
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        render(myLeads)
    })
