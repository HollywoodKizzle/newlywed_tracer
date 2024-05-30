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
async function main() {

    await chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
        if (message.description == "identify leads") {
            //debugger;
            setTimeout(async () => {
                let results = extractSearchResults();
                let record = message.record;
                let leads = identifyLeads(results, record);
                await chrome.runtime.sendMessage({
                    description: "leads identified",
                    identifiedLeads: leads
                });
            }, 4000);
        }
    });
    await chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
        if (message.description == "perform search query") {
            document.querySelector('#facebooksearchinput').value = "";
            //debugger;
            //localData.currentRecord = message.currentRecord;
            let record = message.record;
            let inputQuery = createQuery(record);
            //debugger;
            enterSearchQuery(inputQuery);
            setTimeout(clickSubmitButton, 6000);
        }

    });
    /*await chrome.runtime.sendMessage({
        description: "awaiting instructions"
    });*/

}

//setTimeout(main, 10000);
waitForVariableChange().then(async ()=>{ debugger;await chrome.runtime.sendMessage({
  description: "awaiting instructions"
});
});

startButton.addEventListener("click", async function() {
    //debugger;
    let record = localData.currentRecord;
    let inputQuery = createQuery(record);
    enterSearchQuery(inputQuery);
    setTimeout(clickSubmitButton, 5000);
});
