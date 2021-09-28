//Variables
var timer = document.querySelector(".timer");
var secondsLeft = 60;
// Questions wrapped into an Array
var mtbQuiz = [
   { 
    question: 'Mountain bikes were first explored as useful transportation by the military in what year?',
    options: ['1850','1896','1920','1905'],
    fact: "1896",
   }      
]

// Function needed to hide button on click

// Creates a event listener to start time on click.
var startButton = document.querySelector("#start").onclick = function(){
function setTime() {	
    // Sets interval in variable	
    var timerInterval = setInterval(function() {	
      secondsLeft--;	
      timer.textContent = secondsLeft + " seconds left until the Quiz has ended.";	
  	
      if(secondsLeft === 0) {	
        // Stops execution of action at set interval	
        clearInterval(timerInterval);	
        // Calls function to create and append image	
        displayScore();	
      }	
  	
    }, 1000);	
  }	
  setTime();
} 
console.log(startButton)

// Trigger first question

// Trigger second question

// Trigger this question

// Trigger fourth question

// Trigger fifth question

// Logic to deduct time for a wrong answer

// Logic to add up score & save to local storage

// Score and initials logging

//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score