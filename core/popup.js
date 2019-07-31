var port = chrome.extension.connect({
    name: "konsola communication Communication"
});

port.onMessage.addListener(function(msg) {
    console.log("Message recieved: " + msg);
});

const HOST = [
    "https://tio.run/#",
    "https://codesandbox.io/",
    //"https://www.codechef.com/ide",
    "https://octave-online.net/",
    "https://www.guru99.com/try-java-editor.html",
    //"https://repl.it/",
    "https://www.remoteinterview.io/online-java-compiler",
    //"https://paiza.io/en/projects/new?language=java",
    "https://www.compilejava.net/",
    //"https://www.onlinegdb.com/online_java_compiler",
    "http://rextester.com/l/java_online_compiler",
    "http://www.browxy.com/",
    //"https://www.codiva.io/",
    "https://www.jdoodle.com/online-java-compiler",
    "https://codebunk.com/",
    //"https://bbc.godbolt.org/",
    "https://htmlcodeeditor.com/",
    "http://phptester.net/",
    "https://www.webtoolkitonline.com/javascript-tester.html",
    //"https://codeanywhere.com/",
    //"https://www.onlinegdb.com/",
    "http://collabedit.com",
    //"https://ideone.com/",
    "http://www.writephponline.com/",
    "https://html.house/",
    "https://liveweave.com/",
    //"https://codepen.io/",
    //"https://coderpad.io/",
    "http://codepad.org/",
    "http://writecodeonline.com/",
    //"http://tinkerbin.com/",
    //"http://jsbin.com/",
    //"http://jsfiddle.net/",
    "http://cssdesk.com/",
    //"http://code.google.com/apis/ajax/playground/",
    "http://ideone.com/",
    "http://viper-7.com/",
    "http://www.jslint.com/",
    "http://sqlfiddle.com/",
    //"http://c9.io/",
    "http://www.coderun.com/ide/",
    "http://compilr.com/",
    //"http://tinkerbin.com/",
    "http://pastebin.me/",
    "http://www.landofcode.com/online-code-editor.php",
    "http://railsdotnext.com/experiment/jssandbox.html",
    "https://www.jdoodle.com/online-java-compiler-ide/",
    "https://playcode.io/online-javascript-editor",
    "http://plnkr.co/",
    "http://www.w3schools.com/",
    "http://jshint.com/",
    "http://js.do/",
    "http://dsheiko.github.io/jscodesniffer/",
    "http://www.letscodejavascript.com/",
    "https://compiler.javatpoint.com/opr/online-java-compiler.jsp",
    "http://www.pythontutor.com/visualize.html#mode=edit"
]

// Host box
var hostBox = document.getElementById('host');

var option = document.createElement("option");
option.text = "_Click here and select a Tool (" + HOST.length + ")";
option.selected = "selected";
option.disabled = "disabled";
hostBox.options.add(option);

for (var i = 0, l = HOST.length; i < l; i++) {
    var option = document.createElement("option");
    option.value = HOST[i];
    name = HOST[i].split("//")[1].replace("www.", "").split(".")[0];
    option.text = name.charAt(0).toUpperCase() + name.slice(1) + " -> (" + HOST[i] + ")";
    hostBox.options.add(option);
}

var sorted = Array.prototype.slice.call(hostBox.options).sort(function(a, b) {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
});

for (var i = 0; i < sorted.length; i++) {
    hostBox.add(sorted[i]);
}

document.getElementById("host").onchange = function(e) {
    document.getElementById("description").style.display = "none";
    document.getElementById("iframe").src = e.target.value;
}