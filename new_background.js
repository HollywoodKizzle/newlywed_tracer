import * as chromeModule from "/module.js";




let records = [{
    firstName1: "Sarah",
    lastName1: "Eschmann",
    firstName2: "Jared",
    lastName2: "Sossner",
    weddingCity: "Peuria",
    weddingState: "il",
    weddingDate: "03/22/2025",
    registryRecordId: "0489f8e989",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Jessica",
    lastName1: "Pope",
    firstName2: "Corley",
    lastName2: "Thaxton",
    weddingCity: "Greenville",
    weddingState: "MS",
    weddingDate: "03/22/2025",
    registryRecordId: "0489f8e94kp",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Emma",
    lastName1: "Thompson",
    firstName2: "Michael",
    lastName2: "Johnson",
    weddingCity: "Denver",
    weddingState: "CO",
    weddingDate: "06/15/2024",
    registryRecordId: "a1b2c3d4e5",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Olivia",
    lastName1: "Brown",
    firstName2: "Ethan",
    lastName2: "Davis",
    weddingCity: "Austin",
    weddingState: "TX",
    weddingDate: "09/12/2025",
    registryRecordId: "f6g7h8i9j0",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Sophia",
    lastName1: "Wilson",
    firstName2: "James",
    lastName2: "Martinez",
    weddingCity: "Miami",
    weddingState: "FL",
    weddingDate: "12/01/2024",
    registryRecordId: "k1l2m3n4o5",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Isabella",
    lastName1: "Garcia",
    firstName2: "Alexander",
    lastName2: "Anderson",
    weddingCity: "San Diego",
    weddingState: "CA",
    weddingDate: "05/30/2025",
    registryRecordId: "p6q7r8s9t0",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Mia",
    lastName1: "Rodriguez",
    firstName2: "Benjamin",
    lastName2: "Thomas",
    weddingCity: "Seattle",
    weddingState: "WA",
    weddingDate: "08/22/2024",
    registryRecordId: "u1v2w3x4y5",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Amelia",
    lastName1: "Lee",
    firstName2: "William",
    lastName2: "Hernandez",
    weddingCity: "Phoenix",
    weddingState: "AZ",
    weddingDate: "11/05/2025",
    registryRecordId: "z6a7b8c9d0",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Evelyn",
    lastName1: "Walker",
    firstName2: "Henry",
    lastName2: "Lopez",
    weddingCity: "Portland",
    weddingState: "OR",
    weddingDate: "07/19/2024",
    registryRecordId: "e1f2g3h4i5",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Abigail",
    lastName1: "Harris",
    firstName2: "Jackson",
    lastName2: "King",
    weddingCity: "Chicago",
    weddingState: "IL",
    weddingDate: "10/14/2025",
    registryRecordId: "j6k7l8m9n0",
    url: "n\\a",
    discovered: false
},
{
    firstName1: "Harper",
    lastName1: "Clark",
    firstName2: "Lucas",
    lastName2: "Perez",
    weddingCity: "Boston",
    weddingState: "MA",
    weddingDate: "04/28/2025",
    registryRecordId: "o1p2q3r4s5",
    url: "n\\a",
    discovered: false
}
];





chrome.runtime.onInstalled.addListener(async () => {
    chrome.storage.session.setAccessLevel({
        accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS"
    });
});


function waitInterval(interval){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},interval)
    })
}


async function startButtonListener(message, sender, sendResponse) {if (message.description == "start") {
             
    let tab = await chrome.tabs.create({
        active: true,
        url: "https://www.social-searcher.com/facebook-search/"
    });
    let tabData = {
        records: records,
        currentRecord: records[0]
    };
    await waitInterval(4000);
    chromeModule.injectScriptIntoTab(tab.id, ["tabstate.js"]);
}}

async function initializeTab(message, sender, sendResponse) {if (message.description == "tab_state_initialized") {
    //await waitInterval(4000);         
    
    let tabData = {
        records: records,
        currentRecord: records[0]
    };
    await chrome.storage.session.set({
        [sender.tabId]: tabData
    });
    await chrome.tabs.sendMessage(sender.tab.id, {
        description: "current_record",
        currentRecord: tabData.currentRecord
    });
}}




chrome.runtime.onMessage.addListener(startButtonListener);
chrome.runtime.onMessage.addListener(initializeTab);