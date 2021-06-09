/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione 
per capire se la parola inserita è palindroma
*/

// var inputText = (prompt('inserisci una parola')).toLowerCase();
// var sentenceOutput = document.getElementById('sentence');

// function revertWord(word){
//     var wordReversed = word.split('').reverse().join('').toLowerCase();    
//     return wordReversed;
// }

// function paliCheck (word1, word2){
//     if(word1 === word2){
//         sentenceOutput.innerHTML = 'la parola è palindroma';
//     } else {
//         sentenceOutput.innerHTML = 'la parola non è palindroma';
//     }
// }

// var invertedWord = revertWord(inputText);
// var sentence = paliCheck(inputText, invertedWord)


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Infine, dichiariamo chi ha vinto.
*/

var outputElement = document.getElementById('evenorodd');
var evenOddInput = prompt('scrivi pari o dispari').toLowerCase();
var numUser = parseInt(prompt('inserisci un numero da 1 a 5')); 

while (numUser >= 1 && numUser < 5 ){
    numUser = parseInt(prompt('Non hai inserito un numero tra 1 e 5, riprova'));
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var numPC = getRandomNumber(1,5)
var total = sum(numUser, numPC);

console.log(numPC);
console.log(numUser);
console.log(total);

if (isEven(total) && evenOddInput === 'pari'){
    outputElement.innerText = 'Hai scelto pari ' + 'Hai Vinto! Il totale è ' + total;
} else {
    outputElement.innerText = 'Hai scelto dispari ' + 'Hai Perso! Il totale è ' + total;
}
