const queryInputFieldSelector = '#facebooksearchinput'; 
const submitButton = document.querySelector('.facebook-page-form__btn');


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

    
function enterSearchQuery(query){
        if (searchBox) {
            const typed = new Typed(queryInputFieldSelector, {
               strings: [query],
                typeSpeed: 50,
            }); } }


function clickSubmitButton() {
                if (submitButton) {
                    submitButton.click();
                } else {
                    console.error('Submit button not found!');
                }
            }
                       
function extractSearchResults() {
let searchResults = [];
 $("div.gsc-webResult.gsc-result").each(function ( index ) {
    let result = {};
    result.text = $( this ).text();
    result.url = $( this ).find("a.gs-title").attr("href");
    searchResults.push(result);
    //return searchResults;
     //console.log(result);
                  })
    return  searchResults;}

                  