/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione 
per capire se la parola inserita è palindroma
*/

var inputText = (prompt('inserisci una parola')).toLowerCase();
var sentenceOutput = document.getElementById('sentence');

function revertWord(word){
    var wordReversed = word.split('').reverse().join('').toLowerCase();    
    return wordReversed;
}

function paliCheck (word1, word2){
    if(word1 === word2){
        sentenceOutput.innerHTML = 'la parola è palindroma';
    } else {
        sentenceOutput.innerHTML = 'la parola non è palindroma';
    }
}

var invertedWord = revertWord(inputText);
var sentence = paliCheck(inputText, invertedWord)


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Infine, dichiariamo chi ha vinto.
*/