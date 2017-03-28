var ctx, keystate;
var gameWidth = 801;
var gameHeight = 601;
var squareWidth = 47;
var squareHeight = 47;
var gameSpaceData = [[]];
var squareColor = "white";
var changeColor = [false];

window.onload = function() {

    //create game area
    MapOneSetUp();
    var canvas = document.getElementById('canvas');  
    ctx = canvas.getContext('2d');
    canvas.width = gameWidth;
    canvas.height = gameHeight;
    canvas.addEventListener("mousedown", getPosition, false);
     
    setInterval(update, 30);
    
    
}


function update() {
    makeGameMap();
   
  
}





