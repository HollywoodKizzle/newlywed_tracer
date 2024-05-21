//import * as chromeModule from "/module.js";
// Initialize button with users' preferred color
const changeColor = document.getElementById('changeColor');
const storageButton = document.getElementById('getStorage');


chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: storeKey 
  });
});

storageButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: getKey 
  });
});


// The body of this function will be executed as a content script inside the
// current page
async function setPageBackgroundColor(message) {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color;
  });
  
  //var response = await chrome.runtime.sendMessage(message);
  //var response = await chrome.runtime.sendMessage("hello");
  //var chromeModule = await import("/module.js");
  var response = await messageBackgroundScript(message);
  return response;
}

function changeBackgroundColor() {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#33BFFF", "#FF33BF"]; // Array of colors
  let currentIndex = 0; // Index to track the current color

  setInterval(function() {
    document.body.style.backgroundColor = colors[currentIndex]; // Set background color
    currentIndex = (currentIndex + 1) % colors.length; // Move to the next color, looping back to the beginning if necessary
  }, 2000); // 2000 milliseconds = 2 seconds
}
async function storeKey(){
const key = 'myKey';
const value = { name: 'my value' };

chrome.storage.sync.set({key: value}, () => {
  console.log('Stored name: ' + value.name);
});
}


async function getKey(){
  //const key = 'myKey';
  //const value = { name: 'my value' };
  
  chrome.storage.sync.get(null, (data) => {
    
    console.log(data);
  });

  chrome.runtime.sendMessage("content");
  }
  

  /*chrome.ghostPublicAPI.openTab(
    { url: "https://example.com",
      index: 2, 
      active: false, 
      identity: "97e4fc196dab4679808cfa9753a9860f"},
    function(tab_id) {
        console.log(tab_id)
    }
  );*/


