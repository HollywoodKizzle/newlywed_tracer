  
         
  //console.log("new script has been injected");
    
    setTimeout(async ()=>{    
       let searchResultDivs = collectDivsByClass("gsc-webResult.gsc-result");
       let searchResults = collectInnerTextValues(searchResultDivs);
       await chrome.runtime.sendMessage(searchResults);
       console.log(searchResults);
  
  },10000);
  


