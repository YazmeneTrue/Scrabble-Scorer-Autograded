// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

     if (oldPointStructure[pointValue].includes(word[i])) {
      letterPoints += `Points for '${word[i]}': ${pointValue}\n`
     }

    }
  } 
  return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userAnswer = '';

function initialPrompt() { 
   userAnswer=  input.question("Let's play some scrabble! \n Enter a word: ");
}

////////////// TASK 2 //////////

function simpleScorer(word){
 for (let i = 0; i < word.length; i){ 
      break;
      } 
      return word.length;
   }

function vowelBonusScorer (word){
  word = word.toUpperCase();

  let vowels = ['A','E','I','O','U'];
  let consts = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','Y','Z'];
  let score = 0;

 for (let i=0;i<word.length;i++){
   if (vowels.includes(word[i])){
     score +=3; console.log(`Points for '${word[i]}': 3`);
   } else if (consts.includes(word[i])){
     score++;console.log(`Points for '${word[i]}': 1`);
 }
 }
  return score; 
}

function scrabbleScorer(word){
  word = word.toUpperCase();
  let score = 0;
  for(let i=0;i<word.length;i++){
    if (newPointStructure.hasOwnProperty(word[i])){
      score += newPointStructure[word[i]][key]; console.log(`Points for '${word[i]}': ${newPointStructure[word[i]][key]}`)
    } else console.log(`Points for '${word[i]}': ${newPointStructure[i]}`)
  } 
  return score
};
// making objects with the functions in them     
let vowelBonusObj = {
  name : "Bonus Vowels",
  description : "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction : vowelBonusScorer
}
let simpleScoreObj = {
  name : "Simple Scorer",
  description : "Each letter is worth 1 point.",
  scorerFunction : simpleScorer
}
let ScrabbleObj ={
  name :"Scrabble",
  description : "The traditional scoring algorithm.",
  scorerFunction : scrabbleScorer
}

const scoringAlgorithms = [simpleScoreObj,vowelBonusObj,ScrabbleObj];

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?

    0 - Simple: One point per character
    1 - Vowel Bonus: Vowels are worth 3 points
    2 - Scrabble: Uses scrabble point system`)

  let scoreChoice = Number(input.question( "\n Enter 0, 1, or 2:"));
   return scoringAlgorithms[scoreChoice];
}

function transform(oldPointStructure) {
  let fixedStructure = {};
  for(let key in oldPointStructure){
    let letters = oldPointStructure[key];
    for(let i=0;i<letters.length;i++){
      let letterIndex = letters[i].toLowerCase();
      fixedStructure[letterIndex] = Number(key);

    }
  }
   return fixedStructure;
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   let scoreObject = scorerPrompt()
   let score = scoreObject.scorerFunction(userAnswer);
   
   console.log(`Score for '${userAnswer}': ${score}`);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
