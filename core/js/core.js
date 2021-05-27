
const HOST = [
    "https://tio.run/#",
    "https://codesandbox.io/",
    "https://octave-online.net/",
    "https://www.guru99.com/try-java-editor.html",
    "https://www.remoteinterview.io/online-java-compiler",
    "https://paiza.io/en/projects/new?language=java",
    "https://www.compilejava.net/",
    "http://rextester.com/l/java_online_compiler",
    "http://www.browxy.com/",
    "https://www.jdoodle.com/online-java-compiler",
    "https://codebunk.com/",
    "https://htmlcodeeditor.com/",
    "http://phptester.net/",
    "https://www.webtoolkitonline.com/javascript-tester.html",
    "http://collabedit.com",
    "http://www.writephponline.com/",
    "https://html.house/",
    "https://liveweave.com/",
    "http://codepad.org/",
    "http://writecodeonline.com/",
    "http://cssdesk.com/",
    "http://ideone.com/",
    "http://viper-7.com/",
    "http://www.jslint.com/",
    "http://sqlfiddle.com/",
    "http://www.coderun.com/ide/",
    "http://compilr.com/",
    "http://www.landofcode.com/online-code-editor.php",
    "http://railsdotnext.com/experiment/jssandbox.html",
    "https://www.jdoodle.com/online-java-compiler-ide/",
    "http://plnkr.co/",
    "http://www.w3schools.com/",
    "http://jshint.com/",
    "http://js.do/",
    "http://dsheiko.github.io/jscodesniffer/",
    "http://www.letscodejavascript.com/",
    "https://compiler.javatpoint.com/opr/online-java-compiler.jsp",
    "http://www.pythontutor.com/visualize.html#mode=edit"
]

const main = () => {
    // Host box
    var hostBox = document.getElementById('host');

    var option = document.createElement("option");
    option.text = "Select a Tool (" + HOST.length + ")";
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
}
