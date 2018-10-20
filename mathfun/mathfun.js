// Erika Hamilton
// math fun
// Assignment 2

console.clear();
function Prompt () {
//------------------------------------ Declaring Variables
  var mean;
  var sum;
  var med;
  var max;
  var min;
  var evens;
  var odds;
  var primes;
  var power2;
  var num = "";
  var numarr = new Array();

//----------------------------------------------- Beginning of Prompt
//do while?
  while (num != '-1') {
    num = +prompt("Enter a set of positive numbers, Enter -1 when you are finished.");
    numarr.push(Number(num)); // Pushes into the array as ints
  }
//Getting the Array into order and excluding the -1.
  numarr.pop(); //Must remove last element since it was a -1.
  numarr.sort(function(a,b) { return a-b});  //Set the list of numbers into ascending order, was stolen from w3schools, but makes sense.

  //saftey
  console.log(num); //Prints the sequence entered
  console.log(numarr); //prints sorted array

  //Delete this all eventually, half of it is useless,
  var max = Max(numarr);
  var min = Min(numarr);
  var med = Median(numarr);
  var mean = Mean(numarr);
  var odds = Odd(numarr);
  var evens = Even(numarr);
  var primes = Primes(numarr);
  var power2 = PowerTwo(numarr);
  console.log("The max is:", max);
  console.log("The min is:", min);
  console.log("The med is:", med);
  console.log("The mean is:", mean);
  console.log("The odd count is:", odds);
  console.log("The even count is:", evens);
  console.log("The primes count is:", primes);
  console.log("The powers count is:", power2);

//---------------------------------------------------- Mean Function
function Mean(numarr) {
  sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum = sum + numarr[i];
  }
  mean = sum/num.length;
  return Math.floor(mean);
}

//------------------------------------------------  Median Function

function Median(numarr) {
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
  return Math.floor(med);
}

//------------------------------------------------ Maximum Function

function Max(numaar) {
  max = numarr[numarr.length-1];
  return max;
}

//------------------------------------------------ Minimum Function

function Min(numarr) {
  min = numarr[0];

  return min;
}

//------------------------------------------------ Even Function

function Even(numarr) {
  for( i = 0; i < numarr.length; i++) {
    // check = numarr[i] % 2;

    if((numarr[i] % 2) == 0) {

    evens = evens + 1;

    }

    else { //it's odd
  }
}
  return evens;
}
//------------------------------------------------ Odd Function

function Odd(numarr) {
  for( i = 1; i < numarr.length; i++) {
    check = numarr[i] % 2;

    if(check != 0) {
    odds =+ 1;
    }

    else {}
}

  return odds;
}

//------------------------------------------------ Powers of 2 Function

function PowerTwo(numarr) {
  for( i = 0; i < numarr.length; i++) {
    x = numarr[i];
    rootval = Math.pow(x, 1/x);

    if(rootval == 2) {
      power2 =+ 1;
    }

    else {
    }
}

  return power2;
}
//------------------------------------------------ Primes Function

function Primes(numarr) {
  for( i = 0; i < numarr.length; i++) {
    x = numarr[i];
    // div2 = x % 2;
    fsquare = Math.floor(Math.sqrt(numarr));
    //Prime iff it is not div. by any prime <= its square root
    for(x > 2; i <= fsquare; i++) {
      if(x % i == 0){
      //It's not prime, so we will count when it is
    }
      else {
        primes =+ 1;
        //it is prime
      }
    }
  }
return primes;
}

//------------------------------------------------ Putting it all into html
document.getElementById("seq").innerHTML = "[" + numarr + "]";
document.getElementById("max").innerHTML = Max(numarr);
document.getElementById("min").innerHTML = Min(numarr);
document.getElementById("med").innerHTML = Median(numarr);
document.getElementById("mean").innerHTML = Mean(numarr);
document.getElementById("odds").innerHTML = Odd(numarr);
document.getElementById("evens").innerHTML = Even(numarr);
document.getElementById("primes").innerHTML = Primes(numarr);
document.getElementById("power2").innerHTML = PowerTwo(numarr);

}
