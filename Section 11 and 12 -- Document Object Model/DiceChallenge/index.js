function createRandomDiceNumber() {

  return Math.floor(Math.random() * 6) + 1;

}

function createDiceImageString(number) {

  return `images/dice${number}.png`

}

function modifyH1(inputText) {
  document.querySelector("h1").innerHTML = inputText;
}

function determineWinner(diceArray) {
  if (diceArray[0] > diceArray[1]) {
    let newHeaderString = "🚩 Player 1 Wins!"
    modifyH1(newHeaderString)


  } else if (diceArray[0] < diceArray[1]) {
    let newHeaderString = "Player 2 Wins! 🚩 "
    modifyH1(newHeaderString)


  } else {
    let newHeaderString = "It's a Draw!"
    modifyH1(newHeaderString)

  }

}

let diceImages = document.querySelectorAll(".dice img")
let diceNumbers = []

for (let i = 0; i < diceImages.length; i++) {
  diceNumber = createRandomDiceNumber()
  diceNumbers.push(diceNumber)
  diceImages[i].setAttribute("src", createDiceImageString(diceNumber))
}

determineWinner(diceNumbers);
