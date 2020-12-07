// ----------- Sequence Class -----------//
class SequenceClass {

  constructor() {
    this.level = 1;
    this.sequence = [];
    this.colours = ["green", "red", "yellow", "blue"]
    this.sequenceLength = 0;
    /*
    0 --> green
    1 --> red
    2 --> yellow
    3 --> blue
    */
  }

  generateRandomColour() {
    let randomNumber = Math.floor(Math.random() * 4);
    return this.colours[randomNumber];

  }

  add2Sequence() {
    this.sequence.push(this.generateRandomColour());
    this.sequenceLength++;
    this.level++;
  }

  clear() {
    this.level = 1;
    this.sequence = []
    this.sequenceLength = 0;

  }

}
// ----------- End of Sequence Class -----------//

// -----------  Variables  -----------//
var simonSequence = new SequenceClass();
var userSequence = []
var gameLive = false;
// ----------- End of Variables -----------//


function updateTitle(level, loss = false) {
/**
* [Function to update title based on Level and game status (loss)]
*/

  if (loss == true) {

    $("#level-title").html(`Game Over: You made it to level ${level}. Hit 'Enter' to restart`)
  } else {
    $("#level-title").html(`Level ${level}`)

  }

}

function playButton(colour, button) {
  /**
 * [plays selected button and plays corresponding sound ]
 * @param  {[string]} colour [colour corresponding to button id]
 * @param  {[jQuery selector object]} button [corresponding jquery button object]
 */
  // Press Down Button
  button.fadeOut(150).fadeIn(150);
  // Play Button Sound
  let buttonSound = new Audio(`sounds/${colour}.mp3`);
  buttonSound.play();

  // Release Button
  // setTimeout( function() {button.removeClass("pressed")},10000)

}


function playSequence(colourArray) {
  /**
 * [plays selected buttons and sounds of the simonSequence colour array]
 * @param  {[string array]} colourArray [colour array from sequenceClass object]
 */

  for (i = 0; i < colourArray.length; i++) {
    let currentColour = colourArray[i];
    let currentButton = $(`#${currentColour}`);
    setTimeout(function() {
      playButton(currentColour, currentButton);
    }, i * 800);
    console.log(currentColour);

  }

}




function checkSequenceInput(){
/**
* [checks to see if each user button input matches the simon says sequence]
*/
  let position = userSequence.length - 1
  if ( userSequence[position] != simonSequence.sequence[position] ) {
// Update Title and clear sequence arrays
    updateTitle(simonSequence.sequenceLength,true)
    userSequence = []
    simonSequence.clear()
    gameLive = false

  }
  else if ( userSequence[position] == simonSequence.sequence[position]  ) {
    if ( userSequence.length == simonSequence.sequenceLength ){
    // Update Title and prepare for next stage of sequence
    updateTitle(simonSequence.level,false)
    userSequence = []
    setTimeout(nextSequence,1250)

  }


}
}

function nextSequence() {
  /**
  * [Adds news simonSequence sequence then plays current level's new  sequence]
  */

  simonSequence.add2Sequence()
  playSequence(simonSequence.sequence)
}

function handleUserButtonClick(clickEvent,button){
  /**
 * [handles click event of colour buttons ]
 * @param  {[event]} clickEvent [click event of the button ]
 * @param  {[jQuery selector object]} button [corresponding jquery button object]
 */
  playButton(clickEvent.target.id, button);
  if (gameLive){
  userSequence.push(clickEvent.target.id);
  checkSequenceInput()
}
}

$(document).keydown(function(event){
  // Detect Starting of new game
  if ( event.keyCode === 13 ){
      updateTitle(1);
      nextSequence();
      gameLive = true;
  }

})

$(".btn").on("click", function(event) {
  // Call handleUserButtonClick whenever color button is clicked
  handleUserButtonClick(event,$(this))

});
