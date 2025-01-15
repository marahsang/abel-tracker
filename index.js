let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    ulEl.innerHTML = leads
        .map(
            (lead) => `
        <li>
            <a href="${lead}" target="_blank">
                ${lead}
            </a>
        </li>`
        )
        .join("");
}

inputBtn.addEventListener("click", function () {
    const lead = inputEl.value.trim();
    if (lead) {
        myLeads.push(lead);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        inputEl.value = "";
        render(myLeads);
    } else {
        alert("Please enter a valid input!");
    }
});

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0].url;
        if (!myLeads.includes(activeTab)) {
            myLeads.push(activeTab);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        }
    });
});

deleteBtn.addEventListener("dblclick", function () {
    if (confirm("Are you sure you want to delete all leads?")) {
        localStorage.clear();
        myLeads = [];
        render(myLeads);
    }
});