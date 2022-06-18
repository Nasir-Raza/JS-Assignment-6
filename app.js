// words suggestion app

// 1. create an empty array with the name of lattersArray;
// 2. create a input, get user value and store in a variable;
// 3. create an Alphabets array which is holding Alphabets;
// 4. create a function call RandomWords(), it can generate random latter using available Alphabets, randomize letters can make a word which is find by user;
// 5. words can hold 3 to 6 letters
// 6. user have 3 life to find the word
// 7. if user is input the correct word it will win other wise game Over after 3 attempts.

function randomWord() {

    var randomString = "";
    var alphabetsArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var max = 6, min = 3;
    var indexNum = 0;
    var indexNum1 = 0;

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

    // Calling matchUserName function with two arguments
    matchUserName(indexNum, randomString);
}

function matchUserName(indNum, randString) {

    var userName = "";
    let counter = 0;

    console.log("Index number received from randomWord function: ", indNum);
    console.log("Rondom word received from randomWord function: ", randString);

    do {
        userName = prompt("Please enter string of " + indNum + " characters long for matching the random word");

        if (userName === null) {
            break;
        }
        else {
            if (userName === "") {
                alert("Please enter valid string to match with the random word");
            }
            else {
                console.log("Input user name converted to lower case: ", userName.toLowerCase());

                if (randString === userName.toLowerCase()) {
                    alert("Input user name is matched. Congratulations! you have won the game");
                    break;
                }
                else {
                    if (counter < 2) {
                        alert("Input user name is not matched. You have " + (2 - counter) + " more chance. Sorry! please try again");
                    }
                    else {
                        alert("Input user name is not matched. Hard luck! Game is over");
                    }
                }
                counter++;
            }
        }
    }
    while (counter < 3);
}
