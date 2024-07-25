function waitForVariableChange() {
    return new Promise((resolve, reject) => {
        // Check if the initial value is already not undefined
        if (document.getElementById("facebooksearchinput") !== undefined) {
            resolve(document.getElementById("facebooksearchinput"));
            return;
        }
  
        // Define the interval for checking the variable's value
        const interval = 100; // Check every 100 milliseconds
  
        const checkValue = setInterval(() => {
            if (document.getElementById("facebooksearchinput") !== undefined) {
                clearInterval(checkValue); // Stop checking
                resolve(document.getElementById("facebooksearchinput")); // Resolve the promise with the new value
            }
        }, interval);
    });
  }
  
  
  
  
  
  /*const searchBox = document.getElementById("facebooksearchinput");*/
  const startButton = document.createElement("button");
  
  startButton.textContent = "Click me";
  
  // Apply styles to the button
  startButton.style.position = "fixed";
  startButton.style.top = "10px";
  startButton.style.right = "10px";
  startButton.style.zIndex = "9999"; // Ensure it's on top of other elements
  
  // Append the button to the body of the page
  document.body.appendChild(startButton);
  async function main() {
  
      await chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
          if (message.description == "scrape_data") {
              //debugger;
              setTimeout(async () => {
                  let searchResults = extractSearchResults();
                  let currentRecord = sessionStorage.getItem('currentRecord');
                  currentRecord = JSON.parse(currentRecord);
                  let leads = identifyLeads(searchResults, currentRecord);
                  let storedLeads = sessionStorage.getItem('identifiedLeads');
                  let registryRecordId = currentRecord.registryRecordId;
                  let queryTemplates = sessionStorage.getItem('queryTemplates');
                  let queryIndex = sessionStorage.getItem('queryIndex');
                  queryTemplates = JSON.parse(queryTemplates);
                  storedLeads = JSON.parse(storedLeads);
                  debugger;
                  if (leads.length > 0){
                        storedLeads.push(...leads);
                        storedLeads = JSON.stringify(storedLeads);
                        sessionStorage.setItem('identifiedLeads',storedLeads);
                        console.log('leads identified!')}
                  else {
                      console.log('No leads identified')}    
                  //debugger;
                  if (queryIndex > -1){
                      let inputQuery = queryTemplates[queryIndex];
                      queryIndex = queryIndex - 1;
                      sessionStorage.setItem('queryIndex',queryIndex);
                      //debugger;
                      enterSearchQuery(inputQuery);
                      setTimeout(clickSubmitButton, 6000);}
                  else {
                      storedLeads = sessionStorage.getItem('identifiedLeads');
                      storedLeads = JSON.parse(storedLeads);
                      //debugger;
                      await chrome.runtime.sendMessage({
                      description: "next_record",
                      identifiedLeads: storedLeads,
                      registryRecordId: registryRecordId,
                      attemptedQueries: queryTemplates
                  });
                  }
                  
              }, 4000);
          }
      });
      await chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
          if (message.description == "new_record") {
              let currentRecord = JSON.stringify(message.currentRecord);
              let queryTemplates = JSON.stringify(message.queryTemplates);
            sessionStorage.setItem("currentRecord", currentRecord);
            sessionStorage.setItem("queryTemplates", queryTemplates);
            sessionStorage.setItem("identifiedLeads",'[]');
              document.querySelector('#facebooksearchinput').value = "";
              let queryIndex = message.queryTemplates.length - 1;
              sessionStorage.setItem("queryIndex",queryIndex);
              //debugger;
              //localData.currentRecord = message.currentRecord;
              //let record = message.record;
              //let inputQuery = createQuery(record);
              //debugger;
              if (queryIndex > -1){
                  let inputQuery = message.queryTemplates[queryIndex];
                  queryIndex = queryIndex - 1;
                  sessionStorage.setItem("queryIndex",queryIndex);
                  enterSearchQuery(inputQuery);
                  //debugger;
                  setTimeout(clickSubmitButton, 6000);
              }
          }
  
      });
      await chrome.runtime.sendMessage({
          description: "awaiting instructions"
      });
  
  }
  
  setTimeout(main, 3000);
  /*waitForVariableChange().then(async ()=>{ debugger;await chrome.runtime.sendMessage({
    description: "awaiting instructions"
  });
  });*/
  
  startButton.addEventListener("click", async function() {
      //debugger;
      let record = localData.currentRecord;
      let inputQuery = createQuery(record);
      enterSearchQuery(inputQuery);
      setTimeout(clickSubmitButton, 5000);
  });
  