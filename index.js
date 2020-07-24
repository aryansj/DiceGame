var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1 ;

document.querySelector( ".dice .img1" ).setAttribute( "src", "images/dice" + randomNumber1 + ".png" );

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1 ;

document.querySelector( ".dice .img2" ).setAttribute( "src", "images/dice" + randomNumber2 + ".png" );

if ( randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS!"
}

if ( randomNumber1 < randomNumber2 ) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!"
}

if ( randomNumber1 === randomNumber2 ) {
  document.querySelector("h1").innerHTML = "DRAW!"
}
