
var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;



function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}



function play(humanPlay) {
  

  

  if(humanPlay == 'rock') {
  	document.getElementById('humanImage').src = "images/rock.png";

  } else if (humanPlay == 'paper') {
  	document.getElementById('humanImage').src = "images/paper.png";

  } else if (humanPlay == 'scissors') {
  	document.getElementById('humanImage').src = "images/scissors.png";
 
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  


}





