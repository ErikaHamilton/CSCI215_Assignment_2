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

//----------------------------------------------- Function Calls
  document.getElementById("seq").innerHTML = "[" + numarr + "]";
  var max = Max(numarr);
  var min = Min(numarr);
  var med = Median(numarr);
  var mean = Mean(numarr);
  var odds = Odd(numarr);
  var evens = Even(numarr);
  var primes = Primes(numarr);
  var power2 = PowerTwo(numarr);

}

//---------------------------------------------------- Mean Function
function Mean(numarr) {
  var sum = 0;
  for (var i = 0; i < numarr.length; i++) {
    sum = sum + parseInt(numarr[i]);
  }
  var mean = 0;
  mean = sum / numarr.length;
  mean = Math.floor(mean);
  document.getElementById("mean").innerHTML = mean;
}

//------------------------------------------------  Median Function

function Median(numarr) {
    var medIndex = Math.floor(numarr.length / 2);//This next function grabs the index of the closest
    var med = parseInt(numarr[medIndex]);
    document.getElementById("med").innerHTML = med;
}

//------------------------------------------------ Maximum Function

function Max(numarr) {
  var max = numarr[numarr.length-1];
  document.getElementById("max").innerHTML = max;
}

//------------------------------------------------ Minimum Function

function Min(numarr) {
  var min = numarr[0];
  document.getElementById("min").innerHTML = min;
}

//------------------------------------------------ Even Function

function Even(numarr) {
  var elementCt = numarr.length;
  var evenCt = 0;
  for(var i = 0; i < elementCt; i++) {
    var check = parseInt(numarr[i]) % 2;
    if(check == 0) {
      evenCt = evenCt + 1;
    }
}
  document.getElementById("evens").innerHTML = evenCt;

}
// //------------------------------------------------ Odd Function

function Odd(numarr) { //good.
  var elementCt = numarr.length;
  var oddsCt = 0;
  for(var i = 0; i < elementCt; i++) {
    var check = parseInt(numarr[i]) % 2 ;
    if(check != 0) {
    oddsCt = oddsCt + 1;
    }
}

  document.getElementById("odds").innerHTML = oddsCt;
}

//------------------------------------------------ Powers of 2 Function

function PowerTwo(numarr) {
  var elementCt = numarr.length;
  var x = 0;
  var power2Ct= 0;
  check = 0;
  for(var i = 0; i <= elementCt; i++) {
    p = parseInt(numarr[i]);
    check = Math.log2(p);
    if(Number.isInteger(check) && (p > 0)) {
      power2Ct = power2Ct + 1;
    }
  }

  document.getElementById("power2").innerHTML= power2Ct;
}

//------------------------------------------------ Primes Function

function Primes(numarr) {
  var elementCt = numarr.length;
  var fsquare = 0;
  var primeCt = 0;
  for(var i = 0; i < elementCt; i++) {
    var x = parseInt(numarr[i]);
    fsquare = Math.floor(Math.sqrt(x));
//Thm: prime iff it is not div. by any prime <= its square root
    if (x == 0 || x == 1 || x == 2 || x == 3){
        primeCt ++;
    }
    else if (x > 1){
      var x_is_div_by_j = false; // assume prime
      for(var j = 2; j <= fsquare; j++) {
        if(x % j != 0){
          //not divisible by j, keep going
        }
        else {
          x_is_div_by_j = true;
          break;
        }
      }
        if (x_is_div_by_j) {
          primeCt++;
        }
      }
    }
    document.getElementById("primes").innerHTML = primeCt;
  }
