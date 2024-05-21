/*<a class="gs-title" href="https://www.google.com/url?client=internal-element-cse&amp;cx=42b4f126acb5b0d1d&amp;q=https://www.facebook.com/Jessica.Reath.Pope/&amp;sa=U&amp;ved=2ahUKEwjLobDkwpWGAxV3q4QIHYemB0EQFnoECAAQAQ&amp;usg=AOvVaw26qrETRKocElnMVjDnNGBa&amp;arm=e" target="_blank" dir="ltr" data-cturl="https://www.google.com/url?client=internal-element-cse&amp;cx=42b4f126acb5b0d1d&amp;q=https://www.facebook.com/Jessica.Reath.Pope/&amp;sa=U&amp;ved=2ahUKEwjLobDkwpWGAxV3q4QIHYemB0EQFnoECAAQAQ&amp;usg=AOvVaw26qrETRKocElnMVjDnNGBa&amp;arm=e" data-ctorig="https://www.facebook.com/Jessica.Reath.Pope/"><b>Jessica Pope</b> - Facebook</a>*/

/* >>>
href="https://www.google.com/url?client=internal-element-cse&amp;cx=42b4f126acb5b0d1d&amp;q=https://www.facebook.com/Jessica.Reath.Pope/&amp;sa=U&amp;ved=2ahUKEwjLobDkwpWGAxV3q4QIHYemB0EQFnoECAAQAQ&amp;usg=AOvVaw26qrETRKocElnMVjDnNGBa&amp;arm=e"*/



//https://www.facebook.com/Jessica.Reath.Pope



/*<a class="gs-title" href="https://www.google.com/url?client=internal-element-cse&amp;cx=42b4f126acb5b0d1d&amp;q=https://www.facebook.com/Shnala/&amp;sa=U&amp;ved=2ahUKEwjo24L2xpWGAxXnF1kFHX6XA9EQFnoECAAQAQ&amp;usg=AOvVaw3_90nC2uDqkQjO3q31S4Xl&amp;arm=e" target="_blank" dir="ltr" data-cturl="https://www.google.com/url?client=internal-element-cse&amp;cx=42b4f126acb5b0d1d&amp;q=https://www.facebook.com/Shnala/&amp;sa=U&amp;ved=2ahUKEwjo24L2xpWGAxXnF1kFHX6XA9EQFnoECAAQAQ&amp;usg=AOvVaw3_90nC2uDqkQjO3q31S4Xl&amp;arm=e" data-ctorig="https://www.facebook.com/Shnala/"><b>Sarah Eschmann</b> - Facebook</a>*/

/*
href="https://www.google.com/url?client=internal-element-cse&amp;cx=42b4f126acb5b0d1d&amp;q=https://www.facebook.com/Shnala/&amp;sa=U&amp;ved=2ahUKEwjo24L2xpWGAxXnF1kFHX6XA9EQFnoECAAQAQ&amp;usg=AOvVaw3_90nC2uDqkQjO3q31S4Xl&amp;arm=e"*/

//https://www.facebook.com/Shnala

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

var registryRecord= {firstName1: "Sally",
          lastName1: "Williams",
          firstName2: "Michael",
          lastName2: "Brooks",
          weddingCity: "Gary",
          weddingState: "Indiana",
          weddingDate: "12/04/2025",
          registryRecordId: "er43seekdlkjb"};

       /*var   registryRecord= {firstName1: "Jessica",
          lastName1: "Pope",
          firstName2: "Corley",
          lastName2: "Thaxton",
          weddingCity: "Greenville",
          weddingState: "MS",
          weddingDate: "03/22/2025",
          registryRecordId: "0489f8e989"};*/


/*          var   registryRecord= {firstName1: "Sarah",
          lastName1: "Eschmann",
          firstName2: "Jared",
          lastName2: "Sossner",
          weddingCity: "Peuria",
          weddingState: "il",
          weddingDate: "03/22/2025",
          registryRecordId: "0489f8e989"};
       
*/
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
    //inform ba
    //setTimeout(()=>{console.log(collectSearchResults());},10000);

  });

});

chrome.storage.session.get(["registryRecords","tabIdentifier"]).then((items)=>{console.log(items);});
