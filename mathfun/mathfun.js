// Erika Hamilton
// math fun
// Assignment 2

console.clear();
window.prompt("")
function mathFun() {

  //Declaring Variables
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

//Beginning of Prompt
  while (num != '-1') {
    num = +prompt("Enter a set of positive numbers seperated by commas!", "Enter -1 when you are finished.").split(",");
    //Parses string
    numarr.push(Number(num)); // Pushes into the array as ints
  }

  //Must remove last element since it was a -1.
  numarr.pop();

  //Set the list of numbers into ascending order, was stolen
  //from w3schools, but makes sense.
  numarr.sort(function(a,b) { return a-b});
  console.log(num); //Prints the sequence

// ----  Finding the Mean ------ \\
  sum = 0;
  for (var i = 0; i < num.length; i++;) {
    sum = sum + numarr[i];
  }
  mean = sum/num.length;

  //safety
  console.log("Array Length: " + num.length);
  console.log("Sum: " + sum);
  console.log("Mean: " + mean);
  document.getElementById('mean') = mean;




// ----  Finding the Median ------ \\
  var medIndex = 0;
  //Mod division will split the sorted array in half
  if (num.length % 2 !=0)
  {
    //this next function grabs the index of the closest
    medIndex = Math.floor(num.length / 2);
    med = numarr[medIndex];
  }
  else if(num.length % 2 == 0)
  {

  }

}






// fuction findPrime()
//
//
//
//
// // Part 1
// // ---------------------------------------------
// var divNode = document.getElementById("mathfun");
// var tbldivNode = document.getElementById("prettytable");
// // ---------------------------------------------
//
//
// // ---------------------------------------------
// var tNode = document.createElement("table");
//
// var tNode = document.createCaption("Math Fun!");
//
// var tNode = document.createTHead("Below is your requested math outputs!");
//
// // ---------------------------------------------
//
// // Insert an output node/ table node
// //  Finish table, create the actual functions dumbass
//
// // ---------------------------------------------
// var hrNode = document.createElement("hr");
// divNode.appendChild(hrNode);
// // ---------------------------------------------
//
//
//
//
// // ---------------------------------------------
//   var imgNode = document.createElement("img");
//   var srcAttr = document.createAttribute("src");
//   srcAttr.value= "http://munsellb.people.cofc.edu/img/prettypicture.jpg";
//   imgNode.setAttributeNode(srcAttr);
//   divNode.appendChild(imgNode);
//
//
//
// // ---------------------------------------------
