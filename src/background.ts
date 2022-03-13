chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension is installed successfully!");
});

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  console.log(text);
  suggest([
    { content: "hi", description: "this is the first suggestion" },
    { content: "hi again", description: "this is the second suggestion" },
  ]);
});
