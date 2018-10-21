// Erika Hamilton
// Assignment 2
// Word Count JS

console.clear();
function Parse() {
var inputArr = document.getElementById("input").innerHTML;
var wordArr = inputArr.toUpperCase(); //Changes user input into upper case
wordArr = wordArr.replace(/[!"#$%&'()*+,-./:;<=>?@[^_`{|}~]/,"");
var totalCount;
var wordString;
//loops through each element to copy
for (i = 0; i < wordArr.length; i++) {
  var comp = wordArr[i]; //creates a copy to compare
  var matched = false; //Makes them all unknown
  //loops through each element again and compares elements
  for(j = 0; j < wordString.length; j++) {
    if (comp = wordString[i]) {
      totalCount = totalCount[i] + 1
      matched = true;
      break;
    }
  }
  if (matched = false) {
    //creates final arrays of information
    wordString.push(comp);
    totalCount.push(1);
  }
  var output = new Array();
  output = output + wordString[i] + "" + totalCount[i];
  console.log(output);
  console.log(totalCount);
}

document.getElementById("output").innerHTML = output;
}
