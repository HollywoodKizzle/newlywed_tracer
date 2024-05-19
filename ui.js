import * as chromeModule from "/module.js";

document.getElementById('startButton').addEventListener('click', async function() {
    console.log('Start button clicked');
    //instruct the service worker to load the registry data in storage
    let responseFromBackgroundScript = await chrome.runtime.sendMessage("loadRegistryData"); 
    console.log(responseFromBackgroundScript);


    /*let currentTab = await chromeModule.getCurrentTab();
    let tabIdentifier = currentTab.id;
    await injectScriptIntoTab(tabIdentifier, scriptName);*/
    // Add your start functionality here
        

});

document.getElementById('stopButton').addEventListener('click', function() {
    console.log('Stop button clicked');
    // Add your stop functionality here
});
