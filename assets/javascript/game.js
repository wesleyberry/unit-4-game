$(document).ready(function() {
    
    //generate target score
    startScore = 0;
    function randomScore() {
    min = Math.ceil(19);
    max = Math.floor(120);
    var targetScore = Math.floor(Math.random() * (max - min)) + min;
    console.log(targetScore);
    $("#targetScoreJQ").append(targetScore);
    return targetScore;
    }
    var theRandomScore = randomScore();

    // generate values for each button
    firstMin = Math.ceil(1);
    firstMax = Math.floor(12);
    var generatedFirstButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
    var generatedSecondButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
    var generatedThirdButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
    var generatedFourthButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;

    console.log(startScore);
    console.log(theRandomScore);

    if(startScore == theRandomScore) {
        wins++;
        console.log("Wins: " + wins);
    } 
    if (startScore > theRandomScore) {
        losses++;
        console.log("Losses: " + losses);
    }


    $(".firstButton").on("click", function() {
        $(this).toggleClass('active');
        // var startScore = $("<div>");
        // $("#score")[0].innerHTML = score;
        startScore = generatedFirstButtonValue + startScore;
        $("#yourScoreJQ").innerHTML = startScore;
        console.log(startScore);
    });

    $(".secondButton").on("click", function() {
        $(this).toggleClass('active');
        startScore = generatedSecondButtonValue + startScore;
        startScore = $("<div>");
        console.log(startScore);
    });

    $(".thirdButton").on("click", function() {
        $(this).toggleClass('active');
        startScore = generatedThirdButtonValue + startScore;
        $("#yourScoreJQ").append(startScore);
        console.log(startScore);
    });

    $(".fourthButton").on("click", function() {
        $(this).toggleClass('active');
        startScore = generatedFourthButtonValue + startScore;
        $("#yourScoreJQ").toggle(startScore);
        console.log(startScore);
    });

    //keep track of wins and losses

    //reset

});
