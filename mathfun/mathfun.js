// Erika Hamilton
// math fun
// Assignment 2

console.clear();
window.prompt("")
//------------------------------------ Declaring Variables
  var mean;
  var sum;
  var med;
  var max;
  var min;
  var evens;
  var odds;
  var primes;
  var squares;
  var num = "";
  var numarr = new Array();

//----------------------------------------------- Beginning of Prompt
  while (num != '-1') {
    num = +prompt("Enter a set of positive numbers seperated by commas!", "Enter -1 when you are finished.").split(",");
    //Parses string
    numarr.push(Number(num)); // Pushes into the array as ints
  }
//Getting the Array into order and excluding the -1.
  numarr.pop(); //Must remove last element since it was a -1.
  numarr.sort(function(a,b) { return a-b});  //Set the list of numbers into ascending order, was stolen from w3schools, but makes sense.

  //saftey
  console.log(num); //Prints the sequence entered
  console.log(numarr) //prints sorted array

//---------------------------------------------------- Mean Function
function mean(numarr) {
  sum = 0;
  for (var i = 0; i < num.length; i++;) {
    sum = sum + numarr[i];
  }
  mean = sum/num.length;
  return mean;
}

//------------------------------------------------  Median Function

function median(numarr) {
  var medIndex = 0;
  if (num.length % 2 !=0) //Mod division will split the sorted array in half
  {
    medIndex = Math.floor(num.length / 2);//This next function grabs the index of the closest
    med = numarr[medIndex];
  }
  else if(num.length % 2 == 0)
  {
    med = (numarr[i] + numarr[index-1]) / 2;//Returns an average if the num.length is even.
  }
  return med;
}

//------------------------------------------------ Maximum Function

function Max(numaar) {
  max = numarr[0];
  return max;
}

//------------------------------------------------ Minimum Function

function Min(numarr) {

  min = numarr[numarr.length-1];

  return min;
}

//------------------------------------------------ Even Function

function Even(numarr) {
  for( i = 0; i < numarr.length; i++) {
    if()
  }

  return evens;
}

//------------------------------------------------ Odd Function

function Odd(numarr) {

  return odds;
}

//------------------------------------------------ Squares Function

function Squares(numarr) {

  return squares;
}
//------------------------------------------------ Primes Function

function Primes(numarr) {

return primes;
}
