//wk1-2 countdown timer should run 10....1 then blastoff
function startCountdown() {
    var count = 10;
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //countdown timer should dispaly 9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;

    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec
    //countdown timer should dispaly 8

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the wait time as 3 sec
    //countdown timer should dispaly 7

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the wait time as 4 sec
    //countdown timer should dispaly 6

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the wait time as 5 sec
    //countdown timer should dispaly 5

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the wait time as 6 sec
    //countdown timer should dispaly 4

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the wait time as 7 sec
    //countdown timer should dispaly 3

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the wait time as 8 sec
    //countdown timer should dispaly 2

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the wait time as 9 sec
    //countdown timer should dispaly 1

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!!";
    }, 10000); //set the wait time as 10 sec
    //countdown timer should dispaly BLASTOFF!!!!



}