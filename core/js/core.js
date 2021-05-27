const random = (min, max) => {
    return min + Math.random() * (max - min);
}

const main = () => {
    // Host box
    var hostBox = document.getElementById('host');

    var option = document.createElement("option");
    option.text = "Select a Code Execution Tool (over " + HOST.length + " available)";
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
        document.getElementById("iframe").style.display = "none";
        document.getElementById("description").style.display = "block";
        document.getElementById("description").innerHTML= "<img src='./img/loading.gif' style='margin-top: 55%;'/>";
        document.getElementById("iframe").src = e.target.value;
        setTimeout(() => {
            document.getElementById("description").style.display = "none";
            document.getElementById("iframe").style.display = "block";
        }, parseInt(random(2000, 5000)))
    }
}

main()
