function greeting(name) {
    console.log("Hello, " + name + "!");
}

function getNameAndGreet() {
    var userName = prompt("Please enter your name:");
    greeting(userName);
}

getNameAndGreet();

