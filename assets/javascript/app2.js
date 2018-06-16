$(document).ready(function () {

  // User clicks "Start Game" button to start 30 second timer
  $("#StartGame").on("click", function () {
    alert("Game has started! You have 1 minute & 30 seconds!");
    startTimer();
    console.log("Start Game");
  });

  // Timer countdown

  document.getElementById('timer').innerHTML =
    1 + ":" + 30;


  function startTimer() {
    let presentTime = document.getElementById('timer').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
      alert('You Are Out Of Time!')
      alert(' Submit & Check Your Answers!')

      return;
    }


    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1500);
  };

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
      sec = "0" + sec
    };
    if (sec < 0) {
      sec = "59"
    };
    return sec;
  }


  // Begin calculating correct vs false answers

  function setScore() {
    let score = $('input:checked[value=correct]').length
    $('#score').text(score);
  }


  function correctScore() {
    let correct = $('input:checked[value=correct]').length
    $('#correct').text(correct);
  }


  function incorrectScore() {
    let incorrectScore = $('input:checked[value=wrong]').length
    $('#wrong').text(incorrectScore);
  }

  // Set score on input change
  $('input').change(setScore);
  $('input').change(correctScore);
  $('input').change(incorrectScore);

  // Set score on initialization
  setScore();

  correctScore();

  incorrectScore();

  // Show scores
  $("#button2").click(function () {
    $(".score").toggle();
    $("#correct").css("background-color", "green");
    $("#wrong").css("background-color", "red");
    startTimer --; 

  });



});
