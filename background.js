
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


chrome.webNavigation.onCompleted.addListener((details) => {
  //debugger;
   console.log(details.timeStamp);
   chromeModule.injectFunctionIntoTab(details.tabId, 
    async ()=>{let results = collectSearchResults();
         //console.log(results);
         await exportSearchResults(results);});

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
  let collectedTabs = await chromeModule.collectAllTabIDs();
  //let tabId = collectedTabs[2];
  let tabId = sender.tab.id;
  chromeModule.injectFunctionIntoTab(tabId, ()=>{console.log('this tab has been injected with code!!!');});
  //let identities = await ghostBrowserModule.collectGhostBrowserIdentities();
  //console.log(identities);
  //ghostBrowserModule.openNewTab(tabDetails,(newTabId)=>{console.log(newTabId)});
  
    }
);
