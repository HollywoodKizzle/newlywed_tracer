import * as chromeModule from "/module.js";


export async function collectGhostBrowserIdentities(){
    let collectedTabs = await chromeModule.collectAllTabObjects();
    let collectedIdentities = [];
    collectedTabs.forEach(function(tab) {
      collectedIdentities.push(tab.ghostPublicAPI.identity_id); 
  });
    return collectedIdentities;
  }

  
  //tabDetails =={url:urlLoadedInNewTab,index:tabPosition,active:isTheCurrentTab,identity:identityId}
//callback == function(newTabId){//do something here}
export async function openNewTab(tabDetails,callback){
    return await chrome.ghostPublicAPI.openTab(tabDetails,callback);

}