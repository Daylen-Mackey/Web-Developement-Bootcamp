

function playDrumSound(drumLetter) {
  switch (drumLetter) {
    case "w":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;
    case "a":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "k":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "j":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
    // console.log(drumLetter)

}}

function buttonAnimation(keyLetter){
  let classString = `button.${keyLetter}`
  selectedButton = document.querySelector(classString)
  selectedButton.classList.add("pressed")
  setTimeout( function() {selectedButton.classList.remove("pressed")},100)


}


function handleClick() {

  var drumClicked = this.innerText
  playDrumSound(drumClicked)

}

function handleKeydown(event) {
  playDrumSound(event.key)
  buttonAnimation(event.key)

}




let drumButtons = document.querySelectorAll("button.drum")

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick)
}

document.addEventListener("keydown",function(event) {
  handleKeydown(event);

})
