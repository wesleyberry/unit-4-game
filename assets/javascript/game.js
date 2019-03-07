$(document).ready(function() {
    
    //Declare and assign variables:
    var startScore = 0;
    var wins = 0;
    var losses = 0;
    var generatedFirstButtonValue;
    var generatedSecondButtonValue;
    var generatedThirdButtonValue;
    var generatedFourthButtonValue;

    //Generates a random target score:
    function targetScoreFunc() {
        min = Math.ceil(19);
        max = Math.floor(120);
        var targetScore = Math.floor(Math.random() * (max - min)) + min;
        console.log(targetScore);
        $("#targetScoreJQ").append(targetScore);
        return targetScore;
    }

    var theRandomScore = targetScoreFunc();

        firstMin = Math.ceil(1);
        firstMax = Math.floor(12);
        generatedFirstButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
        generatedSecondButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
        generatedThirdButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
        generatedFourthButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;

    // console.log(theRandomScore);
    function checkWin(){
        if(startScore == theRandomScore) {
            wins++;
            console.log("Wins: " + wins);
            $("#winsJQ").text(wins);
            startScore = 0;
            generatedFirstButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            generatedSecondButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            generatedThirdButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            generatedFourthButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            theRandomScore = targetScoreFunc();
            $("#targetScoreJQ").text(theRandomScore);
        } 
        else if (startScore > theRandomScore) {
            losses++;
            console.log("Losses: " + losses);
            $("#lossesJQ").text(losses);
            startScore = 0; 
            generatedFirstButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            generatedSecondButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            generatedThirdButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            generatedFourthButtonValue = Math.floor(Math.random() * (firstMax - firstMin)) + firstMin;
            theRandomScore = targetScoreFunc();
            $("#targetScoreJQ").text(theRandomScore);
        }
    }

    // Click Events:
    $(".firstButton").on("click", function() {
        $(this).toggleClass('active');
        checkWin();
        startScore = generatedFirstButtonValue + startScore;
        $("#yourScoreJQ").text(startScore);
        console.log(startScore);
    });

    $(".secondButton").on("click", function() {
        $(this).toggleClass('active');
        checkWin();
        startScore = generatedSecondButtonValue + startScore;
        $("#yourScoreJQ").text(startScore);
        console.log(startScore);
    });

    $(".thirdButton").on("click", function() {
        $(this).toggleClass('active');
        checkWin();
        startScore = generatedThirdButtonValue + startScore;
        $("#yourScoreJQ").text(startScore);
        console.log(startScore);
    });

    $(".fourthButton").on("click", function() {
        $(this).toggleClass('active');
        checkWin();
        startScore = generatedFourthButtonValue + startScore;
        $("#yourScoreJQ").text(startScore);
        console.log(startScore);
    });

});
