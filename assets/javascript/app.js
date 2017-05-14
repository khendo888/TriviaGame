/*The object of the game is to answer all of the trivia questions before time runs out

PSEUDO-CODE

1. To start the game, press the START button
2. timer at the top of the page that starts counting down when the button is pressed
3. all of the trivia questions and the possible answers are displayed on the page
4. only one answer per question is allowed
5. if the user answers all of the questions before time runs out, press DONE at the bottom. this will stop the game, 
   display "all done" or some other congratulatory message and display the stats:
   Correct Answers, Incorrect Answers, Unanswered questions.
   pressing DONE should also make everything reset to zero.
 6. if time runs out, a message should be displayed, the counters should be updated and then reset to zero*/

 /*PSEUDO CODE - BEHIND THE SCENES
 -------------------------------------
 1. on clicking the START button, the timer starts counting down 
 2. the questions and possible answers are unhidden
 3. the DONE button is unhidden
 4.
*/
// DEFINE GLOBAL VARIABLES
//--------------------------------------------------------------------

var correctAnswer =0;
var incorrectAnswer=0;
var unanswered=0;
var hidden="#hiddenQuestions";
var questions=["q1, q2, q3, q4, q5, q6, q7, q8, q9, q10"];
//class - hiddenQuestions (questions hidden until start button clicked)
//id-done (done button; hidden until start button pressed)
//id-start (start button)









// DEFINE FUNCTIONS
//------------------------------------------------------------------------
//when click START button, timer starts

// creates a timer that counts down in minutes
//$(function(clock){
//	$("#ms_timer").countdowntimer({
//		minutes : 2‚
 //               seconds : 0‚
   //             size : "lg"
//	});
//)};

//restart the game with counters set to zero
function restart () {
	correctAnswer=0;
	incorrectAnswer=0;
	unanswered=0
}

function startGame() {
	
}

function answerQuestion () {
/*for (i=0, i<questions.length, i++) 
	if value==="true"
		correctAnswer=correctAnswer + 1;
	else if value==="false"
		incorrectAnswer=incorrectAnswer + 1;
	else
		unanswered=unanswered + 1;*/
//}	

//}

function endGame() {
	console.log("game over");


}


function displayScore(){
	$(right).text(correctAnswersCounter);
	$(wrong).text(wrongAnswersCounter);
}

//MAIN PROCESS
//----------------------------------------------------------------------------
//click START button to start game and timer countdown
//$("hidden").click("click", start) 
 $("start").click(function(){
        $("hiddenQuestions").show();
});
}
//clock () 

