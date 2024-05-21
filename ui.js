import * as chromeModule from "/module.js";

document.getElementById('startButton').addEventListener('click', async function() {
    //open new tab and get its id
    //send the id as a accompanying instruction to the service worker
    await chrome.storage.session.clear();
    //let tab = await chrome.tabs.create({active: true, url: "https://www.social-searcher.com/facebook-search/"});
    //let tabIdenitifier = tab.id;
    let tabIdenitifier = 3;
    //let instruction = { message: "loadRegistryData", tabId: tabIdenitifier};
    let instruction = "loadRegistryData";
    //debugger;
    await chrome.runtime.sendMessage(instruction);
    //let storageData = await chrome.storage.session.get("registryRecords");
    //debugger;
    /*if (responseFromBackgroundScript == "data loaded") {  
        //debugger;
        let storageData = await chrome.storage.session.get("registryRecords");
        console.log(storageData);
}*/


    /*let currentTab = await chromeModule.getCurrentTab();
    let tabIdentifier = currentTab.id;
    await injectScriptIntoTab(tabIdentifier, scriptName);*/
    // Add your start functionality here
        

});
chrome.storage.session.onChanged.addListener((storageData)=>{
    //console.log("hello");
    //debugger;
}
);


document.getElementById('stopButton').addEventListener('click', function() {
    console.log('Stop button clicked');
    // Add your stop functionality here
});
