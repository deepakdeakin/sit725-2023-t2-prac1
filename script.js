function changeNumber() {
    var randomNumber = getRandomNumber();
    document.getElementById("heading").innerText = randomNumber;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Change the range as needed
}
