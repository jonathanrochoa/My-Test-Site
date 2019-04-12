var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/main-image.png') {
    myImage.setAttribute ('src','images/second-image.png');
  } else {
    myImage.setAttribute ('src','images/main-image.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please Enter Your Name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName + '! ';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
