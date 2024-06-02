sessionStorage.setItem("state", "initial_state");
console.log(sessionStorage.getItem("state"));

  chrome.runtime.sendMessage({
    description: "tab_state_initialized"
});