let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./music/music.wav");

//----- for computer generated random code-----

const init = () =>{
    computerGuess= Math.floor(Math.random() * 100);
    // console.log(computerGuess)
    document.getElementById("newGameButton").style.display= "none";  //this will hide the game area and show the welcome page
    document.getElementById("gameArea").style.display= "none";  //this will hide the game area and show the welcome page
}

//start new game.....end of the game....

const startNewGame = () => {
    document.getElementById("newGameButton").style.display= "inline"; //this will show the new game button after we end our first game.
    userNumberUpdate.setAttribute("disabled", true);
}

//event to restart the game......

const newGameBegin = () => {
    audio.play();
    window.location.reload();
}

//main logic of our app

const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value); //get user input data
        userGuess = [...userGuess, userNumber]; //storing user data in array
        document.getElementById("guesses").innerHTML = userGuess;  //showing user number on game area

    //check the value low or high
    if(userGuess.length < maxGuess){
        if (userNumber > computerGuess){
        userGuessUpdate.innerHTML = "Your Guess is high";
        userNumberUpdate.value = "";
    } else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML = "Your Guess is low";
        userNumberUpdate.value = "";
    } else{
        userGuessUpdate.innerHTML = "Hurraaayyyy it's correct";
        userNumberUpdate.value = "";
        startNewGame(); //handling end of the game
    }
} else {
    if (userNumber > computerGuess){
        userGuessUpdate.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame(); //handling end of the game
    } else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame(); //handling end of the game
    } else{
        userGuessUpdate.innerHTML = "Hurraaayyyy it's correct";
        userNumberUpdate.value = "";
        startNewGame(); //handling end of the game
    }
}
      //Displaying user  attempts number.....
    document.getElementById("attempts").innerHTML = userGuess.length;
       
    };

//---- For attempt section -----

// 1.defining the function for hiding the welcome area and displaying the game area
 
const startGame = () => {
    document.getElementById("welcomeScreen").style.display= "none"; 
    document.getElementById("gameArea").style.display= "block"; 
}

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};
const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};