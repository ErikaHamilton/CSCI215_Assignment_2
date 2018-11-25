// Erika Hamilton
// math fun
// Assignment 2

console.clear();
  var numarr = new Array();
//----------------------------------------------- Beginning of Prompt Function
function Prompt () {
  do {
    var num = prompt("Enter a set of positive numbers, Enter -1 when you are finished.");
    numarr.push(num);}
  while (num != '-1') {
  }
  //Getting the Array into order and excluding the -1.
  numarr.pop();
  numarr.sort(function(a,b) { return a-b});  //Set the list of numbers into ascending order, was stolen from w3schools, but makes sense.

//----------------------------------------------- FLAGS
  console.log(numarr); //prints sorted array
//----------------------------------------------- Function Calls
  document.getElementById("seq").innerHTML = "[" + numarr + "]";
  var max = Max(numarr);
  var min = Min(numarr);
  var med = Median(numarr);
  var mean = Mean(numarr);
  // var odds = Odd(numarr);
  var evens = Even(numarr);
  var primes = Primes(numarr);
  var power2 = PowerTwo(numarr);

}

//---------------------------------------------------- Mean Function
function Mean(numarr) {
  var sum = 0;
  for (var i = 0; i < numarr.length; i++) {
    sum = sum + numarr[i];
  }
  console.log("total sum: " + sum);
  var mean = 0;
  mean = sum / numarr.length;

  mean = Math.floor(mean);
  document.getElementById("mean").innerHTML = mean;
  return mean;
}

//------------------------------------------------  Median Function

function Median(numarr) {
    var medIndex = Math.floor(numarr.length / 2);//This next function grabs the index of the closest
    var med = numarr[medIndex];
    med = med[medIndex];
    document.getElementById("med").innerHTML = med;
 return med;
}

//------------------------------------------------ Maximum Function

function Max(numarr) {
  var max = numarr[numarr.length-1];
  document.getElementById("max").innerHTML = max;
  return max;
}

//------------------------------------------------ Minimum Function

function Min(numarr) {
  var min = numarr[0];
  document.getElementById("min").innerHTML = min;
  return min;
}

//------------------------------------------------ Even Function

function Even(numarr) {
  var elementCt = numarr.length;
  console.log("Array Length:" +elementCt);
  for(var i = 0; i < elementCt; i++) {
    var check = numarr[i] % 2;
    if(check == 0) {
      var evenCt = evenCt + 1;
      console.log("Evens:" + evenCt);

    }

    else {

  }
}
  document.getElementById("evens").innerHTML = evenCt;

  return evenCt;
}
// //------------------------------------------------ Odd Function

function Odd(numarr) {
  var elementCt = numarr.length;
  for(var i = 1; i < elementCt; i++) {
    var check = numarr[i] % 2;
    if(check != 0) {
    var  oddsCt = oddsCt + 1;
    }
    console.log("Odds: " + oddsCt);

    else {

    }
}

  document.getElementById("odds").innerHTML = oddCt;
  return oddCt;
}

//------------------------------------------------ Powers of 2 Function

function PowerTwo(numarr) {
  var elementCt = numarr.length;
  for(var i = 0; i < elementCt; i++) {
    var x = numarr[i];
    var rootval = Math.pow(x, 1/x);

    if(rootval == 2) {
      var power2Ct = power2Ct + 1;
    }

    else {
    }
}

  document.getElementById("power2").innerHTML= power2Ct;

  return power2Ct;
}
//------------------------------------------------ Primes Function

function Primes(numarr) {
  var elementCt = numarr.length;
  for(var i = 0; i < elementCt; i++) {
    var x = numarr[i];
    // div2 = x % 2;
    var fsquare = Math.floor(Math.sqrt(x));
    //Prime iff it is not div. by any prime <= its square root
    for(x > 2; i <= fsquare; i++) {
      if(x % i == 0){
      //It's not prime, so we will count when it is
    }
      else {
        var primeCt =+ 1;
        //it is prime
      }
    }
  }
 document.getElementById("primes").innerHTML = primeCt;

 return primeCt;
}
