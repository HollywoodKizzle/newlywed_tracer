import * as chromeModule from "/module.js";




/*let records = [
    {
        firstName1: "Sarah",
        lastName1: "Eschmann",
        firstName2: "Jared",
        lastName2: "Sossner",
        weddingCity: "Peuria",
        weddingState: "il",
        weddingDate: "03/22/2025",
        registryRecordId: "0489f8e989"
    },
    {firstName1: "Jessica",
          lastName1: "Pope",
          firstName2: "Corley",
          lastName2: "Thaxton",
          weddingCity: "Greenville",
          weddingState: "MS",
          weddingDate: "03/22/2025",
          registryRecordId: "0489f8e94kp"},
    {
        firstName1: "Emma",
        lastName1: "Thompson",
        firstName2: "Michael",
        lastName2: "Johnson",
        weddingCity: "Denver",
        weddingState: "CO",
        weddingDate: "06/15/2024",
        registryRecordId: "a1b2c3d4e5"
    },
    {
        firstName1: "Olivia",
        lastName1: "Brown",
        firstName2: "Ethan",
        lastName2: "Davis",
        weddingCity: "Austin",
        weddingState: "TX",
        weddingDate: "09/12/2025",
        registryRecordId: "f6g7h8i9j0"
    },
    {
        firstName1: "Sophia",
        lastName1: "Wilson",
        firstName2: "James",
        lastName2: "Martinez",
        weddingCity: "Miami",
        weddingState: "FL",
        weddingDate: "12/01/2024",
        registryRecordId: "k1l2m3n4o5"
    },
    {
        firstName1: "Isabella",
        lastName1: "Garcia",
        firstName2: "Alexander",
        lastName2: "Anderson",
        weddingCity: "San Diego",
        weddingState: "CA",
        weddingDate: "05/30/2025",
        registryRecordId: "p6q7r8s9t0"
    },
    {
        firstName1: "Mia",
        lastName1: "Rodriguez",
        firstName2: "Benjamin",
        lastName2: "Thomas",
        weddingCity: "Seattle",
        weddingState: "WA",
        weddingDate: "08/22/2024",
        registryRecordId: "u1v2w3x4y5"
    },
    {
        firstName1: "Amelia",
        lastName1: "Lee",
        firstName2: "William",
        lastName2: "Hernandez",
        weddingCity: "Phoenix",
        weddingState: "AZ",
        weddingDate: "11/05/2025",
        registryRecordId: "z6a7b8c9d0"
    },
    {
        firstName1: "Evelyn",
        lastName1: "Walker",
        firstName2: "Henry",
        lastName2: "Lopez",
        weddingCity: "Portland",
        weddingState: "OR",
        weddingDate: "07/19/2024",
        registryRecordId: "e1f2g3h4i5"
    },
    {
        firstName1: "Abigail",
        lastName1: "Harris",
        firstName2: "Jackson",
        lastName2: "King",
        weddingCity: "Chicago",
        weddingState: "IL",
        weddingDate: "10/14/2025",
        registryRecordId: "j6k7l8m9n0"
    },
    {
        firstName1: "Harper",
        lastName1: "Clark",
        firstName2: "Lucas",
        lastName2: "Perez",
        weddingCity: "Boston",
        weddingState: "MA",
        weddingDate: "04/28/2025",
        registryRecordId: "o1p2q3r4s5"
    }
];*/

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

console.log(records);


function getOrigin() {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}



function extractHostFromUrl(url) {
    // Create a URL object with the given URL
    var urlObject = new URL(url);
    // Return the hostname of the URL object
    return urlObject.hostname;
}




function getAbsoluteUrlWithoutQueryParams(url) {
    // Create a URL object
    var urlObj = new URL(url);
    // Construct the absolute URL without query parameters
    var absoluteUrlWithoutParams = urlObj.origin + urlObj.pathname;
    // Return the absolute URL without query parameters
    return absoluteUrlWithoutParams;
}



chrome.webNavigation.onCommitted.addListener(async (details) => {

    let url = getAbsoluteUrlWithoutQueryParams(details.url);
    let causeOfNavigation = details.transitionType;
    debugger;
    //debugger;
    if (url == "https://www.social-searcher.com/facebook-search/" && causeOfNavigation == 'form_submit') { //console.log("freemason");
        //debugger;

        //chromeModule.injectScriptIntoTab(details.tabId,
        //["jquery-3.7.1.min.js", "dom_script.js", "search-results.js"]);
        let tabId = details.tabId;
        let storageData = await chrome.storage.session.get(tabId.toString());
        //debugger;
        let tabData = storageData[tabId.toString()];
        let updatedTabState = "query submitted";
        tabData.tabState = updatedTabState;
        //tabData.records.shift();
        //tabData.currentRecord = tabData.records[0];
        await chrome.storage.session.set({
            [tabId]: tabData
        });
        //let x = chrome.storage.session.get(null);
        //debugger;

        //debugger;
        /*setTimeout(async ()=>{
    await chrome.tabs.sendMessage(tabId,{description:"identify leads", recordsKey:tab});},5000);*/
    } else {
        console.log('NO new script was injected');
    }
});



chrome.runtime.onInstalled.addListener(async () => {
    chrome.storage.session.setAccessLevel({
        accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS"
    });
});

chrome.runtime.onMessage.addListener(
    async function(message, sender, sendResponse) {
        //debugger; 
        //let message, tabId; 
        //({ message, tabId} = instruction);
        if (message.description == "start") {
            //debugger;
            let processedRecords = [];
            //tab states = "initial state", "query submitted", "results processed"
            let tab = await chrome.tabs.create({
                active: true,
                url: "https://www.social-searcher.com/facebook-search/"
            });
            let tabData = {
                records: records,
                tabState: "initial state",
                currentRecord: records[0]
            };
            await chrome.storage.session.set({
                [tab.id]: tabData
            });
            let x = await chrome.storage.session.get(null);
            //debugger; 
        }
        
        if (message.description == "leads identified") {
            //debugger;
            let tabId = sender.tab.id;
            let storageData = await chrome.storage.session.get(tabId.toString());
            let tabData = storageData[tabId.toString()];
            tabData.records.shift();
            tabData.currentRecord = tabData.records[0];
            await chrome.storage.session.set({
                [tabId]: tabData
            });
            await chrome.tabs.sendMessage(sender.tab.id, {
                description: "perform search query",
                record: tabData.currentRecord
            });

        }

        if (message.description == "awaiting instructions") {
            let tabId = sender.tab.id;
            let storageData = await chrome.storage.session.get(tabId.toString());
            let tabData = storageData[tabId.toString()];
            if (tabData.tabState = "initial state") {
                await chrome.tabs.sendMessage(tabId, {
                    description: "perform search query",
                    record: tabData.currentRecord
                });
            }
            if (tabData.tabState = "query submitted") {
                //await chrome.tabs.sendMessage(tabId,{description: "identify leads", record: tabData.currentRecord});
                setTimeout(async () => {
                    await chrome.tabs.sendMessage(tabId, {
                        description: "identify leads",
                        record: tabData.currentRecord
                    });
                }, 5000);
            }
            //debugger;
            /*let records = storageData[recordsKey];
            storageData = await chrome.storage.session.get("processedRecords");
            let processedRecords = storageData.processedRecords;
            let providedRecord = records.find(record => !processedRecords.includes(record));
            debugger;
            await chrome.tabs.sendMessage(sender.tab.id,{description: "current record", currentRecord: providedRecord});*/
            //let unDiscoveredRecords = records.find(record => record.discovered === false);
            //debugger;

        }
    }
);