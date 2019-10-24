// esercizio fizzbizz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var a,b;
// numero inizia gia da 1 fino a 100
for (var i = 1; i < 101; i++) {
  // inizialmente ho messo per primo il 3 ma siccome la condizione si verificava saltava gli altri passaggi
  if (i % 15 == 0) {
    console.log("FizzBuzz");
    a = "FizzBuzz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    a = "Buzz";
  }else if(i % 3 == 0){
    console.log("Fizz");
    a = "Fizz";
  }else {
    console.log(i);
    a = i;
  }
  b = document.getElementById('risultato').innerHTML;
  document.getElementById('risultato').innerHTML = b + "<li>"+a+"</li>";
}
