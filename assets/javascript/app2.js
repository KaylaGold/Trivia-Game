$(document).ready(function () {

  //User clicks "Start Game" button to start 30 second timer
  $("#StartGame").on("click", function () {
    alert("Game has started! You have 1 minute & 30 seconds!");
    startTimer();
    console.log("Start Game");
  });

  //Timer countdown

  document.getElementById('timer').innerHTML =
    1 + ":" + 30;


  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s === 30) { m = m - 0 }
    if (s < 0) {
      alert('You Are Out Of Time!')
      alert(' Submit & Check Your Answers!')


      // showResults();

      return;
    }


    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
  };
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "0" };
    return sec;
  }

  /*When User selects their answer, computer needs to determine correct/incorrect
  and displays it on the screen.*/
  let incorrectAnswer = 'false';
  let answer = 'true';
  let murder = 'true';
  let jenniferAniston = 'true';
  let saturday = 'true';
  let lower = 'true';
  let blueWhale = 'true';
  let band = 'false';
  let pride = 'false';
  let jenniferLopez = 'false';
  let jenniferGarner = 'false';
  let friday = 'false';
  let tuesday = 'false';
  let higher = 'false';
  let dinosaur = 'false';
  let mammoth = 'false';
  let userAnswer = '';

  $("#clickQ").on("click", function () {
    userAnswer();
    function userAnswer() {
      if (userAnswer === answer) {
        console.log('Correct!');
        return alert('Correct!');
        document.getElementById('#answer').innerHTML = "Correct!"

      } else (userAnswer === incorrectAnswer); {
        console.log('Wrong!');
        return alert('Wrong!');
        document.getElementById('#incorrectAnswer').innherHTML = "Wrong!"
      }
    };
  })
})


/* for each of the 5 questions... if answer = bluewhale === true;
                                    else false. 