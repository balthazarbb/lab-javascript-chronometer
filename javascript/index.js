const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  
}

function printMinutes() {
  let seconds = chronometer.getSeconds();
  let twoDigits = chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = twoDigits[1];
  secDec.innerHTML = twoDigits [0];
}

function printSeconds() {
let seconds = chronometer.getSeconds();
let twoDigits = chronometer.twoDigitsNumber(seconds);
secUni.innerHTML = twoDigits[1];
secDec.innerHTML = twoDigits [0];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className ="btn split"

}

function setStartBtn() {
 btnLeft.innerText = "START";
 btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset" ;
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START"){
    setStopBtn();
    chronometer.startClick(printSeconds);
  }else if (btnLeft.innerText === "STOP"){
    setStartBtn();
  }
} );

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerText === "RESET"){
    setSplitBtn();
  }else if (btnRight.innerText === "SPLIT"){
    setResetBtn();

  }
});
