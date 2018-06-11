//Variables
let userChoice = '';


//User clicks "Start Game" button to start 30 second timer
$("#StartGame").on("click", function () {
    alert ("Game has started! You have 30 seconds!");
    console.log("Start Game");
}); 

//30 second timer countdown
let countDownDate = new Date("June 10, 2018 00:00:30").getTime();
//Update countdown every 1 sec
let x = setInterval (function () {
    //Get todays date and time
    let now = new Date ().getTime ();
    //Find distance between now and countdown date
    let distance = countDownDate - now;
    //Time calculations for days, hours, minutes, and seconds
    let days = Math.floor((distance/ 1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Display on HTML page
$("button").click(function(){
    $("#timer").html(function () {
        return days + "d " + hours + "h "
        + minutes + "m " + seconds + "s "; 
// If the countdown is finished insert text
if (distance <= 0) {
    clearInterval (x);
    $("#timer").html = "Finished"; 
}

    }, 1000);





});}) 