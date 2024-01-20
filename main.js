function greeting(name) {
    var greetingMessage = "Hello, " + name + "!";
    var greetingElement = document.createElement('p');
    greetingElement.textContent = greetingMessage;
    document.body.appendChild(greetingElement);
}

function getNameAndGreet() {
    var userName = prompt("Please enter your name:");
    greeting(userName);
}


