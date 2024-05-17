
//import { injectFunctionIntoTab } from "/module.js";
import * as chromeModule from "/module.js";
import * as ghostBrowserModule from "/module2.js";



function collectDivsByClass(className) {
  let divs = document.querySelectorAll('div.' + className);
  let divArray = Array.from(divs);
  return divArray;
}


function collectSearchResults(){
return collectDivsByClass("gsc-webResult.gsc-result");

}

async function exportSearchResults(results){
  return await chrome.runtime.sendMessage(message);}



  function getOrigin() {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}



function extractHostFromUrl(url) {
    // Create a URL object with the given URL
    var urlObject = new URL(url);
    // Return the hostname of the URL object
    return urlObject.hostname;
}





/*chrome.webNavigation.onCompleted.addListener((details) => {
   let host = extractHostFromUrl(details.url);
  if (host == "www.social-searcher.com")
    {console.log("freemason");
  //debugger;
     chromeModule.injectScriptIntoTab(details.tabId,
      ["search-results.js"]);  
     }
    
});*/

/*function getAbsoluteUrlWithoutQueryParams(url) {
  // Create an anchor element
  var parser = document.createElement('a');
  // Set the href attribute to the URL
  parser.href = url;
  // Construct the absolute URL without query parameters
  var absoluteUrlWithoutParams = parser.origin + parser.pathname;
  // Return the absolute URL without query parameters
  return absoluteUrlWithoutParams;
}*/


function getAbsoluteUrlWithoutQueryParams(url) {
  // Create a URL object
  var urlObj = new URL(url);
  // Construct the absolute URL without query parameters
  var absoluteUrlWithoutParams = urlObj.origin + urlObj.pathname;
  // Return the absolute URL without query parameters
  return absoluteUrlWithoutParams;
}



chrome.webNavigation.onCommitted.addListener((details) => {
  //debugger;
  //let host = extractHostFromUrl(details.url);
  let url = getAbsoluteUrlWithoutQueryParams(details.url);
  let causeOfNavigation = details.transitionType;
  //debugger;
 if (url == "https://www.social-searcher.com/facebook-search/" && causeOfNavigation == 'form_submit')
   {//console.log("freemason");
 //debugger;
 
    chromeModule.injectScriptIntoTab(details.tabId,
     ["search-results.js"]);  
    } 
  else {console.log('NO new script was injected');} 
});






const color = '#3aa757';

chrome.runtime.onInstalled.addListener(async () => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  
  //let identities = await collectGhostBrowserIdentities();
  //console.log(identities);
});

chrome.tabs.onCreated.addListener(function(tab) {
  // This function will be called whenever a new tab is created
  console.log("New tab created with URL: " + tab.url);
  // Here you can process the captured URL as needed
});

var tabDetails = { url: "https://example.com",
index: 4, 
active: true, 
identity: "97e4fc196dab4679808cfa9753a9860f"};



chrome.runtime.onMessage.addListener(
  async function(request,sender,sendresponse){
  console.log(request);  
  
    }
);
