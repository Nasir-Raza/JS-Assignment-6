// words suggestion app

// 1. create an empty array with the name of lattersArray;
// 2. create a input, get user value and store in a variable;
// 3. create an Alphabets array which is holding Alphabets;
// 4. create a function call RandomWords(), it can generate random latter using available Alphabets, randomize letters can make a word which is find by user;
// 5. words can hold 3 to 6 letters
// 6. user have 3 life to find the word
// 7. if user is input the correct word it will win other wise game Over after 3 attempts.



var letterArray = [];
var alphabetsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var userName = "";
var randomString = "";
var message = "";
let count = 0;

do{
    userName = prompt("Enter user name");
    randomWord();
    count++;
    
}while( count < 3);

alert(message);

function randomWord(){
    var bigDecimal = 0;
    var indexNum = 0;

    for (var i = 0; i < userName.length; i++) {
        bigDecimal = Math.random();
        indexNum = Math.floor(bigDecimal * 25);
        randomString += alphabetsArray[indexNum];
    }

    letterArray.push(randomString);
    randomString = "";
    console.log("User name converted to lower case: ", userName.toLowerCase());
    console.log(letterArray);
    
    
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i] === userName.toLowerCase()){
            message = "You have won!. Input user name is matched";
            break;           
        } else {
            message = "Game over!. Input user name is not matched";
        }
    }
}