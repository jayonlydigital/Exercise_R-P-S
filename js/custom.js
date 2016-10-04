
$(function(){


  var humanScore = 0;
  var computerScore = 0;

  var computerOptions = ['rock', 'paper', 'scissors'];


  $('#rock').click(function(){
    play("rock");
  });

  $('#paper').click(function(){
    play("paper");
  });

  $('#scissors').click(function(){
    play("scissors");
  });





  function play(humanPlay) {

    computerPlay = getComputerPlay();
    
    if(humanPlay == 'rock') {
    	$('#humanImage').attr('src', 'images/rock.png');

    } else if (humanPlay == 'paper') {
    	$('#humanImage').attr('src', 'images/paper.png');

    } else if (humanPlay == 'scissors') {
    	$('#humanImage').attr('src', 'images/scissors.png');
   
    }
    
    $('#humanScore').html(humanScore);
    $('#computerScore').html(computerScore);
  }
    



  function getComputerPlay() {

  }




});

