chrome.runtime.onInstalled.addListener(() => {
    console.log("Thank you for installing React Extension!")
})

chrome.bookmarks.onCreated.addListener(() => {
    console.log("This page has been bookmarked.")
})