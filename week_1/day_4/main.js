console.log('connected');

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ];

let guess = document.getElementById('movie-guess');
let clueArea = document.getElementById('clue');
let hintArea = document.getElementById('clue2');
let warning = document.getElementById('warning');
let guessCount = 3;

let curMovie;

function setMovie(){
    //this function initializes the screen for a new round of guesses
    curMovie = movies[Math.floor(Math.random() * 11)];
    clueArea.innerHTML = curMovie.explanation;
    guessCount = 3;
}

setMovie();


function checkGuess(event){
    event.preventDefault();
    console.log("hello");
    let userGuess = guess.value;
    console.log("User guess: " + userGuess);
    guess.value = "";

    //if the user has the correct guess
    if (userGuess === curMovie.title){
        setMovie();
        warning.innerHTML = "";         //question: why do sometimes I change with ___.value instead of this
        hintArea.innerHTML = "";

    //if the user guessed incorrectly, deduct from their guesses and tell them how many left
    } else {
        guessCount--;

        if (guessCount > 0){
           warning.innerHTML = `Incorrect, you have ${guessCount} guesses left`; 
        } else {        //QUESTION/stub: how could I get this to show the message for a certain number of times, then go away and reset?
            warning.innerHTML = 'Incorrect, no more guesses. New question!';
            setMovie();
            hintArea.value= "";
        }
    }
    
}

function showHint(){
    hintArea.innerHTML = curMovie.hint;
}