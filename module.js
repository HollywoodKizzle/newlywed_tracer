//The following code assumes its runtime provides access the chrome extension API


export function injectFunctionIntoTab(tabIdentifier, injectedFunction) {
    // Execute the script in the specified tab
    //chrome.tabs.executeScript(tabId, { code: injectedCode });
    chrome.scripting.executeScript({
      target : {tabId : tabIdentifier},
      func : injectedFunction,
    });
  }

  
  export function injectScriptIntoTab(tabIdentifier, scriptName) {
    // Execute the script in the specified tab
    //chrome.tabs.executeScript(tabId, { code: injectedCode });
    chrome.scripting.executeScript({
      target : {tabId : tabIdentifier},
      files : scriptName,
    });
  }



export  async function collectAllTabObjects() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({}, function(tabs) {
            let collectedTabObjects = [];
            tabs.forEach(function(tab){
                        collectedTabObjects.push(tab);});
            
            resolve(collectedTabObjects);
        });
    });
  }
  

export  async function collectAllTabIDs() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({}, function(tabs) {
            const tabIDs = tabs.map(tab => tab.id);
            resolve(tabIDs);
        });
    });
  }

  //message == any JSON-ifiable object
  export  async function messageBackgroundScript(message){
    return await chrome.runtime.sendMessage(message);

  }
  

export  async function getCurrentTab() {
    let queryOptions = { active: true}; 
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    debugger;
    return tab;
  }