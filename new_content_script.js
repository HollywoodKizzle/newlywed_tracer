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

function updateCurrentRecord(newCurrentRecord){
    //newCurrentRecord = JSON.stringify(newCurrentRecord);
    sessionStorage.setItem("currentRecord", JSON.stringify(newCurrentRecord));
}

async function currentRecordListener(message, sender, sendResponse) {if (message.description == "current_record") {
    let tabState = getTabState();
    //debugger;
    if (tabState == "initial_state"){
        let record = message.currentRecord;
        updateCurrentRecord(record);
        let inputQuery = createQuery(record);
        enterSearchQuery(inputQuery);
        updateTabState("search_results");
        await waitInterval(6000);
        clickSubmitButton();
    }          
    
}}

chrome.runtime.onMessage.addListener(currentRecordListener);