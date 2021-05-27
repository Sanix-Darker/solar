var port = chrome.extension.connect({
    name: "Sola communication Communication"
});

port.onMessage.addListener(function(msg) {
    console.log("Message recieved: " + msg);
});

var popupWindow = window.open(
    chrome.extension.getURL("core.html"),
    "SolarCore",
    "width=780,height=590,screenX=200,screenY=200"
);
window.close(); // close the Chrome extension pop-up
