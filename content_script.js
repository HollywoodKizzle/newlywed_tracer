
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


var recordsKey;
var records;
var registryRecord;  
var query;

async function main(){
  
  chrome.runtime.onMessage.addListener(async (message,sender,sendResponse)=>{
  recordsKey = message;
  let x = JSON.stringify(recordsKey);
  console.log(x);
  let storageData = await chrome.storage.session.get(x);
  records = storageData[recordsKey];
  registryRecord = records[9];
  query = createQuery(registryRecord);}
);

  await chrome.runtime.sendMessage("provide record key");}
  main();

startButton.addEventListener("click", async function() {
    enterSearchQuery(query);
    setTimeout(clickSubmitButton,5000);});

