function collectDivsByClass(className) {
    let divs = document.querySelectorAll('div.' + className);
    let divArray = Array.from(divs);
    return divArray;
  }
  
  
  function collectSearchResults(){
  return collectDivsByClass("gsc-webResult.gsc-result");
  
  }
  
  function collectSearchResultsInnerText() {
    // Call the collectSearchResults function to get the array of HTML elements
    var elements = collectSearchResults();
    //debugger;
  
    // Map over the array to get the innerText property of each element
    var innerTextArray = elements.map(function(element) {
      return element.innerText;
    });
  
    // Return the array of innerText values
    return innerTextArray;
  }
  


async function exportSearchResults(results){
    return await chrome.runtime.sendMessage(results);}

         
  console.log("new script has been injected");
  setTimeout(async ()=>{
    let results = collectSearchResultsInnerText();
    await exportSearchResults(results);
    console.log(collectSearchResultsInnerText());
  
  
  },10000);
  

