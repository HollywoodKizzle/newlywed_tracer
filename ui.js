import * as chromeModule from "/module.js";

document.getElementById('startButton').addEventListener('click', async function() {
    //instruct the service worker to load the registry data in storage
    let responseFromBackgroundScript = await chrome.runtime.sendMessage("loadRegistryData"); 
    if (responseFromBackgroundScript == "data loaded") {  
        debugger;
        let storageData = await chrome.storage.session.get("registryRecords");
        console.log(storageData);
}


    /*let currentTab = await chromeModule.getCurrentTab();
    let tabIdentifier = currentTab.id;
    await injectScriptIntoTab(tabIdentifier, scriptName);*/
    // Add your start functionality here
        

});

document.getElementById('stopButton').addEventListener('click', function() {
    console.log('Stop button clicked');
    // Add your stop functionality here
});
