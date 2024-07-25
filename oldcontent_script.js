function waitInterval(interval){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},interval)
    })
}


function getTabState(){
    let tabState = sessionStorage.getItem("state");
    return tabState;
}

function updateTabState(newTabState){
    sessionStorage.setItem("state", newTabState);
}

function getCurrentRecord(){
    let currentRecord = sessionStorage.getItem("currentRecord");
    return currentRecord;
}


function updateCurrentRecord(newCurrentRecord){
    //newCurrentRecord = JSON.stringify(newCurrentRecord);
    sessionStorage.setItem("currentRecord", JSON.stringify(newCurrentRecord));
}

async function currentRecordListener(message, sender, sendResponse) {if (message.description == "current_record") {
    let tabState = getTabState();
    //debugger;
    if (tabState == "initial_state" || tabState =="results_processed"){
        let record = message.currentRecord;
        updateCurrentRecord(record);
        let inputQuery = createQuery(record);
        document.querySelector('#facebooksearchinput').value = "";
        enterSearchQuery(inputQuery);
        updateTabState("search_results");
        await waitInterval(6000);
        clickSubmitButton();
    } 
    /*if (tabState == "results_processed"){
        debugger;
        document.querySelector('#facebooksearchinput').value = "";
        let record = message.currentRecord;
        updateCurrentRecord(record);
        let inputQuery = createQuery(record);
        enterSearchQuery(inputQuery);
        updateTabState("search_results");
        await waitInterval(6000);
        clickSubmitButton();
    }*/         
    
}}

async function assessStateListener(message, sender, sendResponse) {if (message.description == "assess_state") {
    let tabState = getTabState();
    if (tabState == "search_results"){
        let currentRecord = JSON.parse(getCurrentRecord());
        let results = extractSearchResults();
        let leads = identifyLeads(results, currentRecord);
        debugger;
        let recordId = currentRecord.registryRecordId;
        updateTabState("results_processed");
        await chrome.runtime.sendMessage({
            description: "leads_identified",
            identifiedLeads: leads,
            recordId: recordId
        });
        
    }
}

}

chrome.runtime.onMessage.addListener(currentRecordListener);
chrome.runtime.onMessage.addListener(assessStateListener);
