const queryInputFieldSelector = '#facebooksearchinput'; 
const submitButton = document.querySelector('.facebook-page-form__btn');


function derivePreMaritalName(registryRecord){
    let preMaritalName = registryRecord.firstName1 + " " + registryRecord.lastName1;
    return preMaritalName;}
   
    function derivePostMaritalName(registryRecord){
      let postMaritalName = registryRecord.firstName1 + " " + registryRecord.lastName2;
      return postMaritalName;}

    function deriveSpouse(registryRecord){
        return registryRecord.firstName2 +  " " + registryRecord.lastName2;
    }

/*
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
    return query;}*/
   

    function createQuery(registryRecord){
        let preMaritalName = derivePreMaritalName(registryRecord);
        let spouseFullName = deriveSpouse(registryRecord);
        let postMaritalName = derivePostMaritalName(registryRecord)
        let query = "'" + preMaritalName + "'";
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

function identifyLeads(searchResults,registryRecord){
 let preMaritalName = derivePreMaritalName(registryRecord);
 let postMaritalName = derivePostMaritalName(registryRecord);
 let lastName = registryRecord.lastName1;
 let spouse = deriveSpouse(registryRecord);
 let spouseFirstName = registryRecord.lastName2;   
 let leads = [];
 searchResults.forEach((result) => { 
  if (result.text.includes(preMaritalName) && result.text.includes("Engaged to" + " " + spouse)){
      leads.push(result);}  

  if (result.text.includes(postMaritalName) && result.text.includes("Engaged to" + " " + spouse)){
        leads.push(result);} 
        
  if (result.text.includes(spouseFirstName + " " + lastName) && result.text.includes("Engaged to" + " " + preMaritalName)){ leads.push(result);}
    
    
    });
    return leads;

}

async function getCurrentRecord(recordsKey){
  let storageData = await chrome.storage.session.get(recordsKey.toString());
  let records = storageData[recordsKey];
  storageData = await chrome.storage.session.get("activeRecord");
  let currentrecord = records.find(obj => obj.registryRecordId === storageData.activeRecord);
  return currentrecord;
}