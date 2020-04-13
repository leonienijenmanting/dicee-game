//Generate random number

function randomDice() {
  var r = Math.random();
  r = r * 6;
  r = Math.floor(r) + 1;
  return r;
}

function playGame() {

  var randomNumber1 = randomDice();
  var randomNumber2 = randomDice();

  //Change image 1 according to random random number

  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);

  //Change image 2 according to random random number

  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

  //Change text for winner

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins";
  }
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "It's a draw";
  }
}

playGame();
