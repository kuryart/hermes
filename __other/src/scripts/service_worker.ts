/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

chrome.action.onClicked.addListener(function () {
    // chrome.tabs.create({ url: "chrome://newtab" });
    chrome.tabs.create({ url: "./index.html" });
});
