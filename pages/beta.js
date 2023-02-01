function init() {
    document.getElementById("o1").innerText = "Enter 'help' for help!";
}

function trigger() {    
    makeRoom();
    
    let termOut = action();

    document.getElementById("o1").innerText = "Your input: " + document.getElementById("termInput").value + "\n ------------- \n" + termOut;
    document.getElementById("termInput").value = "";
    
    return false;
}

function action() {
    let command = document.getElementById("termInput").value.split(" ");
    if (command[0] == "goto") {
        return showContent(command[1]);
    }
    else if (command[0] == "help") {
        return "i am a terminal. you give me commands, i do something... i guess \n try 'commands' to get a list of commands!";
    } else if (command[0] == "toggleMode") {
        makeRoom();
        return "dont";
    } else if (command[0] == "commands") {
        return "here is a list of commands: \n - help: shows you what this is \n - commands: shows all the commands available \n - goto xyz: show the page 'xyz' \n - ls: list all pages \n - toggleMode: toggles darkmode/whitemode";
    } else if (command[0] == "uwu" || command[0] == "UwU") {
        return "UwU";
    } else if (command[0] == "ls") {
        return "home coding music about_me beta";
    } else if (command[0] == "die") {
        return "qwq why you so mean";
    }
    else {
        return errorMessage();
    }
    
}

function makeRoom() {
    document.getElementById("o9").innerText = document.getElementById("o8").innerText;
    document.getElementById("o8").innerText = document.getElementById("o7").innerText;
    document.getElementById("o7").innerText = document.getElementById("o6").innerText;
    document.getElementById("o6").innerText = document.getElementById("o5").innerText;
    document.getElementById("o5").innerText = document.getElementById("o4").innerText;
    document.getElementById("o4").innerText = document.getElementById("o3").innerText;
    document.getElementById("o3").innerText = document.getElementById("o2").innerText;
    document.getElementById("o2").innerText = document.getElementById("o1").innerText;
}

function showContent(content) {

    switch (content) {
        case "home": document.getElementById("content").innerHTML='<object type="text/html" data="../index.html" ></object>'; break;
        case "coding": document.getElementById("content").innerHTML='<object type="text/html" data="../pages/coding.html" ></object>'; break;
        case "about_me": document.getElementById("content").innerHTML='<object type="text/html" data="../pages/about_me.html" ></object>'; break;
        case "music": document.getElementById("content").innerHTML='<object type="text/html" data="../pages/music.html" ></object>'; break;
        case "beta": return "you're already here bruh";
        default: return "an error has occured. check for spelling";
    }

    return "here you go :3";

}

function errorMessage() {
    let x = Math.random() * 101;
    if (x <= 25) {
        return "wat";
    } else if (x <= 50) {
        return "please explain what you just said (not actually)";
    } else if (x <= 75) {
        return "i dont know what to do with this";
    } else if (x <= 100) {
        return "try using 'help'!";
    }
}