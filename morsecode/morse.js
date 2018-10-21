// Erika Hamilton
// Assignment 2
// Morse Code JS

console.clear();
var divNode = document.getElementById("translate");

function Translate () {
//------------------------------------ Declaring Variables
  var input = new Array();
  var ENAlph = new Array();
  var input = document.getElementById("input").value;
  console.log(input);
  var output = "";
  var ENAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
  var MorAlph = [".-", "=...","-.-.","-..",".","..-.", "--.","....","..",".---","-.-",".-..",
        "--","-.","---",".--.","--.-",".-.", "...","-","..-","...-",".--","-..-",
        "-.--","--..",".-","-...","-.-.","-..", ".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.", "--.-",".-.","...","-","..-","...-",
        ".--","-..-","-.--","--.."," "];
//------------------------------------ Parsing
  input = input.split(" ");
//------------------------------------ Looping
  for( i = 0; i < input.length; i++) {
    var letter = input[i]; //Creates an array to check
    for( j = 0; j < MorAlph.length; i++) {
      if(letter == MorAlph[j]) { //matches Morse with English equivalent
        output = output + ENAlph[j]; //replaces Morse with English
      }
    }
  }
document.getElementById("output").innerHTML = output;
}
