function waitInterval(interval){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve()},interval)
    })
}


function getTabState(){
    let tabState = sessionStorage.getItem("state");
    return tabState;
}

function getQueryState(){
    let tabState = sessionStorage.getItem("queryState");
    return tabState;
}


function updateTabState(newTabState){
    sessionStorage.setItem("state", newTabState);
}

function updateQueryState(newQueryState){
    sessionStorage.setItem("queryState", newQueryState);
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
    let tabState = await getTabState();
    let queryState = await getQueryState();
    //debugger;
    if (tabState == "initial_state" || queryState =="2"){
        let record = message.currentRecord;
        updateCurrentRecord(record);
        let inputQuery = createQuery1(record);
        document.querySelector('#facebooksearchinput').value = "";
        enterSearchQuery(inputQuery);
        await updateTabState("search_results");
        await updateQueryState("2");
        await waitInterval(6000);
        clickSubmitButton();
    } 

    
    
}}

async function assessStateListener(message, sender, sendResponse) {if (message.description == "assess_state") {
    let tabState = getTabState();
    let queryState = getQueryState();
    if (tabState = "search_results"){
        let currentRecord = JSON.parse(getCurrentRecord());
        let results = extractSearchResults();
        let leads = identifyLeads(results, currentRecord);
        //debugger;
        let recordId = currentRecord.registryRecordId;
        //updateTabState("results_processed");
        await chrome.runtime.sendMessage({
            description: "leads_identified",
            identifiedLeads: leads,
            recordId: recordId
        });
        
    }


    if (queryState == "1"){
        let record = message.currentRecord;
        updateCurrentRecord(record);
        let inputQuery = createQuery2(record);
        document.querySelector('#facebooksearchinput').value = "";
        enterSearchQuery(inputQuery);
        updateTabState("search_results2");
        await waitInterval(6000);
        clickSubmitButton();
    }
    if (tabState == "search_results1"){
        let currentRecord = JSON.parse(getCurrentRecord());
        let results = extractSearchResults();
        let leads = identifyLeads(results, currentRecord);
        //debugger;
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
