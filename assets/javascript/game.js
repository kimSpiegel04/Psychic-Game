// computer options
var computerPicks = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// computer makes a pick and it stores here (made outside of the function)
var computerFunction = computerPick();
console.log(computerFunction);

// shown variables
var win = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

//get computer choice
function computerPick(){
    var computerChoice = computerPicks[Math.floor(Math.random() * computerPicks.length)];
    return computerChoice;
}
//OK

//display guesses (letters) made
var guesses = document.getElementById('letters');
var loopArray = function(){
    for(var i=0;i<guessesMade.length; i++){
        for(var i=0; i<8;i++){
            document.getElementById("letters").innerHTML = guessesMade.join(", "); 
        }  
    }
}

//OK

//check for win/loss
function checkForWin(computerFunction,userGuess){
    if (computerFunction===userGuess){
        win++;
        document.getElementById('wins').innerHTML = win;
        document.getElementById('message').innerHTML = 'You won! Press any key to start again.';
        reset();

    } else {
        guessesLeft--;
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        if (guessesLeft===0){
            losses++;
            document.getElementById('losses').innerHTML = losses;
            document.getElementById('message').innerHTML= `You lost. The answer was '${computerFunction}' Press any key to start again.`
            reset();
        }
    }
}

//reset game
function reset() {
    computerFunction = computerPick();
    guessesLeft=9;
    guessesMade=[];
    guesses.innerHTML='';
    // document.getElementById('message').innerHTML= ` `;
}


document.onkeyup=function(event){
    // computerFunction;
    var userGuess=event.key.toLowerCase();
    guessesMade.push(userGuess);
    loopArray();

    console.log(computerFunction);
    console.log(guessesMade);
    console.log(userGuess);

    checkForWin(computerFunction,userGuess);
}
