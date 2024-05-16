function collectDivsByClass(className) {
    let divs = document.querySelectorAll('div.' + className);
    let divArray = Array.from(divs);
    return divArray;
  }
  
  
  function collectSearchResults(){
  return collectDivsByClass("gsc-webResult.gsc-result");
  
  }
  


async function exportSearchResults(results){
    return await chrome.runtime.sendMessage(results);}


    if (window.location.href === 'your_desired_url_here') {
        console.log('This is the desired URL!');
      } else {
        console.log('This is not the desired URL.');
      }
         
  console.log("new script has been injected");