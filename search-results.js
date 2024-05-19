  
         
  /*console.log("new script has been injected");
    
    setTimeout(async ()=>{    
       let searchResultDivs = collectElementsBySelector("div.gsc-webResult.gsc-result");
       let searchResults = collectInnerTextValues(searchResultDivs);
       console.log(searchResults);

       let anchorElements = collectElementsBySelector("a.gs-title");
       let searchLinks = collectHrefValues(anchorElements);
       debugger;
       await chrome.runtime.sendMessage(searchResults);
       
  
  },4000);*/


/*$(document).ready(async ()=>{    
  let searchResultDivs = collectElementsBySelector("div.gsc-webResult.gsc-result");
  let searchResults = collectInnerTextValues(searchResultDivs);
  console.log(searchResults);

  let anchorElements = collectElementsBySelector("a.gs-title");
  let searchLinks = collectHrefValues(anchorElements);
//  debugger;
  await chrome.runtime.sendMessage(searchResults);
  

});
*/




/*$(document).ready(async ()=>{
let searchResults = [];
$("div.gsc-webResult.gsc-result").each(function ( index ) {
  let result = $( this ).text();
  console.log(result);
  });
//debugger;

//let searchLinks = $("div.gsc-webResult.gsc-result").find("a.gs-title").attr("href");
//console.log(searchLinks);
});*/

let searchResults = [];
setTimeout(async ()=>{
  $("div.gsc-webResult.gsc-result").each(function ( index ) {
    //let result = $( this ).text();
    let result = {};
    result.text = $( this ).text();
    result.url = $( this ).find("a.gs-title").attr("href");
    searchResults.push(result);
    //console.log(result);
    });
    console.log(searchResults);
    await chrome.runtime.sendMessage(searchResults);
  
},

4000);