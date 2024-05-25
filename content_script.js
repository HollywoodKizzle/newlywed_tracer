
const searchBox = document.getElementById("facebooksearchinput");
const startButton = document.createElement("button");

startButton.textContent = "Click me";

// Apply styles to the button
startButton.style.position = "fixed";
startButton.style.top = "10px";
startButton.style.right = "10px";
startButton.style.zIndex = "9999"; // Ensure it's on top of other elements

// Append the button to the body of the page
document.body.appendChild(startButton);

var sessionData = {recordsKey:"",records:"",registryRecord:"",query:""};
({recordsKey,records,registryRecord, query} = sessionData);

async function main(){
    
  await chrome.runtime.onMessage.addListener(async (message,sender,sendResponse)=>{
 if (message.description == "records key"){
  //debugger;
     //sessionData.recordsKey = message.recordsKey;
     recordsKey = message.recordsKey;
     let x = JSON.stringify(recordsKey); //
     console.log(x);
     let storageData = await chrome.storage.session.get(x);
     records = storageData[recordsKey];//
     registryRecord = records[0];
     sessionData.query = createQuery(registryRecord);} 

  if (message.description == "collect search results"){
    setTimeout( async ()=>{ let results = extractSearchResults();
                            //debugger;
                            let message = {description: "search results", searchResults: results};
                            await chrome.runtime.sendMessage(message); }
                            ,4000);
    
  }
 }   
);
await chrome.runtime.sendMessage({description:"provide records key"});
/*startButton.addEventListener("click", async function(){
  debugger;
  enterSearchQuery(sessionData.query);
  setTimeout(clickSubmitButton,5000);});*/

}
  main();

/*async function clickHandler(event){
  debugger;
  enterSearchQuery(sessionData.query);
  setTimeout(clickSubmitButton,5000);}*/

startButton.addEventListener("click", async function(){
  //debugger;
  let inputQuery = sessionData.query;
  enterSearchQuery(inputQuery);
  setTimeout(clickSubmitButton,5000);});

