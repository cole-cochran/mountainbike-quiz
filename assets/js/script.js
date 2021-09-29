//Variables
var timer = document.querySelector(".timer");
var secondsLeft = 60;
var currentQuestion = 0;
var startButton = document.getElementById("start");
var quiz = document.getElementById("mtbQuiz");
var score = 0;
var penalty = 5;
console.log(quiz)
// Questions wrapped into an Array
var mtbQuiz = [
   { 
    question: 'Mountain bikes were first explored as useful transportation by the military in what year?',
    options: ['1850','1896','1920','1905'],
    fact: "1896",
   },      
   {
   question: 'What size of wheel and tire did the first mountain bikers utilize?',
    options: ['650B','29inch','700C','650C'],
    fact: "650B",
   },
   {
    question: 'In what country did modern mountain biking find its inception?',
    options: ['France','England','USA','Italy'],
    fact: "USA",
    },
    {
    question: 'What decade did the to The Larkspur Canyon Gang start riding Balloners becoming the first mountain bike club in history. ',
    options: ['1930s','1950s','1920s','1960s'],
    fact: "1960s",
    },
    {
    question: 'In what county in California is considered the grandfather of modern mountain biking?',
    options: ['Marin','Los Angeles','Humboldt','Placer'],
    fact: "Marin",
    },
]
// Creates a event listener to start time on click.
var startButton = document.querySelector("#start");
startButton.onclick = function(){
    // Remove button
    startButton.remove();
    function setTime() {	
    // Sets timer interval in variable	
    var timerInterval = setInterval(function() {	
      secondsLeft--;	
      timer.textContent = secondsLeft + " seconds left until the Quiz has ended.";	
  	
      if(secondsLeft === 0) {	
        // Stops execution of action at set interval	
        clearInterval(timerInterval);	
        // Calls function to create and append Score
        displayScore();	
      }	
  	
    }, 1000);	
  }	
  setTime();
} 
console.log(startButton)
// Trigger First Question.
var generateQuiz = $('#mtbQuiz');
function updateQuiz(){
console.log(quiz)
removeAllChildNodes(quiz)
var question = document.createElement("p")
quiz.appendChild(question);
question.textContent = ''
question.textContent = mtbQuiz[currentQuestion].question
// Creates button elements and adds a listener for a click. 
for (var i = 0; i < mtbQuiz[currentQuestion].options.length; i++){
    let button = document.createElement('button')
    button.textContent = mtbQuiz[currentQuestion].options[i]
    button.addEventListener('click', function(){
        currentQuestion++
        updateQuiz();
    });
    quiz.appendChild(button);
}
};
console.log(updateQuiz)
// Event listener to advance to next question.   
startButton.addEventListener('click', function(){
    updateQuiz();
});
// Function to remove the child nodes.
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//function 

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