document.getElementById("roll").addEventListener("click", handleClick)

function handleClick() {
// first random number

    var randomNumberOne = Math.floor(Math.random() * 6) + 1;

    var randomDiceImgOne = "images/dice" + randomNumberOne + ".png";

    var imgOne = document.querySelectorAll("img")[0];

    imgOne.setAttribute("src", randomDiceImgOne);

    // second random number

    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    var randomDiceImgTwo = "images/dice" + randomNumberTwo + ".png";

    var imgTwo = document.querySelectorAll("img")[1];

    imgTwo.setAttribute("src", randomDiceImgTwo);

    // validating 

    if (randomNumberOne > randomNumberTwo) {
        document.querySelector("h1").innerHTML = "Player One Wins!";
    } else if (randomNumberOne < randomNumberTwo) {
        document.querySelector("h1").innerHTML = "Player Two Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}