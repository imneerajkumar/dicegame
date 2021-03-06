//Player Name Change

document.querySelector(".start").addEventListener("click", function() {

  var player1 = prompt("Add player1 name:");
  var player2 = prompt("Add player2 name:");

  document.querySelectorAll("p")[0].innerHTML = player1;
  document.querySelectorAll("p")[1].innerHTML = player2;

  diceRoll(player1, player2);

});

//Rolling Dicee

function diceRoll(player1, player2) {
  document.querySelector(".play").addEventListener("click", function() {

    // Random image selection

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imageSource1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

    // Check for Winner

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩" + player1 + " Wins!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = player2 + " Wins!🚩";
    } else {
      document.querySelector("h1").innerHTML = "🚩Draw!!🚩";
    }

  });

}
