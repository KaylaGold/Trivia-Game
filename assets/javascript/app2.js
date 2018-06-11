
//Variables
let userChoice = '';



//User clicks "Start Game" button to start 30 second timer
$("#StartGame").on("click", function () {
    alert ("Game has started! You have 30 seconds!");
    console.log("Start Game");
}); 

//30 second timer countdown

document.getElementById('timer').innerHTML =
 00 + ":" + 30;
startTimer();

$("button").click(function startTimer() {
 var presentTime = document.getElementById('timer').innerHTML;
 var timeArray = presentTime.split(/[:]+/);
 var m = timeArray[0];
 var s = checkSecond((timeArray[1] - 1));
 if(s==30){m=m-0}
 if(s<0){
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
 if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
 if (sec < 0) {sec = "30"};
 return sec;
}