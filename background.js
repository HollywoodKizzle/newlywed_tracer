
import * as chromeModule from "/module.js";




let records = [
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
];

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



chrome.webNavigation.onCommitted.addListener((details) => {
  
  let url = getAbsoluteUrlWithoutQueryParams(details.url);
  let causeOfNavigation = details.transitionType;
  //debugger;
  if (url == "https://www.social-searcher.com/facebook-search/" && causeOfNavigation == 'form_submit') {//console.log("freemason");
    //debugger;

    chromeModule.injectScriptIntoTab(details.tabId,
      ["jquery-3.7.1.min.js", "dom_script.js", "search-results.js"]);
  }
  else { console.log('NO new script was injected'); }
});



chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.session.setAccessLevel({accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS"});
});

chrome.runtime.onMessage.addListener(
  async function (instruction, sender,sendResponse){
   //debugger; 
   //let message, tabId; 
   //({ message, tabId} = instruction);
  if (instruction == "loadRegistryData") { 
    //debugger;
    let tab = await chrome.tabs.create({active: true, url: "https://www.social-searcher.com/facebook-search/"});
     await chrome.storage.session.set({ registryRecords: records, tabIdentifier: tab.id }); 
     await chrome.tabs.sendMessage(tab.id, message);
    }

}
);
