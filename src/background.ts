chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension is installed successfully!");
});

chrome.omnibox.setDefaultSuggestion({ description: "My Yahoo search!" });

chrome.omnibox.onInputEntered.addListener((text) => {
  const urlToSearch = `https://search.yahoo.com/search?p=${encodeURIComponent(
    text
  )}`;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id!, { url: urlToSearch });
  });
});

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  suggest([
    {
      content: `${text}1`,
      description: `This description is related to ${text}1`,
    },
    {
      content: `${text}2`,
      description: `This description is related to ${text}2`,
    },
    {
      content: `${text}3`,
      description: `This description is related to ${text}3`,
    },
  ]);
});
