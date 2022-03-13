import SerpApi from "google-search-results-nodejs";
const search = new SerpApi.GoogleSearch("secret_api_key");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension is installed successfully!");
});

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  // const newUrl = `https://search.yahoo.com/search?p=${encodeURIComponent(
  //   text
  // )}`;
  // fetch(newUrl).then((res) => {
  console.log(text);
  // });
});
