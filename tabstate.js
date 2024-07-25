
// `'${firstName1} ${lastName1}' AND 'Engaged to ${firstName2} ${lastName2}'`
// `${firstName1} ${lastName2} is with ${firstName2} ${lastName2}`

let queryTemplates = [];
let queryIndex = queryTemplates.length - 1;
let identifiedLeads = [];
//sessionStorage.setItem("state", "initial_state");
queryTemplates = JSON.stringify(queryTemplates);
identifiedLeads = JSON.stringify(identifiedLeads);
sessionStorage.setItem("identifiedLeads", identifiedLeads);
sessionStorage.setItem("queryTemplates", queryTemplates);
sessionStorage.setItem("queryIndex", queryIndex.toString());
  chrome.runtime.sendMessage({
    description: "tab_state_initialized"
});