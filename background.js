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

function getAbsoluteUrlWithoutQueryParams(url) {
    // Create a URL object
    var urlObj = new URL(url);
    // Construct the absolute URL without query parameters
    var absoluteUrlWithoutParams = urlObj.origin + urlObj.pathname;
    // Return the absolute URL without query parameters
    return absoluteUrlWithoutParams;
}

async function getRecordsForTab(tabId){
    let storageData = await chrome.storage.session.get(tabId.toString());
    let tabData = storageData[tabId.toString()];
    //debugger;
    return tabData.records;
}

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //debugger;
        return data;
        //console.log('Data received:', data);
        // Process the data as needed
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  
  return response.json(); // parses JSON response into native JavaScript objects
}

async function startButtonListener(message, sender, sendResponse) {if (message.description == "start") {
             
    let tab = await chrome.tabs.create({
        active: true,
        url: "https://www.social-searcher.com/facebook-search/"
    });

    await waitInterval(4000);
    chromeModule.injectScriptIntoTab(tab.id, ["tabstate.js"]);
}}

async function initializeTab(message, sender, sendResponse) {if (message.description == "tab_state_initialized") {
    const results = await fetchData();
    let data = results.filter(obj => obj.firstName1 !== "" && obj.firstName2 !== "" && obj.lastName1 !== "" && obj.lastName2 !== "");
    let tabData = {
        records: data,
        currentRecord: records[0],
        identifiedLeads: []
    };
    let firstName1, lastName1, firstName2, lastName2;
    ({ firstName1, lastName1, firstName2, lastName2 } = tabData.currentRecord);
    // `'${firstName1} ${lastName1}' AND 'Engaged to ${firstName2} ${lastName2}'`
    // `${firstName1} ${lastName2} is with ${firstName2} ${lastName2}`
    let queryTemplates = [`'${firstName1} ${lastName1}' AND 'Engaged to ${firstName2} ${lastName2}'`,
                          `${firstName1} ${lastName1} is with ${firstName2} ${lastName2}`];
    await chrome.storage.session.set({
        [sender.tab.id]: tabData
    });
    await chrome.tabs.sendMessage(sender.tab.id, {
        description: "new_record",
        currentRecord: tabData.currentRecord,
        queryTemplates: queryTemplates
    });
}}

async function formSubmissionListener(details){
    let url = getAbsoluteUrlWithoutQueryParams(details.url);
    let causeOfNavigation = details.transitionType;
    if (url == "https://www.social-searcher.com/facebook-search/" && causeOfNavigation == 'form_submit') {
        await waitInterval(6000);
        await chrome.tabs.sendMessage(details.tabId, {
            description: "scrape_data"
        });
    }

}

async function identifiedLeadsListener(message, sender, sendResponse){
    if (message.description == "next_record"){
        let identifiedLeads,attemptedQueries,registryRecordId;
        ({ identifiedLeads, attemptedQueries, registryRecordId } = message);
        //debugger;
        if (identifiedLeads.length > 0){ console.log('leads identified');}
        else {console.log('No leads identified')}
        let response = await postData('http://localhost:3000/postData', message);
        //debugger;
         //save these leads with their correspopnding record
         //send the data to the backend server for processing
         let records = await getRecordsForTab(sender.tab.id);
         records.shift();
    if (records.length !=0){
         let updatedTabData = {records: records,currentRecord:records[0]};
         await chrome.storage.session.set({
            [sender.tab.id]: updatedTabData
        });

        let firstName1, lastName1, firstName2, lastName2;
        ({ firstName1, lastName1, firstName2, lastName2 } = updatedTabData.currentRecord);
        let queryTemplates = [`'${firstName1} ${lastName1}' AND 'Engaged to ${firstName2} ${lastName2}'`,
                              `'${firstName1} ${lastName1} is with ${firstName2} ${lastName2}'`];
        
        await chrome.tabs.sendMessage(sender.tab.id, {
            description: "new_record",
            currentRecord: updatedTabData.currentRecord,
            queryTemplates: queryTemplates
        });}
    else { console.log("task complete");}
    }
}





chrome.runtime.onMessage.addListener(startButtonListener);
chrome.runtime.onMessage.addListener(initializeTab);
chrome.webNavigation.onCommitted.addListener(formSubmissionListener);
chrome.runtime.onMessage.addListener(identifiedLeadsListener);