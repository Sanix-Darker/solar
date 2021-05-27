
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
        option.value = HOST[i]["link"];
        option.text = HOST[i]["name"];

        hostBox.options.add(option);
    }

    document.getElementById("host").onchange = function(e) {
        document.getElementById("description").style.display = "none";
        document.getElementById("iframe").src = e.target.value;
    }
}

main()
