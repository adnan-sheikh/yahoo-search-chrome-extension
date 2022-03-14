chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension is installed successfully!");
});

chrome.omnibox.onInputEntered.addListener((text, suggest) => {
  const urlToSearch = `https://search.yahoo.com/search?p=${encodeURIComponent(
    text
  )}`;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id!, { url: urlToSearch });
  });
});
