var port = chrome.extension.connect({
    name: "Sola communication Communication"
});

port.onMessage.addListener(function(msg) {
    console.log("Message recieved: " + msg);
});

var popupWindow = window.open(
    chrome.extension.getURL("normal_popup.html"),
    "exampleName",
    "width=780,height=590"
);
window.close(); // close the Chrome extension pop-up
