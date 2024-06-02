sessionStorage.setItem("state", "initial_state");

  chrome.runtime.sendMessage({
    description: "tab_state_initialized"
});