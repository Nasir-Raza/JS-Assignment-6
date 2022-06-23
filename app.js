/* Coded by 
	 Name	: Nasir Raza
	 Roll #	: KH01210813250
*/

// words suggestion app

// 1. create an empty array with the name of lattersArray;
// 2. create a input, get user value and store in a variable;
// 3. create an Alphabets array which is holding Alphabets;
// 4. create a function call RandomWords(), it can generate random latter using available Alphabets, randomize letters can make a word which is find by user;
// 5. words can hold 3 to 6 letters
// 6. user have 3 life to find the word
// 7. if user is input the correct word it will win other wise game Over after 3 attempts.

var randomString = "";
var alphabetsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var max = 6, min = 3;
var indexNum = 0;
var indexNum1 = 0;
var inputString = "";
var counter = 0;
var message = "";

function randomWord() {

    // Between any two numbers i.e. 6 and 3
    indexNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(indexNum);

    max = 25;

    for (var i = 0; i < indexNum; i++) {

        // Between 0 and max i.e. 0 and 25
        indexNum1 = Math.floor(Math.random() * (max + 1));
        console.log(indexNum1);
        randomString += alphabetsArray[indexNum1];
    }
    console.log(alphabetsArray);
    console.log("Rondom word generated in randomWord function: ", randomString);

    document.getElementById("genrandword").disabled = true;

    document.getElementById("step2").innerHTML = "<div id='step2' class='submain'><label class='submain'>Step 2: Enter string of " + indexNum + " characters long for matching the random word</label><input type='text' id='inputstring' placeholder='Please enter the text...' maxlength='" + indexNum + "'/><button id='okay' onClick='matchInputString()'>OK</button><button id='cancel' onClick='cancelGame(true)'>Cancel</button></div>";

    setFocusInputString()
}

function matchInputString() {

    // var message = "";
    inputString = document.getElementById("inputstring").value;

    if (inputString === "") {
        alert("Please enter valid string to match with the random word");
        setFocusInputString()
    }
    else {
        console.log("Input string converted to lower case: ", inputString.toLowerCase());
        if (randomString === inputString.toLowerCase() && counter === 0) {
            showResult("First Attempt:", true, counter);
            disableTextButtons();
            counter++;
        } else if(randomString === inputString.toLowerCase() && counter === 1) {
            showResult("Second Attempt:", true, counter);
            disableTextButtons();
            counter++;
        } else if(randomString === inputString.toLowerCase() && counter === 2) {
            showResult("Third Attempt:", true, counter);
            disableTextButtons();
            counter++;
        }
        if (randomString !== inputString.toLowerCase() && counter === 0) {
            showResult("First Attempt:", false, counter);
            setFocusInputString();
            counter++;
        } else if(randomString !== inputString.toLowerCase() && counter === 1) {
            showResult("Second Attempt:", false, counter);
            setFocusInputString();
            counter++;
        } else if(randomString !== inputString.toLowerCase() && counter === 2) {
            showResult("Third Attempt:", false, counter);
            disableTextButtons();
            counter++;
        }
    }
}

function cancelGame(isCancel) {

    if (isCancel) {
        alert("You have cancelled the game");
    }
    
    max = 6;
    min = 3;
    indexNum = 0;
    indexNum1 = 0;
    randomString = "";
    inputString = "";
    counter = 0;
    message = "";
    document.getElementById("step2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("genrandword").disabled = false;
}

function setFocusInputString() {

    document.getElementById("inputstring").value = "";
    document.getElementById("inputstring").focus();
}

function showResult(messageReceived, isMatched, counterReceived) {
    var characterFound = 0;

    if (isMatched) {
        message = "<div id='result' class='success'><label class='submain'>" + messageReceived + "<br/><b>Input string has matched. Congratulations! you have won the game.<br/>Do you want to play again?</b></label><button id='yes' onClick='cancelGame(false)'>Yes</button><button id='no' onClick='endGame(true)'>No</button></div>";
    }
    else if (!isMatched && counterReceived < 2) {
        
        for (var i = 0; i < randomString.length; i++ ) {
            for(var j = 0; j < inputString.length; j++) {
                if (randomString.charAt(i) === inputString.charAt(j).toLowerCase()) {
                    characterFound++;
                }
            }
        }
        if (characterFound > 0){
            message = "<div id='result' class='failure'><label class='submain'>" + messageReceived + "<br/><b>Input string not matched but you have close to match with random word.<br/>You have " + (2 - counter) + " more chance.<br/>Well tried! please try again</b></label></div>";    
        } else {
            message = "<div id='result' class='failure'><label class='submain'>" + messageReceived + "<br/><b>Input string has not matched. You have " + (2 - counter) + " more chance.<br/>Sorry! please try again</b></label></div>";
        }
    }
    else if (!isMatched && counterReceived === 2) {

        for (var i = 0; i < randomString.length; i++ ) {
            for(var j = 0; j < inputString.length; j++) {
                if (randomString.charAt(i) === inputString.charAt(j).toLowerCase()) {
                    characterFound++;
                }
            }
        }
        if (characterFound > 0){
            message = "<div id='result' class='failure'><label class='submain'>" + messageReceived + "<br/><b>Input string not matched but you have close to match with random word.<br/>You have no more chance.<br/>Do you want to play again?</b></label><button id='yes' onClick='cancelGame(false)'>Yes</button><button id='no' onClick='endGame(false)'>No</button></div>";    
        } else {
        message = "<div id='result' class='failure'><label class='submain'>" + messageReceived + "<br/><b>Input string has not matched. You have no more chance.<br/>Do you want to play again?</b></label><button id='yes' onClick='cancelGame(false)'>Yes</button><button id='no' onClick='endGame(false)'>No</button></div>";
        }
    }
    document.getElementById("result").innerHTML = message;
}

function disableTextButtons() {
    document.getElementById("inputstring").disabled = true;
    document.getElementById("okay").disabled = true;
    document.getElementById("cancel").disabled = true;   
}

function endGame(isSuccessful) {
    if (isSuccessful) {
        document.getElementById("main").innerHTML = "<label class='main'>Congratulations! You have won the game</label>";    
    }
    else {
        document.getElementById("main").innerHTML = "<label class='main'>Hard luck! You have lost the game</label>";
    }
    
    document.getElementById("submain").innerHTML = "<label class='submain'>Thanks for playing the game. Good bye!</label>";
    document.getElementById("step2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}