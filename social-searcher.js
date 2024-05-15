


// Create a button element
var startButton = document.createElement("button");
startButton.textContent = "Click me";

// Apply styles to the button
startButton.style.position = "fixed";
startButton.style.top = "10px";
startButton.style.right = "10px";
startButton.style.zIndex = "9999"; // Ensure it's on top of other elements

// Append the button to the body of the page
document.body.appendChild(startButton);






console.log("content script successfully loaded");

chrome.runtime.onMessage.addListener(
    (message,sender,sendResponse)=>{
        if (message == "content"){console.log("message recieved from extension just now");}
    }
  );

/*var registryRecord= {firstName1: "Sally",
          lastName1: "Williams",
          firstName2: "Michael",
          lastName2: "Brooks",
          weddingCity: "Gary",
          weddingState: "Indiana",
          weddingDate: "12/04/2025",
          registryRecordId: "er43seekdlkjb"};*/

       var   registryRecord= {firstName1: "Jessica",
          lastName1: "Pope",
          firstName2: "Corley",
          lastName2: "Thaxton",
          weddingCity: "Greenville",
          weddingState: "MS",
          weddingDate: "03/22/2025",
          registryRecordId: "0489f8e989"}

  function createQuery(registryRecord){
    var firstName = registryRecord.firstName1;
    var lastName = registryRecord.lastName1;
    var preMaritalName = firstName + " " + lastName;
    var spouseFirstName = registryRecord.firstName2;        
    var spouseLastName = registryRecord.lastName2;
    var spouseFullName = spouseFirstName + " " + spouseLastName;
    var postMaritalName = firstName + " " + spouseLastName;
    var query = "'" + preMaritalName + "'";
    query += " AND "; 
    query += "'Engaged to";
    query += " " + spouseFullName + "'";
    return query;}
  
  function clickSubmitButton() {
    var submitButton = document.querySelector('.facebook-page-form__btn');
    if (submitButton) {
        submitButton.click();
    } else {
        console.error('Submit button not found!');
    }
}

function collectDivsByClass(className) {
    let divs = document.querySelectorAll('div.' + className);
    let divArray = Array.from(divs);
    return divArray;
}


function collectSearchResults(){
  return collectDivsByClass("gsc-webResult.gsc-result");

}



// Usage example:
//let results = collectDivsByClass("gsc-webResult.gsc-result");
//console.log(results);


  
var query = createQuery(registryRecord);


function enterSearchQuery(query) {
    return new Promise((resolve, reject) => {
        var searchBox = document.getElementById("facebooksearchinput");
        //var element = document.querySelector('div');
        if (searchBox) {
            const typed = new Typed('#facebooksearchinput', {
               strings: [query],
                typeSpeed: 50,
            });
            resolve("Thick green border added successfully.");
        } else {
            reject(new Error("Element with id 'facebooksearchinput' not found."));
        }
    });
}


startButton.addEventListener("click", async function() {
    //debugger;
  enterSearchQuery(query).then((message)=>{ 
    setTimeout(clickSubmitButton,5000);
    setTimeout(()=>{console.log(collectSearchResults());},10000);

  });

});
