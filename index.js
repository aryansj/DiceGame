var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1 ;

document.querySelector( ".dice .img1" ).setAttribute( "src", "images/dice" + randomNumber1 + ".png" );

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1 ;

document.querySelector( ".dice .img2" ).setAttribute( "src", "images/dice" + randomNumber2 + ".png" );

var sum = randomNumber1 + randomNumber2;


if (sum%2 === 1) {
  document.querySelector("h1").innerHTML = "ODD WINS!";
} else {
  document.querySelector("h1").innerHTML = "EVEN WINS!";
}
