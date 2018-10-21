// Erika Hamilton
// Assignment 2
// Word Count JS

console.clear();
function Parse() {
//------------------------------------ Declaring Variables
  var totalCount;
  var wordString;
  var comp;
  var i;
  var j;
  var k;
  var matched;
  var output = new Array();
  var wordArr = new Array();
  var inputArr = new Array();

//------------------------------------ Organizing Variables
  inputArr = document.getElementById("input").value;
  console.log(inputArr);
 //Changes user input into upper case
  wordArr = inputArr.toUpperCase();
  console.log(wordArr);
  wordArr = wordArr.split( ",");
  console.log(wordArr);
  console.log(wordArr.length);
  var k = wordArr.length;
  //loops through each element to copy
  for (i = 0; i < k; i++) {
    var comp = wordArr[i]; //creates a copy to compare
    var matched = false; //Makes them all unknown
    //loops through each element again and compares elements

    for(j = 0; j < wordString.length; j++) {
    if (comp == wordString[i]) {
      totalCount = totalCount[i] + 1
      matched = true;
      break;
    }
  }
  if (matched == false) {
    //creates final arrays of information
    wordString.push(comp);
    totalCount.push(1);
  }
  output = output + wordString[i] + "" + totalCount[i];
  console.log(output);
  console.log(totalCount);
}

document.getElementById("output").innerHTML = output;
}
